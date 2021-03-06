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

import { Arguments, ExecType, i18n } from '@kui-shell/core'

import readConfig from './config'
import { isGoodConfig } from './local'
import { hasEndpoint } from '../model/Config'
import { setEndpointIfPossible } from './endpoint'

const strings = i18n('plugin-ibmcloud', 'cos')

export default async function(args: Arguments) {
  const config = await readConfig(args)

  if (isGoodConfig(config)) {
    if (args.execOptions.type !== ExecType.Nested) {
      return strings('validCreds')
    } else {
      return config
    }
  } else {
    let noEndpoint = !hasEndpoint(config)
    if (!hasEndpoint(config)) {
      noEndpoint = !(await setEndpointIfPossible(args))
    }

    const noCreds = !config.HMACProvided || !config.AccessKeyID || !config.SecretAccessKey

    const noCredsMessage = strings('noCreds')
    const noEndpointMessage = strings('noEndpoint')

    if (noEndpoint && noCreds) {
      throw new Error(`${noCredsMessage} ${noEndpointMessage}`)
    } else if (noEndpoint) {
      throw new Error(noEndpointMessage)
    } else if (noCreds) {
      throw new Error(noCredsMessage)
    } else {
      return strings('validCreds')
    }
  }
}
