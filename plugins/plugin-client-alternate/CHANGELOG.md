# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.2.0](https://github.com/IBM/kui/compare/v4.5.0...v9.2.0) (2020-11-25)

### Bug Fixes

- **plugins/plugin-client-common:** tab completion UI does not render on separate line from input ([61b169b](https://github.com/IBM/kui/commit/61b169b)), closes [#5307](https://github.com/IBM/kui/issues/5307)
- clients should be able to enable watcher auto pinning without enabling splitTerminals ([bcade13](https://github.com/IBM/kui/commit/bcade13)), closes [#5002](https://github.com/IBM/kui/issues/5002)
- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- **plugins/plugin-client-common:** User should be able to tab navigate through blocks ([54d3759](https://github.com/IBM/kui/commit/54d3759)), closes [#5717](https://github.com/IBM/kui/issues/5717)
- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [9.1.0](https://github.com/IBM/kui/compare/v4.5.0...v9.1.0) (2020-10-26)

### Bug Fixes

- **plugins/plugin-client-common:** tab completion UI does not render on separate line from input ([61b169b](https://github.com/IBM/kui/commit/61b169b)), closes [#5307](https://github.com/IBM/kui/issues/5307)
- clients should be able to enable watcher auto pinning without enabling splitTerminals ([bcade13](https://github.com/IBM/kui/commit/bcade13)), closes [#5002](https://github.com/IBM/kui/issues/5002)
- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- **plugins/plugin-client-common:** User should be able to tab navigate through blocks ([54d3759](https://github.com/IBM/kui/commit/54d3759)), closes [#5717](https://github.com/IBM/kui/issues/5717)
- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [9.0.0](https://github.com/IBM/kui/compare/v4.5.0...v9.0.0) (2020-10-08)

### Bug Fixes

- **plugins/plugin-client-common:** tab completion UI does not render on separate line from input ([61b169b](https://github.com/IBM/kui/commit/61b169b)), closes [#5307](https://github.com/IBM/kui/issues/5307)
- clients should be able to enable watcher auto pinning without enabling splitTerminals ([bcade13](https://github.com/IBM/kui/commit/bcade13)), closes [#5002](https://github.com/IBM/kui/issues/5002)
- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- **plugins/plugin-client-common:** User should be able to tab navigate through blocks ([54d3759](https://github.com/IBM/kui/commit/54d3759)), closes [#5717](https://github.com/IBM/kui/issues/5717)
- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [8.12.0](https://github.com/IBM/kui/compare/v4.5.0...v8.12.0) (2020-08-20)

### Bug Fixes

- **plugins/plugin-client-common:** tab completion UI does not render on separate line from input ([61b169b](https://github.com/IBM/kui/commit/61b169b)), closes [#5307](https://github.com/IBM/kui/issues/5307)
- clients should be able to enable watcher auto pinning without enabling splitTerminals ([bcade13](https://github.com/IBM/kui/commit/bcade13)), closes [#5002](https://github.com/IBM/kui/issues/5002)
- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [8.11.0](https://github.com/IBM/kui/compare/v4.5.0...v8.11.0) (2020-07-21)

### Bug Fixes

- clients should be able to enable watcher auto pinning without enabling splitTerminals ([bcade13](https://github.com/IBM/kui/commit/bcade13)), closes [#5002](https://github.com/IBM/kui/issues/5002)
- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add capability to show welcome widget to new users in Terminal ([0c33e6e](https://github.com/IBM/kui/commit/0c33e6e)), closes [#4990](https://github.com/IBM/kui/issues/4990) [#5007](https://github.com/IBM/kui/issues/5007)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [8.10.0](https://github.com/IBM/kui/compare/v4.5.0...v8.10.0) (2020-06-17)

### Bug Fixes

- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [8.9.0](https://github.com/IBM/kui/compare/v4.5.0...v8.9.0) (2020-06-09)

### Bug Fixes

- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

### Features

- <Kui> should allow for custom Input elements ([193a108](https://github.com/IBM/kui/commit/193a108)), closes [#4672](https://github.com/IBM/kui/issues/4672)
- add support for <Kui noPromptContext/> and <Kui prompt=">"/> ([a92063d](https://github.com/IBM/kui/commit/a92063d)), closes [#4653](https://github.com/IBM/kui/issues/4653)
- allow subclasses of InputProvider to specify their own State ([c3fc88e](https://github.com/IBM/kui/commit/c3fc88e)), closes [#4756](https://github.com/IBM/kui/issues/4756)
- split screen Terminal ([3a6b422](https://github.com/IBM/kui/commit/3a6b422)), closes [#4814](https://github.com/IBM/kui/issues/4814) [#4821](https://github.com/IBM/kui/issues/4821)

# [8.7.0](https://github.com/IBM/kui/compare/v4.5.0...v8.7.0) (2020-05-08)

### Bug Fixes

- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

## [8.6.1](https://github.com/IBM/kui/compare/v4.5.0...v8.6.1) (2020-04-25)

### Bug Fixes

- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

# [8.6.0](https://github.com/IBM/kui/compare/v4.5.0...v8.6.0) (2020-04-23)

### Bug Fixes

- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

# [8.5.0](https://github.com/IBM/kui/compare/v4.5.0...v8.5.0) (2020-04-19)

### Bug Fixes

- remove config.d/version.json in favor of using the version field from package.json ([1e296c7](https://github.com/IBM/kui/commit/1e296c7)), closes [#4300](https://github.com/IBM/kui/issues/4300)
- remove invalid bodyCss fields in config.d/style.json ([99a92ab](https://github.com/IBM/kui/commit/99a92ab)), closes [#4307](https://github.com/IBM/kui/issues/4307)
- remove limits.json from client config.d ([3ae2201](https://github.com/IBM/kui/commit/3ae2201)), closes [#4292](https://github.com/IBM/kui/issues/4292)
- remove unsed fields from client.json ([a55b1f1](https://github.com/IBM/kui/commit/a55b1f1)), closes [#4296](https://github.com/IBM/kui/issues/4296)
- remove unused fields from config.d/style.json ([ab7278a](https://github.com/IBM/kui/commit/ab7278a)), closes [#4298](https://github.com/IBM/kui/issues/4298)
- simplify handling of opengraph META ([ff3c0de](https://github.com/IBM/kui/commit/ff3c0de)), closes [#4288](https://github.com/IBM/kui/issues/4288)

## [8.4.2](https://github.com/IBM/kui/compare/v4.5.0...v8.4.2) (2020-04-10)

**Note:** Version bump only for package @kui-shell/plugin-client-alternate

## [8.4.1](https://github.com/IBM/kui/compare/v4.5.0...v8.4.1) (2020-04-10)

**Note:** Version bump only for package @kui-shell/plugin-client-alternate

# [8.4.0](https://github.com/IBM/kui/compare/v4.5.0...v8.4.0) (2020-04-10)

**Note:** Version bump only for package @kui-shell/plugin-client-alternate

# [8.1.0](https://github.com/IBM/kui/compare/v4.5.0...v8.1.0) (2020-04-04)

**Note:** Version bump only for package @kui-shell/plugin-client-alternate
