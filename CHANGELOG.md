# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.3](https://github.com/Shad02w/pnpm-single-version/compare/v1.4.2...v1.4.3) (2023-05-29)

### [1.4.2](https://github.com/Shad02w/pnpm-single-version/compare/v1.4.1...v1.4.2) (2023-04-03)

### [1.4.1](https://github.com/Shad02w/pnpm-single-version/compare/v1.4.0...v1.4.1) (2023-04-03)


### Bug Fixes

* downgrade find-up version to 5.0.0 ([9323373](https://github.com/Shad02w/pnpm-single-version/commit/9323373e08a8da72b0e4bb9513900f6dd121d98e))

## [1.4.0](https://github.com/Shad02w/pnpm-single-version/compare/v1.3.5...v1.4.0) (2022-11-24)


### Features

* able to exit only on CI when checker failed ([149fdce](https://github.com/Shad02w/pnpm-single-version/commit/149fdce45f39f113250f7f5a2fb030c05c96f5e9))

### [1.3.5](https://github.com/Shad02w/pnpm-single-version/compare/v1.3.4...v1.3.5) (2022-09-10)


### Bug Fixes

* rename hook bundle file to hook-bundle.js ([99486b3](https://github.com/Shad02w/pnpm-single-version/commit/99486b34568f4d42d06ec8d16d8dda9297a6598d))

### [1.3.4](https://github.com/Shad02w/pnpm-single-version/compare/v1.3.3...v1.3.4) (2022-09-10)

### [1.3.3](https://github.com/Shad02w/pnpm-single-version/compare/v1.3.2...v1.3.3) (2022-09-10)

### [1.3.2](https://github.com/Shad02w/pnpm-single-version/compare/v1.3.1...v1.3.2) (2022-09-10)

### [1.3.1](https://github.com/Shad02w/pnpm-single-version/compare/v1.3.0...v1.3.1) (2022-09-10)


### Bug Fixes

* removed needs from fig actions ([24ed324](https://github.com/Shad02w/pnpm-single-version/commit/24ed32483211ccb8f9a50ebe959bcc49a7193f8f))

## [1.3.0](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.7...v1.3.0) (2022-08-28)


### Features

* added install and check command ([f38f0cb](https://github.com/Shad02w/pnpm-single-version/commit/f38f0cb5ffd34315c4324508b44b2172d2667907))


### Bug Fixes

* find package.json root when it is not a monorepo ([0057fbb](https://github.com/Shad02w/pnpm-single-version/commit/0057fbb219c0871c837c83a17c3cb3182d0282cf))

### [1.2.7](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.6...v1.2.7) (2022-08-20)


### Bug Fixes

* changed "include" to "includeds", but it still backward compatible ([1452acb](https://github.com/Shad02w/pnpm-single-version/commit/1452acb2c4f89ed59c3146bac7a9084ff85a083e))

### [1.2.6](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.5...v1.2.6) (2022-08-19)

### [1.2.5](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.4...v1.2.5) (2022-08-19)


### Bug Fixes

* include list is not working ([4e6b963](https://github.com/Shad02w/pnpm-single-version/commit/4e6b963eb6005cd502c84c8248eac69043040287))

### [1.2.4](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.3...v1.2.4) (2022-08-19)

### [1.2.3](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.1...v1.2.3) (2022-08-19)

### [1.2.2](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.1...v1.2.2) (2022-08-19)

### [1.2.1](https://github.com/Shad02w/pnpm-single-version/compare/v1.2.0...v1.2.1) (2022-07-05)

## [1.2.0](https://github.com/Shad02w/pnpm-single-version/compare/v1.1.0...v1.2.0) (2022-07-05)

### ⚠ BREAKING CHANGES

-   Changed the way to hook afterAllResolved, in order to avoid error when all node
    modules are not install

### Features

-   added glob support on dependencies filtering ([c863c53](https://github.com/Shad02w/pnpm-single-version/commit/c863c537e77d8c020c44b189ed6b6be9b87efd95))
-   added globUtil ([ef6a3b3](https://github.com/Shad02w/pnpm-single-version/commit/ef6a3b3a7b4e0786ad85548de4d90185896aa458))

-   updated readme ([d6b76a0](https://github.com/Shad02w/pnpm-single-version/commit/d6b76a02b517b6bf782ef2a48624077c451878b7))

## 1.1.0 (2022-07-04)

### Features

-   added commitizen ([a57c8c0](https://github.com/Shad02w/pnpm-single-version/commit/a57c8c03d596b4a034933efeb68f6322306d6b8b))
-   Added hook and cli method ([32a504b](https://github.com/Shad02w/pnpm-single-version/commit/32a504b13f94abf31c1b95aeff4c241144761f69))
