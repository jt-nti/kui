# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.2.0](https://github.com/IBM/kui/compare/v4.5.0...v9.2.0) (2020-11-25)

### Bug Fixes

- **plugins/plugin-bash-like:** ls -l should show size column in splits ([e7b060f](https://github.com/IBM/kui/commit/e7b060f)), closes [#6193](https://github.com/IBM/kui/issues/6193)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- **plugins/plugin-bashlike:** when an XtermResponse is not an error, it has no `code` field ([bdd87ef](https://github.com/IBM/kui/commit/bdd87ef)), closes [#6177](https://github.com/IBM/kui/issues/6177)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- improve discovery of ibmcloud s3 credentials ([96d5bc0](https://github.com/IBM/kui/commit/96d5bc0)), closes [#5926](https://github.com/IBM/kui/issues/5926)
- **packages/core:** improve parsing of semicolons ([921cfd8](https://github.com/IBM/kui/commit/921cfd8)), closes [#5315](https://github.com/IBM/kui/issues/5315)
- **packages/core:** repl exec should invoke commands separated by semicolon ([016b3b0](https://github.com/IBM/kui/commit/016b3b0)), closes [#5260](https://github.com/IBM/kui/issues/5260)
- **plugins/plugin-bash-like:** in Popup mode, active PTY is not themed, has flashing effect ([d583e68](https://github.com/IBM/kui/commit/d583e68)), closes [#4889](https://github.com/IBM/kui/issues/4889)
- **plugins/plugin-bash-like:** ls columns should adjust to filenames presented ([f07a5df](https://github.com/IBM/kui/commit/f07a5df)), closes [#5312](https://github.com/IBM/kui/issues/5312)
- **plugins/plugin-bash-like:** ls on windows behaves poorly ([e92947e](https://github.com/IBM/kui/commit/e92947e)), closes [#5898](https://github.com/IBM/kui/issues/5898)
- **plugins/plugin-bash-like:** PTY error messages may not reach users in all case ([f5831e9](https://github.com/IBM/kui/commit/f5831e9)), closes [#5328](https://github.com/IBM/kui/issues/5328)
- **plugins/plugin-client-common:** update welcome.json to describe kui, not just notebooks ([96330c4](https://github.com/IBM/kui/commit/96330c4)), closes [#5878](https://github.com/IBM/kui/issues/5878)
- ls comand is not snapshotable ([f04ca78](https://github.com/IBM/kui/commit/f04ca78)), closes [#5241](https://github.com/IBM/kui/issues/5241)
- **plugins/plugin-bash-like:** in browser client-server configs, env is lost in `cd` ([fec17e8](https://github.com/IBM/kui/commit/fec17e8)), closes [#5659](https://github.com/IBM/kui/issues/5659)
- **plugins/plugin-bash-like:** ls should measure gridTemplateColumns more intelligently ([0b06e60](https://github.com/IBM/kui/commit/0b06e60)), closes [#5353](https://github.com/IBM/kui/issues/5353)
- **plugins/plugin-bash-like:** tab completion completes with notebook title rather than notebook file name ([38862f8](https://github.com/IBM/kui/commit/38862f8)), closes [#5561](https://github.com/IBM/kui/issues/5561)
- **plugins/plugin-bash-like:** use standard table UI for ls -l output ([8996f85](https://github.com/IBM/kui/commit/8996f85)), closes [#5479](https://github.com/IBM/kui/issues/5479)
- **plugins/plugin-bash-like:** when clicking directory in ls -l output, response is an ls (not ls -l) of that clicked directory ([57508c5](https://github.com/IBM/kui/commit/57508c5)), closes [#5796](https://github.com/IBM/kui/issues/5796)
- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- don't show the `open` command for clicking files in `ls` table ([03ef269](https://github.com/IBM/kui/commit/03ef269)), closes [#5748](https://github.com/IBM/kui/issues/5748)
- improve the discoverability of repl-block action buttons ([470da34](https://github.com/IBM/kui/commit/470da34)), closes [#5604](https://github.com/IBM/kui/issues/5604)
- improve vfs cp to handle disparate source ([e55e528](https://github.com/IBM/kui/commit/e55e528)), closes [#5786](https://github.com/IBM/kui/issues/5786)
- **plugins/plugin-bash-like:** optimize pty/client to remove logic that accumulates output ([49f1003](https://github.com/IBM/kui/commit/49f1003)), closes [#5200](https://github.com/IBM/kui/issues/5200)
- **plugins/plugin-bash-like:** server-side of proxy does not handle message fragmentation in the downstream direction ([e502158](https://github.com/IBM/kui/commit/e502158)), closes [#5631](https://github.com/IBM/kui/issues/5631)
- **plugins/plugin-client-common:** a few small refinements to "editing" UI for Inputs ([001236a](https://github.com/IBM/kui/commit/001236a)), closes [#5656](https://github.com/IBM/kui/issues/5656) [#5658](https://github.com/IBM/kui/issues/5658)
- **plugins/plugin-s3:** improve globbing in s3 rm commands ([48ef3bd](https://github.com/IBM/kui/commit/48ef3bd)), closes [#5709](https://github.com/IBM/kui/issues/5709)
- avoid hard-coded use of /tmp in kubectl edit ([8e4cb70](https://github.com/IBM/kui/commit/8e4cb70)), closes [#4928](https://github.com/IBM/kui/issues/4928)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- erratic scroll region behavior ([be0e2a0](https://github.com/IBM/kui/commit/be0e2a0)), closes [#4898](https://github.com/IBM/kui/issues/4898)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty output has different indentation than kui command output ([30b10a3](https://github.com/IBM/kui/commit/30b10a3)), closes [#5542](https://github.com/IBM/kui/issues/5542)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- vfs fixes for multi-source copying and for s3 globbing ([893902e](https://github.com/IBM/kui/commit/893902e)), closes [#5511](https://github.com/IBM/kui/issues/5511)
- xterm alt buffer mode behaves oddly for clients that do not enable splitTerminals ([f1bc709](https://github.com/IBM/kui/commit/f1bc709)), closes [#5003](https://github.com/IBM/kui/issues/5003)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- **plugins/plugin-proxy-support:** improved display of ProxyOffline state ([23b3206](https://github.com/IBM/kui/commit/23b3206)), closes [#4955](https://github.com/IBM/kui/issues/4955)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add capability to click to edit/rerun a command ([4296933](https://github.com/IBM/kui/commit/4296933)), closes [#5654](https://github.com/IBM/kui/issues/5654)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- add support for copying out of remote storage ([c4ed5b8](https://github.com/IBM/kui/commit/c4ed5b8)), closes [#5322](https://github.com/IBM/kui/issues/5322)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- experimental parallelized cp aginst s3 vfs ([6a07aa3](https://github.com/IBM/kui/commit/6a07aa3)), closes [#6213](https://github.com/IBM/kui/issues/6213)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- improve repl-block selection ([305b36f](https://github.com/IBM/kui/commit/305b36f)), closes [#5587](https://github.com/IBM/kui/issues/5587)
- inline sidecar ([2c3afeb](https://github.com/IBM/kui/commit/2c3afeb)), closes [#6007](https://github.com/IBM/kui/issues/6007)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- MiniSplits ([70b8441](https://github.com/IBM/kui/commit/70b8441)), closes [#5112](https://github.com/IBM/kui/issues/5112)
- mount all s3 providers ([c3f5fc5](https://github.com/IBM/kui/commit/c3f5fc5)), closes [#5731](https://github.com/IBM/kui/issues/5731)
- Move in OpenWhisk plugin from the external repo ([b9c5867](https://github.com/IBM/kui/commit/b9c5867)), closes [#6109](https://github.com/IBM/kui/issues/6109)
- notebook client ([4b64133](https://github.com/IBM/kui/commit/4b64133)), closes [#5501](https://github.com/IBM/kui/issues/5501)
- pass command line comments to commentary command ([a020db5](https://github.com/IBM/kui/commit/a020db5)), closes [#5459](https://github.com/IBM/kui/issues/5459)
- s3 plugin, and vfs ([970ba6e](https://github.com/IBM/kui/commit/970ba6e)), closes [#5319](https://github.com/IBM/kui/issues/5319)
- save/restore pty command output ([2c291a9](https://github.com/IBM/kui/commit/2c291a9)), closes [#5314](https://github.com/IBM/kui/issues/5314)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- snapshot freshening ([d5c8991](https://github.com/IBM/kui/commit/d5c8991)), closes [#5522](https://github.com/IBM/kui/issues/5522)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- update ls to allow for presenting content from more limited VFS's such as tutorials ([a1ff1a4](https://github.com/IBM/kui/commit/a1ff1a4)), closes [#5497](https://github.com/IBM/kui/issues/5497)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-bash-like:** tab completion for s3 buckets ([fc3a311](https://github.com/IBM/kui/commit/fc3a311)), closes [#5326](https://github.com/IBM/kui/issues/5326)
- **plugins/plugin-client-common:** allow easier rerunning of command from terminal ([c5384e0](https://github.com/IBM/kui/commit/c5384e0)), closes [#4570](https://github.com/IBM/kui/issues/4570)
- tutorial VFS ([6f2330e](https://github.com/IBM/kui/commit/6f2330e)), closes [#5441](https://github.com/IBM/kui/issues/5441)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- **plugins/plugin-git:** git branch should respond with RadioTable ([59a9213](https://github.com/IBM/kui/commit/59a9213)), closes [#5256](https://github.com/IBM/kui/issues/5256)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [9.1.0](https://github.com/IBM/kui/compare/v4.5.0...v9.1.0) (2020-10-26)

### Bug Fixes

- improve discovery of ibmcloud s3 credentials ([96d5bc0](https://github.com/IBM/kui/commit/96d5bc0)), closes [#5926](https://github.com/IBM/kui/issues/5926)
- **plugins/plugin-bash-like:** ls on windows behaves poorly ([e92947e](https://github.com/IBM/kui/commit/e92947e)), closes [#5898](https://github.com/IBM/kui/issues/5898)
- **plugins/plugin-client-common:** update welcome.json to describe kui, not just notebooks ([96330c4](https://github.com/IBM/kui/commit/96330c4)), closes [#5878](https://github.com/IBM/kui/issues/5878)
- don't show the `open` command for clicking files in `ls` table ([03ef269](https://github.com/IBM/kui/commit/03ef269)), closes [#5748](https://github.com/IBM/kui/issues/5748)
- ls comand is not snapshotable ([f04ca78](https://github.com/IBM/kui/commit/f04ca78)), closes [#5241](https://github.com/IBM/kui/issues/5241)
- **packages/core:** improve parsing of semicolons ([921cfd8](https://github.com/IBM/kui/commit/921cfd8)), closes [#5315](https://github.com/IBM/kui/issues/5315)
- **packages/core:** repl exec should invoke commands separated by semicolon ([016b3b0](https://github.com/IBM/kui/commit/016b3b0)), closes [#5260](https://github.com/IBM/kui/issues/5260)
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- **plugins/plugin-bash-like:** in browser client-server configs, env is lost in `cd` ([fec17e8](https://github.com/IBM/kui/commit/fec17e8)), closes [#5659](https://github.com/IBM/kui/issues/5659)
- **plugins/plugin-bash-like:** in Popup mode, active PTY is not themed, has flashing effect ([d583e68](https://github.com/IBM/kui/commit/d583e68)), closes [#4889](https://github.com/IBM/kui/issues/4889)
- **plugins/plugin-bash-like:** ls columns should adjust to filenames presented ([f07a5df](https://github.com/IBM/kui/commit/f07a5df)), closes [#5312](https://github.com/IBM/kui/issues/5312)
- **plugins/plugin-bash-like:** ls should measure gridTemplateColumns more intelligently ([0b06e60](https://github.com/IBM/kui/commit/0b06e60)), closes [#5353](https://github.com/IBM/kui/issues/5353)
- **plugins/plugin-bash-like:** optimize pty/client to remove logic that accumulates output ([49f1003](https://github.com/IBM/kui/commit/49f1003)), closes [#5200](https://github.com/IBM/kui/issues/5200)
- **plugins/plugin-bash-like:** PTY error messages may not reach users in all case ([f5831e9](https://github.com/IBM/kui/commit/f5831e9)), closes [#5328](https://github.com/IBM/kui/issues/5328)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** tab completion completes with notebook title rather than notebook file name ([38862f8](https://github.com/IBM/kui/commit/38862f8)), closes [#5561](https://github.com/IBM/kui/issues/5561)
- **plugins/plugin-bash-like:** use standard table UI for ls -l output ([8996f85](https://github.com/IBM/kui/commit/8996f85)), closes [#5479](https://github.com/IBM/kui/issues/5479)
- **plugins/plugin-bash-like:** when clicking directory in ls -l output, response is an ls (not ls -l) of that clicked directory ([57508c5](https://github.com/IBM/kui/commit/57508c5)), closes [#5796](https://github.com/IBM/kui/issues/5796)
- improve vfs cp to handle disparate source ([e55e528](https://github.com/IBM/kui/commit/e55e528)), closes [#5786](https://github.com/IBM/kui/issues/5786)
- **plugins/plugin-bash-like:** server-side of proxy does not handle message fragmentation in the downstream direction ([e502158](https://github.com/IBM/kui/commit/e502158)), closes [#5631](https://github.com/IBM/kui/issues/5631)
- **plugins/plugin-client-common:** a few small refinements to "editing" UI for Inputs ([001236a](https://github.com/IBM/kui/commit/001236a)), closes [#5656](https://github.com/IBM/kui/issues/5656) [#5658](https://github.com/IBM/kui/issues/5658)
- **plugins/plugin-s3:** improve globbing in s3 rm commands ([48ef3bd](https://github.com/IBM/kui/commit/48ef3bd)), closes [#5709](https://github.com/IBM/kui/issues/5709)
- avoid hard-coded use of /tmp in kubectl edit ([8e4cb70](https://github.com/IBM/kui/commit/8e4cb70)), closes [#4928](https://github.com/IBM/kui/issues/4928)
- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- erratic scroll region behavior ([be0e2a0](https://github.com/IBM/kui/commit/be0e2a0)), closes [#4898](https://github.com/IBM/kui/issues/4898)
- improve the discoverability of repl-block action buttons ([470da34](https://github.com/IBM/kui/commit/470da34)), closes [#5604](https://github.com/IBM/kui/issues/5604)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- pty output has different indentation than kui command output ([30b10a3](https://github.com/IBM/kui/commit/30b10a3)), closes [#5542](https://github.com/IBM/kui/issues/5542)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- vfs fixes for multi-source copying and for s3 globbing ([893902e](https://github.com/IBM/kui/commit/893902e)), closes [#5511](https://github.com/IBM/kui/issues/5511)
- xterm alt buffer mode behaves oddly for clients that do not enable splitTerminals ([f1bc709](https://github.com/IBM/kui/commit/f1bc709)), closes [#5003](https://github.com/IBM/kui/issues/5003)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-proxy-support:** improved display of ProxyOffline state ([23b3206](https://github.com/IBM/kui/commit/23b3206)), closes [#4955](https://github.com/IBM/kui/issues/4955)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add capability to click to edit/rerun a command ([4296933](https://github.com/IBM/kui/commit/4296933)), closes [#5654](https://github.com/IBM/kui/issues/5654)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- add support for copying out of remote storage ([c4ed5b8](https://github.com/IBM/kui/commit/c4ed5b8)), closes [#5322](https://github.com/IBM/kui/issues/5322)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- improve repl-block selection ([305b36f](https://github.com/IBM/kui/commit/305b36f)), closes [#5587](https://github.com/IBM/kui/issues/5587)
- inline sidecar ([2c3afeb](https://github.com/IBM/kui/commit/2c3afeb)), closes [#6007](https://github.com/IBM/kui/issues/6007)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- MiniSplits ([70b8441](https://github.com/IBM/kui/commit/70b8441)), closes [#5112](https://github.com/IBM/kui/issues/5112)
- mount all s3 providers ([c3f5fc5](https://github.com/IBM/kui/commit/c3f5fc5)), closes [#5731](https://github.com/IBM/kui/issues/5731)
- notebook client ([4b64133](https://github.com/IBM/kui/commit/4b64133)), closes [#5501](https://github.com/IBM/kui/issues/5501)
- pass command line comments to commentary command ([a020db5](https://github.com/IBM/kui/commit/a020db5)), closes [#5459](https://github.com/IBM/kui/issues/5459)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- s3 plugin, and vfs ([970ba6e](https://github.com/IBM/kui/commit/970ba6e)), closes [#5319](https://github.com/IBM/kui/issues/5319)
- save/restore pty command output ([2c291a9](https://github.com/IBM/kui/commit/2c291a9)), closes [#5314](https://github.com/IBM/kui/issues/5314)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- snapshot freshening ([d5c8991](https://github.com/IBM/kui/commit/d5c8991)), closes [#5522](https://github.com/IBM/kui/issues/5522)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- update ls to allow for presenting content from more limited VFS's such as tutorials ([a1ff1a4](https://github.com/IBM/kui/commit/a1ff1a4)), closes [#5497](https://github.com/IBM/kui/issues/5497)
- **plugins/plugin-client-common:** allow easier rerunning of command from terminal ([c5384e0](https://github.com/IBM/kui/commit/c5384e0)), closes [#4570](https://github.com/IBM/kui/issues/4570)
- tutorial VFS ([6f2330e](https://github.com/IBM/kui/commit/6f2330e)), closes [#5441](https://github.com/IBM/kui/issues/5441)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-bash-like:** tab completion for s3 buckets ([fc3a311](https://github.com/IBM/kui/commit/fc3a311)), closes [#5326](https://github.com/IBM/kui/issues/5326)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- **plugins/plugin-git:** git branch should respond with RadioTable ([59a9213](https://github.com/IBM/kui/commit/59a9213)), closes [#5256](https://github.com/IBM/kui/issues/5256)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [9.0.0](https://github.com/IBM/kui/compare/v4.5.0...v9.0.0) (2020-10-08)

### Bug Fixes

- **plugins/plugin-bash-like:** ls on windows behaves poorly ([e92947e](https://github.com/IBM/kui/commit/e92947e)), closes [#5898](https://github.com/IBM/kui/issues/5898)
- **plugins/plugin-client-common:** update welcome.json to describe kui, not just notebooks ([96330c4](https://github.com/IBM/kui/commit/96330c4)), closes [#5878](https://github.com/IBM/kui/issues/5878)
- ls comand is not snapshotable ([f04ca78](https://github.com/IBM/kui/commit/f04ca78)), closes [#5241](https://github.com/IBM/kui/issues/5241)
- **plugins/plugin-bash-like:** in browser client-server configs, env is lost in `cd` ([fec17e8](https://github.com/IBM/kui/commit/fec17e8)), closes [#5659](https://github.com/IBM/kui/issues/5659)
- **plugins/plugin-bash-like:** in Popup mode, active PTY is not themed, has flashing effect ([d583e68](https://github.com/IBM/kui/commit/d583e68)), closes [#4889](https://github.com/IBM/kui/issues/4889)
- **plugins/plugin-bash-like:** ls columns should adjust to filenames presented ([f07a5df](https://github.com/IBM/kui/commit/f07a5df)), closes [#5312](https://github.com/IBM/kui/issues/5312)
- **plugins/plugin-bash-like:** ls should measure gridTemplateColumns more intelligently ([0b06e60](https://github.com/IBM/kui/commit/0b06e60)), closes [#5353](https://github.com/IBM/kui/issues/5353)
- **plugins/plugin-bash-like:** when clicking directory in ls -l output, response is an ls (not ls -l) of that clicked directory ([57508c5](https://github.com/IBM/kui/commit/57508c5)), closes [#5796](https://github.com/IBM/kui/issues/5796)
- don't show the `open` command for clicking files in `ls` table ([03ef269](https://github.com/IBM/kui/commit/03ef269)), closes [#5748](https://github.com/IBM/kui/issues/5748)
- improve vfs cp to handle disparate source ([e55e528](https://github.com/IBM/kui/commit/e55e528)), closes [#5786](https://github.com/IBM/kui/issues/5786)
- **packages/core:** improve parsing of semicolons ([921cfd8](https://github.com/IBM/kui/commit/921cfd8)), closes [#5315](https://github.com/IBM/kui/issues/5315)
- **packages/core:** repl exec should invoke commands separated by semicolon ([016b3b0](https://github.com/IBM/kui/commit/016b3b0)), closes [#5260](https://github.com/IBM/kui/issues/5260)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- **plugins/plugin-bash-like:** optimize pty/client to remove logic that accumulates output ([49f1003](https://github.com/IBM/kui/commit/49f1003)), closes [#5200](https://github.com/IBM/kui/issues/5200)
- **plugins/plugin-bash-like:** PTY error messages may not reach users in all case ([f5831e9](https://github.com/IBM/kui/commit/f5831e9)), closes [#5328](https://github.com/IBM/kui/issues/5328)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** server-side of proxy does not handle message fragmentation in the downstream direction ([e502158](https://github.com/IBM/kui/commit/e502158)), closes [#5631](https://github.com/IBM/kui/issues/5631)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** tab completion completes with notebook title rather than notebook file name ([38862f8](https://github.com/IBM/kui/commit/38862f8)), closes [#5561](https://github.com/IBM/kui/issues/5561)
- **plugins/plugin-bash-like:** use standard table UI for ls -l output ([8996f85](https://github.com/IBM/kui/commit/8996f85)), closes [#5479](https://github.com/IBM/kui/issues/5479)
- **plugins/plugin-client-common:** a few small refinements to "editing" UI for Inputs ([001236a](https://github.com/IBM/kui/commit/001236a)), closes [#5656](https://github.com/IBM/kui/issues/5656) [#5658](https://github.com/IBM/kui/issues/5658)
- **plugins/plugin-proxy-support:** improved display of ProxyOffline state ([23b3206](https://github.com/IBM/kui/commit/23b3206)), closes [#4955](https://github.com/IBM/kui/issues/4955)
- **plugins/plugin-s3:** improve globbing in s3 rm commands ([48ef3bd](https://github.com/IBM/kui/commit/48ef3bd)), closes [#5709](https://github.com/IBM/kui/issues/5709)
- avoid hard-coded use of /tmp in kubectl edit ([8e4cb70](https://github.com/IBM/kui/commit/8e4cb70)), closes [#4928](https://github.com/IBM/kui/issues/4928)
- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- erratic scroll region behavior ([be0e2a0](https://github.com/IBM/kui/commit/be0e2a0)), closes [#4898](https://github.com/IBM/kui/issues/4898)
- improve the discoverability of repl-block action buttons ([470da34](https://github.com/IBM/kui/commit/470da34)), closes [#5604](https://github.com/IBM/kui/issues/5604)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty output has different indentation than kui command output ([30b10a3](https://github.com/IBM/kui/commit/30b10a3)), closes [#5542](https://github.com/IBM/kui/issues/5542)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- vfs fixes for multi-source copying and for s3 globbing ([893902e](https://github.com/IBM/kui/commit/893902e)), closes [#5511](https://github.com/IBM/kui/issues/5511)
- xterm alt buffer mode behaves oddly for clients that do not enable splitTerminals ([f1bc709](https://github.com/IBM/kui/commit/f1bc709)), closes [#5003](https://github.com/IBM/kui/issues/5003)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add capability to click to edit/rerun a command ([4296933](https://github.com/IBM/kui/commit/4296933)), closes [#5654](https://github.com/IBM/kui/issues/5654)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- add support for copying out of remote storage ([c4ed5b8](https://github.com/IBM/kui/commit/c4ed5b8)), closes [#5322](https://github.com/IBM/kui/issues/5322)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- background new tabs ([be9f986](https://github.com/IBM/kui/commit/be9f986)), closes [#5550](https://github.com/IBM/kui/issues/5550)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- Feature: improve support for parallelization across VFS operations ([e05d7e0](https://github.com/IBM/kui/commit/e05d7e0)), closes [#5831](https://github.com/IBM/kui/issues/5831)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- improve repl-block selection ([305b36f](https://github.com/IBM/kui/commit/305b36f)), closes [#5587](https://github.com/IBM/kui/issues/5587)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- MiniSplits ([70b8441](https://github.com/IBM/kui/commit/70b8441)), closes [#5112](https://github.com/IBM/kui/issues/5112)
- mount all s3 providers ([c3f5fc5](https://github.com/IBM/kui/commit/c3f5fc5)), closes [#5731](https://github.com/IBM/kui/issues/5731)
- notebook client ([4b64133](https://github.com/IBM/kui/commit/4b64133)), closes [#5501](https://github.com/IBM/kui/issues/5501)
- pass command line comments to commentary command ([a020db5](https://github.com/IBM/kui/commit/a020db5)), closes [#5459](https://github.com/IBM/kui/issues/5459)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- save/restore pty command output ([2c291a9](https://github.com/IBM/kui/commit/2c291a9)), closes [#5314](https://github.com/IBM/kui/issues/5314)
- snapshot freshening ([d5c8991](https://github.com/IBM/kui/commit/d5c8991)), closes [#5522](https://github.com/IBM/kui/issues/5522)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- update ls to allow for presenting content from more limited VFS's such as tutorials ([a1ff1a4](https://github.com/IBM/kui/commit/a1ff1a4)), closes [#5497](https://github.com/IBM/kui/issues/5497)
- **plugins/plugin-client-common:** allow easier rerunning of command from terminal ([c5384e0](https://github.com/IBM/kui/commit/c5384e0)), closes [#4570](https://github.com/IBM/kui/issues/4570)
- tutorial VFS ([6f2330e](https://github.com/IBM/kui/commit/6f2330e)), closes [#5441](https://github.com/IBM/kui/issues/5441)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-bash-like:** tab completion for s3 buckets ([fc3a311](https://github.com/IBM/kui/commit/fc3a311)), closes [#5326](https://github.com/IBM/kui/issues/5326)
- s3 plugin, and vfs ([970ba6e](https://github.com/IBM/kui/commit/970ba6e)), closes [#5319](https://github.com/IBM/kui/issues/5319)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- **plugins/plugin-git:** git branch should respond with RadioTable ([59a9213](https://github.com/IBM/kui/commit/59a9213)), closes [#5256](https://github.com/IBM/kui/issues/5256)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.12.0](https://github.com/IBM/kui/compare/v4.5.0...v8.12.0) (2020-08-20)

### Bug Fixes

- **packages/core:** repl exec should invoke commands separated by semicolon ([016b3b0](https://github.com/IBM/kui/commit/016b3b0)), closes [#5260](https://github.com/IBM/kui/issues/5260)
- **plugins/plugin-bash-like:** in Popup mode, active PTY is not themed, has flashing effect ([d583e68](https://github.com/IBM/kui/commit/d583e68)), closes [#4889](https://github.com/IBM/kui/issues/4889)
- **plugins/plugin-bash-like:** ls columns should adjust to filenames presented ([f07a5df](https://github.com/IBM/kui/commit/f07a5df)), closes [#5312](https://github.com/IBM/kui/issues/5312)
- **plugins/plugin-bash-like:** ls should measure gridTemplateColumns more intelligently ([0b06e60](https://github.com/IBM/kui/commit/0b06e60)), closes [#5353](https://github.com/IBM/kui/issues/5353)
- **plugins/plugin-bash-like:** optimize pty/client to remove logic that accumulates output ([49f1003](https://github.com/IBM/kui/commit/49f1003)), closes [#5200](https://github.com/IBM/kui/issues/5200)
- **plugins/plugin-bash-like:** PTY error messages may not reach users in all case ([f5831e9](https://github.com/IBM/kui/commit/f5831e9)), closes [#5328](https://github.com/IBM/kui/issues/5328)
- avoid hard-coded use of /tmp in kubectl edit ([8e4cb70](https://github.com/IBM/kui/commit/8e4cb70)), closes [#4928](https://github.com/IBM/kui/issues/4928)
- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- erratic scroll region behavior ([be0e2a0](https://github.com/IBM/kui/commit/be0e2a0)), closes [#4898](https://github.com/IBM/kui/issues/4898)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- xterm alt buffer mode behaves oddly for clients that do not enable splitTerminals ([f1bc709](https://github.com/IBM/kui/commit/f1bc709)), closes [#5003](https://github.com/IBM/kui/issues/5003)
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- **plugins/plugin-proxy-support:** improved display of ProxyOffline state ([23b3206](https://github.com/IBM/kui/commit/23b3206)), closes [#4955](https://github.com/IBM/kui/issues/4955)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- **plugins/plugin-bash-like:** tab completion for s3 buckets ([fc3a311](https://github.com/IBM/kui/commit/fc3a311)), closes [#5326](https://github.com/IBM/kui/issues/5326)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- add support for copying out of remote storage ([c4ed5b8](https://github.com/IBM/kui/commit/c4ed5b8)), closes [#5322](https://github.com/IBM/kui/issues/5322)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- s3 plugin, and vfs ([970ba6e](https://github.com/IBM/kui/commit/970ba6e)), closes [#5319](https://github.com/IBM/kui/issues/5319)
- **plugins/plugin-git:** git branch should respond with RadioTable ([59a9213](https://github.com/IBM/kui/commit/59a9213)), closes [#5256](https://github.com/IBM/kui/issues/5256)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- MiniSplits ([70b8441](https://github.com/IBM/kui/commit/70b8441)), closes [#5112](https://github.com/IBM/kui/issues/5112)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.11.0](https://github.com/IBM/kui/compare/v4.5.0...v8.11.0) (2020-07-21)

### Bug Fixes

- **plugins/plugin-bash-like:** optimize pty/client to remove logic that accumulates output ([49f1003](https://github.com/IBM/kui/commit/49f1003)), closes [#5200](https://github.com/IBM/kui/issues/5200)
- xterm alt buffer mode behaves oddly for clients that do not enable splitTerminals ([f1bc709](https://github.com/IBM/kui/commit/f1bc709)), closes [#5003](https://github.com/IBM/kui/issues/5003)
- **plugins/plugin-proxy-support:** improved display of ProxyOffline state ([23b3206](https://github.com/IBM/kui/commit/23b3206)), closes [#4955](https://github.com/IBM/kui/issues/4955)
- avoid hard-coded use of /tmp in kubectl edit ([8e4cb70](https://github.com/IBM/kui/commit/8e4cb70)), closes [#4928](https://github.com/IBM/kui/issues/4928)
- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- erratic scroll region behavior ([be0e2a0](https://github.com/IBM/kui/commit/be0e2a0)), closes [#4898](https://github.com/IBM/kui/issues/4898)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- **plugins/plugin-bash-like:** in Popup mode, active PTY is not themed, has flashing effect ([d583e68](https://github.com/IBM/kui/commit/d583e68)), closes [#4889](https://github.com/IBM/kui/issues/4889)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- MiniSplits ([70b8441](https://github.com/IBM/kui/commit/70b8441)), closes [#5112](https://github.com/IBM/kui/issues/5112)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.10.0](https://github.com/IBM/kui/compare/v4.5.0...v8.10.0) (2020-06-17)

### Bug Fixes

- erratic scroll region behavior ([be0e2a0](https://github.com/IBM/kui/commit/be0e2a0)), closes [#4898](https://github.com/IBM/kui/issues/4898)
- **plugins/plugin-bash-like:** in Popup mode, active PTY is not themed, has flashing effect ([d583e68](https://github.com/IBM/kui/commit/d583e68)), closes [#4889](https://github.com/IBM/kui/issues/4889)
- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.9.0](https://github.com/IBM/kui/compare/v4.5.0...v8.9.0) (2020-06-09)

### Bug Fixes

- container filter of logs tab shows accumulated logs from previous selection ([08903b4](https://github.com/IBM/kui/commit/08903b4)), closes [#4644](https://github.com/IBM/kui/issues/4644) [#4658](https://github.com/IBM/kui/issues/4658)
- eliminate assumptions that "default" is the default kube namespace ([4eb392d](https://github.com/IBM/kui/commit/4eb392d)), closes [#4764](https://github.com/IBM/kui/issues/4764)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- Input element throws react error ([e6bb21b](https://github.com/IBM/kui/commit/e6bb21b)), closes [#4765](https://github.com/IBM/kui/issues/4765)
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- logs tab toolbar doesn't signify when pods are 404 ([135e1be](https://github.com/IBM/kui/commit/135e1be)), closes [#4646](https://github.com/IBM/kui/issues/4646)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- reduce No log data followed by log data behavior in kube logs ([e1c0624](https://github.com/IBM/kui/commit/e1c0624)), closes [#4624](https://github.com/IBM/kui/issues/4624)
- replace Containers with Logs tab ([00e8786](https://github.com/IBM/kui/commit/00e8786)), closes [#4603](https://github.com/IBM/kui/issues/4603)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** add back configurable shell ([b7fda6c](https://github.com/IBM/kui/commit/b7fda6c))
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- allow <Kui/> users to provide custom views for session init ([1f35894](https://github.com/IBM/kui/commit/1f35894)), closes [#4596](https://github.com/IBM/kui/issues/4596)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- improve kubectl edit experience ([4c4a1c9](https://github.com/IBM/kui/commit/4c4a1c9)), closes [#4783](https://github.com/IBM/kui/issues/4783)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- **plugins/plugin-kubectl:** Terminal tab for Pod kubernetes resources ([c47e432](https://github.com/IBM/kui/commit/c47e432)), closes [#4639](https://github.com/IBM/kui/issues/4639)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.7.0](https://github.com/IBM/kui/compare/v4.5.0...v8.7.0) (2020-05-08)

### Bug Fixes

- **plugins/plugin-bash-like:** fix url regex ([a97b249](https://github.com/IBM/kui/commit/a97b249))
- js and ts files do not get syntax coloring ([d66e71f](https://github.com/IBM/kui/commit/d66e71f)), closes [#4450](https://github.com/IBM/kui/issues/4450)
- use 30/70 split for LeftNavSidecar ([9a43d0b](https://github.com/IBM/kui/commit/9a43d0b)), closes [#4454](https://github.com/IBM/kui/issues/4454) [#4455](https://github.com/IBM/kui/issues/4455)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** PTY performance tweaks by removing !important css ([3e1f8e7](https://github.com/IBM/kui/commit/3e1f8e7)), closes [#4412](https://github.com/IBM/kui/issues/4412)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-bash-like:** small visual glitch in PTY, blocks oddly shift sometimes ([bb2119e](https://github.com/IBM/kui/commit/bb2119e)), closes [#4406](https://github.com/IBM/kui/issues/4406)
- **plugins/plugin-bash-like:** update plugin-bash-like dependencies ([48f8d59](https://github.com/IBM/kui/commit/48f8d59)), closes [#4400](https://github.com/IBM/kui/issues/4400)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- pty/client performance tweaks ([d86458c](https://github.com/IBM/kui/commit/d86458c)), closes [#4397](https://github.com/IBM/kui/issues/4397)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- add Patternfly Breadcrumb support ([91e0504](https://github.com/IBM/kui/commit/91e0504)), closes [#4381](https://github.com/IBM/kui/issues/4381)
- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [8.6.1](https://github.com/IBM/kui/compare/v4.5.0...v8.6.1) (2020-04-25)

### Bug Fixes

- PTY behaves oddly when switching tabs ([700cdda](https://github.com/IBM/kui/commit/700cdda)), closes [#2579](https://github.com/IBM/kui/issues/2579)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.6.0](https://github.com/IBM/kui/compare/v4.5.0...v8.6.0) (2020-04-23)

### Bug Fixes

- **plugins/plugin-bash-like:** avoid using login shell for PTYs ([a0ec1a4](https://github.com/IBM/kui/commit/a0ec1a4)), closes [#1247](https://github.com/IBM/kui/issues/1247) [#1425](https://github.com/IBM/kui/issues/1425)
- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- ibmcloud plugin ([aa0f72f](https://github.com/IBM/kui/commit/aa0f72f)), closes [#4353](https://github.com/IBM/kui/issues/4353)
- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.5.0](https://github.com/IBM/kui/compare/v4.5.0...v8.5.0) (2020-04-19)

### Bug Fixes

- make inBrowserOk the default ([2a3c811](https://github.com/IBM/kui/commit/2a3c811)), closes [#4275](https://github.com/IBM/kui/issues/4275)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)

### chore

- clean up directory structure ([70d19e9](https://github.com/IBM/kui/commit/70d19e9)), closes [#4301](https://github.com/IBM/kui/issues/4301)

### Features

- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- removes support for inBrowserOk
- removes plugin-editor, now in plugin-client-common
- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [8.4.2](https://github.com/IBM/kui/compare/v4.5.0...v8.4.2) (2020-04-10)

### Bug Fixes

- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### Features

- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [8.4.1](https://github.com/IBM/kui/compare/v4.5.0...v8.4.1) (2020-04-10)

### Bug Fixes

- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### Features

- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.4.0](https://github.com/IBM/kui/compare/v4.5.0...v8.4.0) (2020-04-10)

### Bug Fixes

- **plugins/plugin-bash-like:** remove leftover debug in client.ts ([adbe87e](https://github.com/IBM/kui/commit/adbe87e)), closes [#4224](https://github.com/IBM/kui/issues/4224)
- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)

### Features

- simplified co-hosting of client and proxy in a container ([00af4b4](https://github.com/IBM/kui/commit/00af4b4)), closes [#4213](https://github.com/IBM/kui/issues/4213)
- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.1.0](https://github.com/IBM/kui/compare/v4.5.0...v8.1.0) (2020-04-04)

### Bug Fixes

- **plugins/plugin-kubectl:** watcher table disappears when kui is launched as kubectl plugin ([167eabc](https://github.com/IBM/kui/commit/167eabc)), closes [#4120](https://github.com/IBM/kui/issues/4120) [#4123](https://github.com/IBM/kui/issues/4123)
- CurrentGitBranch fails if branch name parses as a number ([a3d8127](https://github.com/IBM/kui/commit/a3d8127)), closes [#4004](https://github.com/IBM/kui/issues/4004)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- text selection in active xterms for light themes is not visible ([ace9ec9](https://github.com/IBM/kui/commit/ace9ec9)), closes [#4087](https://github.com/IBM/kui/issues/4087)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [8.0.0](https://github.com/IBM/kui/compare/v4.5.0...v8.0.0) (2020-03-20)

### Bug Fixes

- **plugins/plugin-bash-like:** pty output with non-zero exit code results in wall of red text ([4b6fe8e](https://github.com/IBM/kui/commit/4b6fe8e)), closes [#3939](https://github.com/IBM/kui/issues/3939)
- eliminate use of custom <tab> tag ([00e2728](https://github.com/IBM/kui/commit/00e2728)), closes [#3777](https://github.com/IBM/kui/issues/3777)
- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- pick a winner if more than one tab completion enumerator has offerings ([fbd6696](https://github.com/IBM/kui/commit/fbd6696)), closes [#3736](https://github.com/IBM/kui/issues/3736)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-client-common:** text-selection is not working in repl ([5672e02](https://github.com/IBM/kui/commit/5672e02)), closes [#3738](https://github.com/IBM/kui/issues/3738) [#3739](https://github.com/IBM/kui/issues/3739) [#3741](https://github.com/IBM/kui/issues/3741)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- **plugins/plugin-client-common:** accordion blocks in Terminal ([eb2f285](https://github.com/IBM/kui/commit/eb2f285)), closes [#3726](https://github.com/IBM/kui/issues/3726)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.12](https://github.com/IBM/kui/compare/v6.0.11...v6.0.12) (2020-02-03)

**Note:** Version bump only for package @kui-shell/plugin-bash-like

## [6.0.11](https://github.com/IBM/kui/compare/v6.0.10...v6.0.11) (2020-02-03)

**Note:** Version bump only for package @kui-shell/plugin-bash-like

## [6.0.10](https://github.com/IBM/kui/compare/v6.0.9...v6.0.10) (2020-02-01)

**Note:** Version bump only for package @kui-shell/plugin-bash-like

## [6.0.9](https://github.com/IBM/kui/compare/v6.0.8...v6.0.9) (2020-01-31)

**Note:** Version bump only for package @kui-shell/plugin-bash-like

## [6.0.8](https://github.com/IBM/kui/compare/v4.5.0...v6.0.8) (2020-01-30)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.7](https://github.com/IBM/kui/compare/v4.5.0...v6.0.7) (2020-01-30)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.6](https://github.com/IBM/kui/compare/v4.5.0...v6.0.6) (2020-01-30)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- **packages/core:** improved cancel via ctrl+c ([7ee6db6](https://github.com/IBM/kui/commit/7ee6db6)), closes [#3275](https://github.com/IBM/kui/issues/3275) [#3581](https://github.com/IBM/kui/issues/3581)
- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.5](https://github.com/IBM/kui/compare/v4.5.0...v6.0.5) (2020-01-29)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.4](https://github.com/IBM/kui/compare/v6.0.3...v6.0.4) (2020-01-28)

**Note:** Version bump only for package @kui-shell/plugin-bash-like

## [6.0.3](https://github.com/IBM/kui/compare/v4.5.0...v6.0.3) (2020-01-28)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.2](https://github.com/IBM/kui/compare/v4.5.0...v6.0.2) (2020-01-28)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

## [6.0.1](https://github.com/IBM/kui/compare/v4.5.0...v6.0.1) (2020-01-28)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [6.0.0](https://github.com/IBM/kui/compare/v4.5.0...v6.0.0) (2020-01-27)

### Bug Fixes

- improved fixes for status bar ([05f5f7d](https://github.com/IBM/kui/commit/05f5f7d)), closes [#3538](https://github.com/IBM/kui/issues/3538) [#3543](https://github.com/IBM/kui/issues/3543)
- **packages/core:** status stripe fragments should be hidden until data arrives ([5792746](https://github.com/IBM/kui/commit/5792746)), closes [#3538](https://github.com/IBM/kui/issues/3538)
- **plugins/plugin-bash-like:** another fix for nested pty execution, in electron ([5274532](https://github.com/IBM/kui/commit/5274532)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** clean up nested PTY execution path ([5cb3cc0](https://github.com/IBM/kui/commit/5cb3cc0)), closes [#3493](https://github.com/IBM/kui/issues/3493)
- **plugins/plugin-bash-like:** ls versus tab switching ([79473fa](https://github.com/IBM/kui/commit/79473fa)), closes [#3485](https://github.com/IBM/kui/issues/3485)
- don't default to ls -l ([5a5b426](https://github.com/IBM/kui/commit/5a5b426)), closes [#3473](https://github.com/IBM/kui/issues/3473)
- **packages/core:** broken clickable resource names for CLIs that don't have a kui plugin ([3c0f8ae](https://github.com/IBM/kui/commit/3c0f8ae)), closes [#2888](https://github.com/IBM/kui/issues/2888)
- **packages/core:** current selection versus MetadataBearingByReference ([4c78a34](https://github.com/IBM/kui/commit/4c78a34)), closes [#3228](https://github.com/IBM/kui/issues/3228)
- **packages/core:** remove old EntitySpec support ([e45fb7b](https://github.com/IBM/kui/commit/e45fb7b)), closes [#3268](https://github.com/IBM/kui/issues/3268)
- **plugins/plugin-bash-like:** default to powershell not cmd on windows ([e7d50e2](https://github.com/IBM/kui/commit/e7d50e2)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** export with no args error handling ([d3e62b3](https://github.com/IBM/kui/commit/d3e62b3)), closes [#2894](https://github.com/IBM/kui/issues/2894)
- **plugins/plugin-bash-like:** fix memory leak in pty/client ([afeb29e](https://github.com/IBM/kui/commit/afeb29e)), closes [#3465](https://github.com/IBM/kui/issues/3465)
- **plugins/plugin-bash-like:** multiple PTYs per tab ([5a62dc8](https://github.com/IBM/kui/commit/5a62dc8)), closes [#3453](https://github.com/IBM/kui/issues/3453)
- **plugins/plugin-bash-like:** pty should not use yaml heuristics when in alt buffer mode ([de048d5](https://github.com/IBM/kui/commit/de048d5)), closes [#3459](https://github.com/IBM/kui/issues/3459)
- **plugins/plugin-bash-like:** speed up date formatting in ls ([1e54a17](https://github.com/IBM/kui/commit/1e54a17)), closes [#3461](https://github.com/IBM/kui/issues/3461)
- about contexts tab is non-functional ([c0b61b6](https://github.com/IBM/kui/commit/c0b61b6)), closes [#2890](https://github.com/IBM/kui/issues/2890)
- kui session is noop in electron mode ([80f8690](https://github.com/IBM/kui/commit/80f8690)), closes [#3330](https://github.com/IBM/kui/issues/3330)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- overlapping clien-to-proxy requests can lead to parse errors ([ebcf5ed](https://github.com/IBM/kui/commit/ebcf5ed)), closes [#3314](https://github.com/IBM/kui/issues/3314)
- port filesystem tab completion to tab completion API ([df4ee2f](https://github.com/IBM/kui/commit/df4ee2f)), closes [#3446](https://github.com/IBM/kui/issues/3446) [#2403](https://github.com/IBM/kui/issues/2403) [#3447](https://github.com/IBM/kui/issues/3447)
- propagate statusCode back from the proxy ([275240a](https://github.com/IBM/kui/commit/275240a)), closes [#3318](https://github.com/IBM/kui/issues/3318)
- reducing flashing effect for PTY command not found errors ([f160337](https://github.com/IBM/kui/commit/f160337)), closes [#3449](https://github.com/IBM/kui/issues/3449)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- **plugins/plugin-bash-like:** fix windows git bash pty regression ([654d320](https://github.com/IBM/kui/commit/654d320)), closes [#3442](https://github.com/IBM/kui/issues/3442)
- **plugins/plugin-bash-like:** open should not use kedit ([2548998](https://github.com/IBM/kui/commit/2548998)), closes [#3199](https://github.com/IBM/kui/issues/3199)

### Features

- add support for command string modes that specify contentType ([31c6940](https://github.com/IBM/kui/commit/31c6940)), closes [#3299](https://github.com/IBM/kui/issues/3299)
- allow plugins to use subdirectories ([e7cc3e3](https://github.com/IBM/kui/commit/e7cc3e3)), closes [#3389](https://github.com/IBM/kui/issues/3389)
- extend MultiModalResponse to support functions that produce content ([b940c63](https://github.com/IBM/kui/commit/b940c63)), closes [#3022](https://github.com/IBM/kui/issues/3022)
- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
- pty should allow for streaming consumption of output ([1886e58](https://github.com/IBM/kui/commit/1886e58)), closes [#3451](https://github.com/IBM/kui/issues/3451)
- remove openwhisk plugins ([fb4274d](https://github.com/IBM/kui/commit/fb4274d)), closes [#3201](https://github.com/IBM/kui/issues/3201)
- status stripe ([d485ab3](https://github.com/IBM/kui/commit/d485ab3)), closes [#3475](https://github.com/IBM/kui/issues/3475) [#1859](https://github.com/IBM/kui/issues/1859)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- **packages/core:** remove old EntitySpec support
- this moves the openwhisk plugins to a new repo: https://github.com/kui-shell/oui

# [5.1.0](https://github.com/IBM/kui/compare/v4.5.0...v5.1.0) (2019-10-11)

### Features

- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)

# [5.0.0](https://github.com/IBM/kui/compare/v4.5.0...v5.0.0) (2019-10-03)

### Features

- introduce new MultiModalResponse API ([67e9c8a](https://github.com/IBM/kui/commit/67e9c8a)), closes [#2899](https://github.com/IBM/kui/issues/2899)
