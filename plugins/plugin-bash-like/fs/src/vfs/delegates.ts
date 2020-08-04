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

import { flatten } from '@kui-shell/core'
import { VFS, findMount, multiFindMount } from '.'

/**
 * ls delegate
 *
 */
export async function ls(...parameters: Parameters<VFS['ls']>): Promise<ReturnType<VFS['ls']>> {
  const mounts = multiFindMount(parameters[1])
  return flatten(await Promise.all(mounts.map(({ filepaths, mount }) => mount.ls(parameters[0], filepaths))))
}

/**
 * cp delegate
 *
 */
export async function cp(...parameters: Parameters<VFS['cp']>): ReturnType<VFS['cp']> {
  const mount = findMount(parameters[2])
  return mount.cp(parameters[0], parameters[1], parameters[2])
}

/**
 * rm delegate
 *
 */
export async function rm(...parameters: Parameters<VFS['rm']>): ReturnType<VFS['rm']> {
  const mount = findMount(parameters[1])
  await mount.rm(parameters[0], parameters[1], parameters[2])
}

/**
 * fstat delegate
 *
 */
export async function fstat(...parameters: Parameters<VFS['fstat']>): ReturnType<VFS['fstat']> {
  const mount = findMount(parameters[1])
  return mount.fstat(parameters[0], parameters[1], parameters[2], parameters[3])
}

/**
 * mkdir delegate
 *
 */
export async function mkdir(...parameters: Parameters<VFS['mkdir']>): ReturnType<VFS['mkdir']> {
  const mount = findMount(parameters[1])
  return mount.mkdir(parameters[0], parameters[1])
}

/**
 * rmdir delegate
 *
 */
export async function rmdir(...parameters: Parameters<VFS['rmdir']>): ReturnType<VFS['rmdir']> {
  const mount = findMount(parameters[1])
  return mount.rmdir(parameters[0], parameters[1])
}