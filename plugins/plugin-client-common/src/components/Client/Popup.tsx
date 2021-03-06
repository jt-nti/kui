/*
 * Copyright 2020 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// FIXME:
/* eslint-disable react/prop-types */

import React from 'react'
import { eventBus, Tab as KuiTab, teeToFile } from '@kui-shell/core'

import { ContextWidgets, InputStripe, StatusStripe, TabContent, TabModel } from '../..'

import '../../../web/css/static/Popup.scss'

interface Props {
  commandLine: string[]
  children?: React.ReactNode
}

interface State {
  tab: KuiTab
  model: TabModel
  promptPlaceholder: string
}

export default class Popup extends React.PureComponent<Props, State> {
  private _inputStripeRef = React.createRef<InputStripe>()

  public constructor(props: Props) {
    super(props)

    const tabModel = new TabModel()

    eventBus.onceWithTabId('/tab/close/request', tabModel.uuid, async (_, tab: KuiTab) => {
      // tab close is window close for the popup client
      tab.REPL.qexec('window close', undefined, undefined, { tab })
    })

    eventBus.onCommandComplete(tabModel.uuid, async ({ command, response }) => {
      if (process.env.KUI_TEE_TO_FILE) {
        // tee the response to a file
        // maybe in the future we could do this better
        // e.g. hoistingit to Kui, making it driven off a property rather than env variable
        await teeToFile(response)
      }

      this.setState({ promptPlaceholder: command })
      this.doFocusInput()
    })

    this.state = {
      tab: undefined,
      model: tabModel,
      promptPlaceholder: ''
    }
  }

  private onTabReady(tab: KuiTab) {
    this.setState({ tab })
    tab.REPL.pexec(this.props.commandLine.join(' '), { tab })
    this.doFocusInput()
  }

  private doFocusInput() {
    if (this._inputStripeRef.current) {
      setTimeout(() => this._inputStripeRef.current.doFocus())
    }
  }

  public render() {
    return (
      <div className="kui--full-height">
        <TabContent
          noActiveInput
          uuid={this.state.model.uuid}
          active
          state={this.state.model.state}
          onTabReady={this.onTabReady.bind(this)}
        ></TabContent>
        <StatusStripe>
          <ContextWidgets className="kui--input-stripe-in-status-stripe">
            {this.state.tab && (
              <InputStripe
                ref={this._inputStripeRef}
                promptPlaceholder={this.state.promptPlaceholder}
                uuid={this.state.model.uuid}
                tab={this.state.tab}
              />
            )}
          </ContextWidgets>
          {this.props.children}
        </StatusStripe>
      </div>
    )
  }
}
