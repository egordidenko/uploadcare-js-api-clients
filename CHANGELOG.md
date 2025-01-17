# [6.10.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.9.0...v6.10.0) (2023-11-14)


### Features

* **rest-client/convert:** add `saveInGroup` option to document conversion method ([#499](https://github.com/uploadcare/uploadcare-js-api-clients/issues/499)) ([50720b7](https://github.com/uploadcare/uploadcare-js-api-clients/commit/50720b7a5c9cf606b5ed9c4ba28d8038c8034cbf))


# [6.9.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.8.0...v6.9.0) (2023-11-14)


### Features

* **rest-client:** add Document Info endpoint ([7f0c528](https://github.com/uploadcare/uploadcare-js-api-clients/commit/7f0c5280108426e95664c1fb9ae4ec429b9a8c97))


# [6.8.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.7.0...v6.8.0) (2023-10-30)


### Bug Fixes

* **types:** `imageInfo.datetimeOriginal` could be null or string ([#489](https://github.com/uploadcare/uploadcare-js-api-clients/issues/489)) ([4a717e1](https://github.com/uploadcare/uploadcare-js-api-clients/commit/4a717e10e53c012932f888e7e693706611efa1c4))


### Features

* **upload-client:** export `isReadyPoll` helper to wait for the file readiness ([12cf9b1](https://github.com/uploadcare/uploadcare-js-api-clients/commit/12cf9b13675806b18b76dfffc6c23537e5b53846))


# [6.7.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.6.1...v6.7.0) (2023-10-18)


### Bug Fixes

* **upload-client/queue:** don't use private class fields due to bad support of bundling tools ([d61dc47](https://github.com/uploadcare/uploadcare-js-api-clients/commit/d61dc479fa1055f7c5fca74e5c92690252e7a72e))
* **upload-client/uploadFileGroup:** do not request `fileInfo` before creating group from uuid ([c3c8245](https://github.com/uploadcare/uploadcare-js-api-clients/commit/c3c82453eff1f13fc9210d3e3f5856f8821b86f6))
* **upload-client/uploadFileGroup:** support for the uuids with inline operations ([c3c8245](https://github.com/uploadcare/uploadcare-js-api-clients/commit/c3c82453eff1f13fc9210d3e3f5856f8821b86f6))
* **upload-client/UploadcareGroup:** filter `null` values from the `files` property of group info ([83c0b6c](https://github.com/uploadcare/uploadcare-js-api-clients/commit/83c0b6c7ef4b6e467795cf280dea67bb9608605b))
* **upload-client:** fix package.json `react-native` field path ([beee9c1](https://github.com/uploadcare/uploadcare-js-api-clients/commit/beee9c185823ade2bb9a1e8a48b4f63fd9990cdb))


### Features

* **upload-client:** add property `defaultEffects` to the `UploadcareFile` instance returned by `uploadFileGroup` method ([abe39c4](https://github.com/uploadcare/uploadcare-js-api-clients/commit/abe39c4312eac341fd4e7e6e238890b398167a7f))



## [6.6.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.6.0...v6.6.1) (2023-05-01)

### Bug Fixes

* **upload-client**: do not use buffer for browser-like bundles to prevent polyfilling by cdn ([#484](https://github.com/uploadcare/uploadcare-js-api-clients/pull/484))

# [6.6.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.5.1...v6.6.0) (2023-05-01)


### Features

* **upload-client:** add `Queue` helper to make queued uploads ([#481](https://github.com/uploadcare/uploadcare-js-api-clients/issues/481)) ([aea890c](https://github.com/uploadcare/uploadcare-js-api-clients/commit/aea890ce29610e71a2867d07cff5558db73d590d))


## [6.5.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.5.0...v6.5.1) (2023-04-25)


# [6.5.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.4.1...v6.5.0) (2023-04-25)

### Bug Fixes

* set corresponding extension for the dynamic chunks ([882741f](https://github.com/uploadcare/uploadcare-js-api-clients/commit/882741ffdfd7e54e43c7d05c6fb953d0fcfaed97))


### Features

* add CommonJS bundles ([4aff9bc](https://github.com/uploadcare/uploadcare-js-api-clients/commit/4aff9bcb9d5901bb0b444c91cd0bd78eff0ff2b3))
* **rest-client:** export `createSignature` method ([#472](https://github.com/uploadcare/uploadcare-js-api-clients/issues/472)) ([ccbb97a](https://github.com/uploadcare/uploadcare-js-api-clients/commit/ccbb97a0e1e05ce74b51e7437332a55f2a8c6807))



## [6.4.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.4.0...v6.4.1) (2023-03-17)


### Bug Fixes

* **upload-client/uploadFileGroup:** accept `checkForUrlDuplicates` and `saveUrlForRecurrentUploads` ([#470](https://github.com/uploadcare/uploadcare-js-api-clients/issues/470)) ([43e0ba9](https://github.com/uploadcare/uploadcare-js-api-clients/commit/43e0ba92e5ca3e377b2cb129daedb8c63af64787))


# [6.4.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.3.0...v6.4.0) (2023-03-10)


### BREAKING CHANGE without major bump

There will be no impact unless you are using the `@uploadcare/signed-uploads` package.

* **@uploadcare/signed-uploads:** update `generateSecureSignature` signature - BREAKING CHANGE without major bump ([97f7ebb](https://github.com/uploadcare/uploadcare-js-api-clients/commit/97f7ebb796b3c2d38ca9ddbccb07fb706ed75eba))



# [6.3.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.2.1...v6.3.0) (2023-03-09)


### Features

* add `@uploadcare/signed-uploads` package containing helper to generate signature for signed uploads ([#466](https://github.com/uploadcare/uploadcare-js-api-clients/issues/466)) ([dd48ee4](https://github.com/uploadcare/uploadcare-js-api-clients/commit/dd48ee4213ad6e85fff83e0b83e5c9bd41ff7121))


## [6.2.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.2.0...v6.2.1) (2023-01-23)


### Bug Fixes

* **upload-client:** normalize output cdn url ([#463](https://github.com/uploadcare/uploadcare-js-api-clients/issues/463)) ([cd37f4d](https://github.com/uploadcare/uploadcare-js-api-clients/commit/cd37f4dda21c01aec7fdc817bd98364cf6ce7dbd))


# [6.2.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.1.0...v6.2.0) (2023-01-20)


### Bug Fixes

* **upload-client:** send `content-type` header when uploading multipart ([#461](https://github.com/uploadcare/uploadcare-js-api-clients/issues/461)) ([3a402a3](https://github.com/uploadcare/uploadcare-js-api-clients/commit/3a402a3cc344af8d08260ae6a876641e779744d3))


### Features

* **upload-client:** accept `auto` as `store` value ([#460](https://github.com/uploadcare/uploadcare-js-api-clients/issues/460)) ([e140644](https://github.com/uploadcare/uploadcare-js-api-clients/commit/e140644df4e86341a8ee387cc4add8308f9b3aac))


# [6.1.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v6.0.0...v6.1.0) (2023-01-10)


### Bug Fixes

* **upload-client:** ensure that file name and type passed to the FormData ([fe63607](https://github.com/uploadcare/uploadcare-js-api-clients/commit/fe6360739f1ffb67f1f163b33ed3a594c55f6ac3))


### Features

* **upload-client:** export all the types ([d2bbd76](https://github.com/uploadcare/uploadcare-js-api-clients/commit/d2bbd760da65692b8e3a3526199d29b6cc080841))
* **upload-client:** support react-native asset file input ([f586f84](https://github.com/uploadcare/uploadcare-js-api-clients/commit/f586f847aca842a4f4fdb0d292172f996230a159))


# [6.0.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v5.2.0...v6.0.0) (2022-12-07)


* refactor(rest-client)!: merge document and video conversion methods into the two common ones - `convert` and `conversionJobStatus` ([beb2bb6](https://github.com/uploadcare/uploadcare-js-api-clients/commit/beb2bb660d1fee000701d680e879c6f67bc25805))
* fix(rest-client)!: do not change case of the `appdata` field and its content ([92d785d](https://github.com/uploadcare/uploadcare-js-api-clients/commit/92d785def83859a1eef3496b016ed766268eb362))
* feat(rest-client)!: accept boolean or "auto" for the `store` option ([440e228](https://github.com/uploadcare/uploadcare-js-api-clients/commit/440e228aab817386aa0308d66a9e0ab56e0c7355))


### Features

* **api-client-utils:** add `timeout` option to the `poll` ([f27f25a](https://github.com/uploadcare/uploadcare-js-api-clients/commit/f27f25a177a300a8f12694f3b5a5c94f224e8bec))
* **rest-client:** add addon job status polling ([8f2aec7](https://github.com/uploadcare/uploadcare-js-api-clients/commit/8f2aec78d514b0591a1fbef938cd92fd79c9ac17))
* **rest-client:** add conversion api polling ([41c6aa5](https://github.com/uploadcare/uploadcare-js-api-clients/commit/41c6aa5b13b6e6d750f5edd83b456282033f2c1e))


### BREAKING CHANGES

* Methods `convertVideo`, `convertDocument`, `videoConversionJobStatus` and `documentConversionJobStatus` are removed. Please use `convert` and `conversionJobStatus` methods. Type of conversion (video or document) passed as `type` option.
* Now `appdata` field is returned as-is, without kebab -> camel case conversion
* string ("true", "false", "1", "0") values for the `store` option of `convertVideo` and `convertDocument` aren't accepted anymore. Please use `boolean` value or "auto". It's "auto" by default"



# [5.2.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v5.1.2...v5.2.0) (2022-11-26)


### Bug Fixes

* **rest-client:** send `user-agent` instead of `x-uc-user-agent` header ([#447](https://github.com/uploadcare/uploadcare-js-api-clients/issues/447)) ([759768a](https://github.com/uploadcare/uploadcare-js-api-clients/commit/759768a20e05eec82377a16bb4289cf9a5f769dc))
* **upload-client:** read `retry-after` header instead of `x-throttle-wait-seconds` ([81698df](https://github.com/uploadcare/uploadcare-js-api-clients/commit/81698df92b68548c56573f6330e3c53079d431e6))


### Features

* **rest-client:** add pagination helpers ([#450](https://github.com/uploadcare/uploadcare-js-api-clients/issues/450)) ([19f6d8f](https://github.com/uploadcare/uploadcare-js-api-clients/commit/19f6d8f7196700f257d2d2b248d28252d9faad8f))
* **rest-client:** retry requests on network errors ([#449](https://github.com/uploadcare/uploadcare-js-api-clients/issues/449)) ([846d8fd](https://github.com/uploadcare/uploadcare-js-api-clients/commit/846d8fd717390ce9f68d1c38472e8bc2d089d7c6))



## [5.1.2](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v5.1.1...v5.1.2) (2022-11-24)


### Bug Fixes

* **rest-client:** pass-through outer headers when signing request with `UploadcareSimpleAuthSchema` ([0c912e1](https://github.com/uploadcare/uploadcare-js-api-clients/commit/0c912e1a6cbbd04e2447c74669a208512ee1e01b))



## [5.1.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v5.1.0...v5.1.1) (2022-10-28)


### Bug Fixes

* specify `types` path for the root export, fixes [#436](https://github.com/uploadcare/uploadcare-js-api-clients/issues/436) (see PR [#437](https://github.com/uploadcare/uploadcare-js-api-clients/pull/437))

### Features

* add separate exports for `node`, `browser` and `react-native` bundles. It's useful when you wanna explicitly import needed bundle instead of relying the bundler's choice (see PR [#437](https://github.com/uploadcare/uploadcare-js-api-clients/pull/437))



# [5.1.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v5.0.0...v5.1.0) (2022-09-13)


### Features

* **rest-client:** add `executeAddon` and `addonExecutionStatus` ([5b7123f](https://github.com/uploadcare/uploadcare-js-api-clients/commit/5b7123f2997a05e0b1a3b8fee81bfeea9457ae6a))



# [5.0.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v4.3.1...v5.0.0) (2022-09-13)


* refactor(upload-client)!: drop `multipartMaxAttempts` option ([178436e](https://github.com/uploadcare/uploadcare-js-api-clients/commit/178436e83c956a2b428e11bc4d76af27b627bcdb))


### Features

* **api-client-utils:** add `UploadcareNetworkError` ([0e917d2](https://github.com/uploadcare/uploadcare-js-api-clients/commit/0e917d29cfeb151c2484d89d5b69ba9eafaf31e9))
* **upload-client:** add `retryNetworkErrorMaxTimes` option to specify retries count on network errors ([400fedd](https://github.com/uploadcare/uploadcare-js-api-clients/commit/400fedd0e4a143ca4a18cf79d7b1385e797396a8))
* **upload-client:** throw `UploadcareNetworkError` instead of `Error` ([f7e3f55](https://github.com/uploadcare/uploadcare-js-api-clients/commit/f7e3f55626e047e214bce0d18e4ff34fc7445509))


### BREAKING CHANGES

* option `multipartMaxAttempts` is dropped. Use `retryNetworkErrorMaxTimes` instead. It will affect all the requests, not only multipart uploads.



## [4.3.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v4.3.0...v4.3.1) (2022-08-24)


### Bug Fixes

* force disable XHR sync mode ([#420](https://github.com/uploadcare/uploadcare-js-api-clients/issues/420)) ([4dd9ecf](https://github.com/uploadcare/uploadcare-js-api-clients/commit/4dd9ecfa174c584cd2631ac34393c9917d1c70cf))
* leave pathname from baseURL ([#421](https://github.com/uploadcare/uploadcare-js-api-clients/issues/421)) ([58166d8](https://github.com/uploadcare/uploadcare-js-api-clients/commit/58166d806e1a16c90ccd048fe52e633851ae8dd2))
* **package.json:** add default exports field ([#419](https://github.com/uploadcare/uploadcare-js-api-clients/issues/419)) ([e9cf28f](https://github.com/uploadcare/uploadcare-js-api-clients/commit/e9cf28ffd141d9d07450887042167636cb2eb76c))



# [4.3.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v4.2.1...v4.3.0) (2022-07-20)


### Features

* export `getUserAgent` method from `@uploadcare/api-client-utils` package ([78da195](https://github.com/uploadcare/uploadcare-js-api-clients/commit/78da1954313ac0a85c265d83ae900640bad88d38))



## [4.2.1](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v4.2.0...v4.2.1) (2022-07-11)

* Add `exports` field to the `package.json` ([#415](https://github.com/uploadcare/uploadcare-js-api-clients/pull/415))
* Add `LICENSE` files to the package contents ([#414](https://github.com/uploadcare/uploadcare-js-api-clients/pull/414))

# [4.2.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v4.1.0...v4.2.0) (2022-07-05)

Repository was transformed into the monorepo. Now there are two packages:
`@uploadcare/upload-client` and `@uploadcare/rest-client`.

They have locked versioning. So `@uploadcare/rest-client` is started from `4.2.0`,
and `@uploadcare/upload-client` has no any visible changes (except for the internal ones).

At the current stage, there are no any high-level wrappers at `@uploadcare/rest-client`.
Only low-level typed wrappers over API methods are available.
It means, that there are no pagination and no conversion job status polling,
just bare request wrappers.

# [4.1.0](https://github.com/uploadcare/uploadcare-js-api-clients/compare/v4.0.1...v4.1.0) (2022-06-29)


### Bug Fixes

* Fix crashes when `null` metadata passed to the options ([cbf5472](https://github.com/uploadcare/uploadcare-js-api-clients/commit/cbf5472507de4458fccfa98304326e6762b43171))


## [4.0.1](https://github.com/uploadcare/uploadcare-upload-client/compare/v4.0.0...v4.0.1) (2022-06-10)



# [4.0.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v3.1.1...v4.0.0) (2022-06-10)


### BREAKING CHANGES

* Drop < v16 Node support due to native `AbortController` usage ([#377](https://github.com/uploadcare/uploadcare-upload-client/pull/377))
* Removed CommonJS bundles  ([#377](https://github.com/uploadcare/uploadcare-upload-client/pull/377))
* Removed option `defaultEffects` ([#376](https://github.com/uploadcare/uploadcare-upload-client/pull/376))
* Removed property `cdnUrlModifiers` of `UploadcareFile` instance ([#376](https://github.com/uploadcare/uploadcare-upload-client/pull/376))
* Removed property `originalUrl` of `UploadcareFile` instance. Use `cdnUrl` instead ([#376](https://github.com/uploadcare/uploadcare-upload-client/pull/376))
* Exported method `uploadBase` renamed to `uploadDirect` ([#376](https://github.com/uploadcare/uploadcare-upload-client/pull/376))


### Bug Fixes

* pass `contentType` down to the node `form-data` ([465722c](https://github.com/uploadcare/uploadcare-upload-client/commit/465722c5919ebbb163cf6730e429ad5aea212593))
* **react-native:** module entry points for react-native ([6d8a955](https://github.com/uploadcare/uploadcare-upload-client/commit/6d8a9554a62b901806684325fbd3f4052444f275))


### Features

* **UploadcareFile:** add `s3Bucket` property ([#376](https://github.com/uploadcare/uploadcare-upload-client/pull/376))
* **UploadcareFile:** add `s3Url` property  ([#376](https://github.com/uploadcare/uploadcare-upload-client/pull/376))
* **UploadClient:** set empty options by default for method wrappers inside client instance ([#375](https://github.com/uploadcare/uploadcare-upload-client/pull/375))


## [3.1.1](https://github.com/uploadcare/uploadcare-upload-client/compare/v3.1.0...v3.1.1) (2022-04-11)



# [3.1.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v3.0.0...v3.1.0) (2022-04-11)


### Bug Fixes

* accept option `multipartMinFileSize ([679eb8f](https://github.com/uploadcare/uploadcare-upload-client/commit/679eb8f940d00d3b1f1c96ff2966fb9512d255db))
* calculate `store` parameter in a consistent way ([2e423d2](https://github.com/uploadcare/uploadcare-upload-client/commit/2e423d27a96be8ce59fdd4c7fc8c06edd06e6e6b))


### Features

* file metadata support ([dc9cf2d](https://github.com/uploadcare/uploadcare-upload-client/commit/dc9cf2dd831ccb19272dedd1550716d53945527e))
* return `contentInfo` from `fileInfo` to user ([5b9b99a](https://github.com/uploadcare/uploadcare-upload-client/commit/5b9b99ab705b4489db817bc6976a6f823862b83b))



# [3.0.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v2.2.0...v3.0.0) (2022-02-24)


### Bug Fixes

* remove `exports` field at package.json ([#360](https://github.com/uploadcare/uploadcare-upload-client/issues/360)) ([1e37542](https://github.com/uploadcare/uploadcare-upload-client/commit/1e37542108258d49159a45ed80d6dc27799ad22a))


* fix!: split progress info to computable and unknown ones (#363) ([7638284](https://github.com/uploadcare/uploadcare-upload-client/commit/7638284a8a9b14e0b10403c0496c29159d9c3b39)), closes [#363](https://github.com/uploadcare/uploadcare-upload-client/issues/363)


### BREAKING CHANGES

* `value` property of progress info can be `undefined` instead of `NaN` in case of uploading from URL. See `isComputable` flag to detect whether `value` is available.



# [2.2.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v2.1.0...v2.2.0) (2021-12-22)


### Features

* export UploadcareClientError class ([#355](https://github.com/uploadcare/uploadcare-upload-client/issues/355)) ([848eadf](https://github.com/uploadcare/uploadcare-upload-client/commit/848eadfcdb021fd506a6d6ee2f7f6e2208804de4))



# [2.1.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v2.0.0...v2.1.0) (2021-12-07)


### Features

* export `UploadcareFile` and `UploadcareGroup` types ([#353](https://github.com/uploadcare/uploadcare-upload-client/issues/353)) ([29d1547](https://github.com/uploadcare/uploadcare-upload-client/commit/29d154798865f627cabd54982b213e24ac2f27d5))



# [2.0.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.1.5...v2.0.0) (2021-11-15)


### Features

* feat!: add cjs and esm support (#283) ([081f27e](https://github.com/uploadcare/uploadcare-upload-client/commit/081f27ef6022e6bdc605bc25e18313786c3f65d0)), closes [#283](https://github.com/uploadcare/uploadcare-upload-client/issues/283)
* feat!: replace CancelController with native AbortController (#282) ([020e1ae](https://github.com/uploadcare/uploadcare-upload-client/commit/020e1aeca1507979dbd123711a600e6692ca911f)), closes [#282](https://github.com/uploadcare/uploadcare-upload-client/issues/282)
* add mimeType to UploadcareFile type ([33b6c58](https://github.com/uploadcare/uploadcare-upload-client/commit/33b6c586f291569ff8eabbd488d8f61bde66de4b))
* export high-level upload methods ([1354018](https://github.com/uploadcare/uploadcare-upload-client/commit/1354018ce350895f638ba7be6ade6223193df407))
* handle server error codes ([948c9d1](https://github.com/uploadcare/uploadcare-upload-client/commit/948c9d140685aa2d0325904220ff42c262aaae79))
* add option `userAgent` to pass custom user agent string or function ([d74fefb](https://github.com/uploadcare/uploadcare-upload-client/commit/d74fefb18168fbfec8aa3daf2707da3305846879))


### BREAKING CHANGES

* remove default export because webpack can't handle it without bugs
* replace `cancel` key with `signal` in all cancelable methods
* property `response` of `UploadClientError` now contains the whole response object (`{ error: {...}}`)



## [1.1.5](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.1.4...v1.1.5) (2021-06-28)


### Bug Fixes

* pass missing props from `uploadFile` down to the upload methods ([#339](https://github.com/uploadcare/uploadcare-upload-client/issues/339)) ([e16dc73](https://github.com/uploadcare/uploadcare-upload-client/commit/e16dc732613614686048f15fb1dcc8f400663e4d))



## [1.1.4](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.1.3...v1.1.4) (2021-06-11)


### Bug Fixes

* checkForUrlDuplicates & saveUrlForRecurrentUploads parameters passed into common uploadFile method ([201ee07](https://github.com/uploadcare/uploadcare-upload-client/commit/201ee07587f1b2143e7685e049d031ec94a1fa3d))



## [1.1.3](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.1.2...v1.1.3) (2021-03-17)


### Bug Fixes

* **react-native:** prevent app crashes while multipart uploading ([#308](https://github.com/uploadcare/uploadcare-upload-client/issues/308)) ([5d305e6](https://github.com/uploadcare/uploadcare-upload-client/commit/5d305e68b8026f729cb3a29d29f386fd882b4b5d))
* **react-native:** support direct uploads through FormData ([#307](https://github.com/uploadcare/uploadcare-upload-client/issues/307)) ([428b039](https://github.com/uploadcare/uploadcare-upload-client/commit/428b039374c98ae689c6c40b3e91d25b11481849))



## [1.1.2](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.1.1...v1.1.2) (2020-04-20)


### Bug Fixes

* **multipart:** implement retry for part uploading ([#253](https://github.com/uploadcare/uploadcare-upload-client/issues/253)) ([e2330bb](https://github.com/uploadcare/uploadcare-upload-client/commit/e2330bb37ea75b2d82c3258696b5d18cf719eae5))
* **multipart:** add is ready pool for mulipart upload ([#254](https://github.com/uploadcare/uploadcare-upload-client/issues/254)) ([fe7ca2a](https://github.com/uploadcare/uploadcare-upload-client/commit/fe7ca2a0bbee7b24de2a792669ec33691cb2fd0c))
* **multipart:** implement multipart progress for node ([#252](https://github.com/uploadcare/uploadcare-upload-client/issues/252)) ([b60eb83](https://github.com/uploadcare/uploadcare-upload-client/commit/b60eb831ff966a4c6a80f2ee9d72ce3b76659d56))
* **multipart:** use browser contentType if option is not passed ([#251](https://github.com/uploadcare/uploadcare-upload-client/issues/251)) ([f5ab80a](https://github.com/uploadcare/uploadcare-upload-client/commit/f5ab80a295cd6e4fc59e426d9d73086999bf4197))
* **multipart:** use browser filename if option is not passed ([#250](https://github.com/uploadcare/uploadcare-upload-client/issues/250)) ([749e4a9](https://github.com/uploadcare/uploadcare-upload-client/commit/749e4a988b7d10ee9368433a4ffa076471a4d3e3))


## [1.1.1](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.1.0...v1.1.1) (2020-03-16)


### Bug Fixes

* add is ready poll in `uploadFromUrl` ([#238](https://github.com/uploadcare/uploadcare-upload-client/issues/238)) ([dd0202d](https://github.com/uploadcare/uploadcare-upload-client/commit/dd0202d5ef2c787a63d345731ea2ccc39ecca70e))



# [1.1.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.1...v1.1.0) (2020-03-03)


### Features

* implement push strategy with sockets for `uploadFromUrl` ([#222](https://github.com/uploadcare/uploadcare-upload-client/issues/222)) ([4cafe97](https://github.com/uploadcare/uploadcare-upload-client/commit/4cafe9759ebfe1f54b0e6d2f9cf2cffa36ec3283))
* add deferred disconnect for push strategy ([#229](https://github.com/uploadcare/uploadcare-upload-client/issues/229)) ([a9901f7](https://github.com/uploadcare/uploadcare-upload-client/commit/a9901f74aa1512471b3f4bd470ccc794eb31dac0))
* add strong typed event emitter ([#217](https://github.com/uploadcare/uploadcare-upload-client/issues/217)) ([35b9eef](https://github.com/uploadcare/uploadcare-upload-client/commit/35b9eef22ae0638d52915a2338e3c3978e3d6f2b))
* add custom race function ([#177](https://github.com/uploadcare/uploadcare-upload-client/issues/177)) ([219c02a](https://github.com/uploadcare/uploadcare-upload-client/commit/219c02aceb233886383e6d66c5ecdfbd5a1626ea))


### Bug Fixes

* make `fileName` optional and remove it from default settings ([#233](https://github.com/uploadcare/uploadcare-upload-client/issues/233)) ([a28d181](https://github.com/uploadcare/uploadcare-upload-client/commit/a28d181e5c412f6ff2aeee2e7ae02a7ae848c8a2))
* remove timeout from `uploadFromUrl` function ([#226](https://github.com/uploadcare/uploadcare-upload-client/issues/226)) ([76db2e4](https://github.com/uploadcare/uploadcare-upload-client/commit/76db2e4c607164afcaf07132789348927ea65577))
* use direct import for CancelController and rename callback to stopRace ([#216](https://github.com/uploadcare/uploadcare-upload-client/issues/216)) ([ea4ef7a](https://github.com/uploadcare/uploadcare-upload-client/commit/ea4ef7ac291ed1503e359901a315239563b53e83))


## [1.0.1](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0...v1.0.1) (2020-01-13)


### Bug Fixes

* **deps:** update dependency form-data to v3 ([#130](https://github.com/uploadcare/uploadcare-upload-client/issues/130)) ([1ece271](https://github.com/uploadcare/uploadcare-upload-client/commit/1ece271d8583ba257011d16b3f1930ad29329a96))



# [1.0.0](https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0-alpha.5...v1.0.0) (2019-12-23)

### Changed

- All methods return a `Promise` now instead of `ThenableInterface`
- `SettingsInterface` was renamed to `Settings`
- `fileFrom` was renamed to `uploadFile`.
- `groupFrom` was renamed to `uploadFileGroup`.
- `request` low-level API method is not exported outside now.
- Method `setSettings` of `UploadClient` was renamed to `updateSettings`.
- Methods (`base`, `fromUrl`, `fromUrlStatus`, `group`,
  `groupInfo`, `info`, `multipartStart`, `multipartUpload`,
  `multipartComplete`, `multipart`, `uploadFile`, `uploadGroup`) were exported
  from `index.ts` to make the tree shaking better.
- Methods (`base`, `fromUrl`, `fromUrlStatus`, `group`,
  `groupInfo`, `info`, `multipartStart`, `multipartUpload`,
  `multipartComplete`, `multipart`, `uploadFile`, `uploadGroup`) accept
  `options` instead of `settings` as a second argument.
- `UploadClient` now contains all low-level API methods (`base`,
  `fromUrl`, `fromUrlStatus`, `group`, `groupInfo`, `info`,
  `multipartStart`, `multipartUpload`, `multipartComplete`, `multipart`,
  `fileFrom`, `groupFrom`).
- `UploadcareGroup` files now contain `UploadcareFile[]`, but not `FileInfo[]`.
- `README.md` was updated according to library API.
- `FileData` became `NodeFile` and `BrowserFile`.

### Removed

- `UploadAPI` class.
- `Thenable`, `CancelableThenable`, `BaseThenable`, `Upload` classes
  implementing respective interfaces.
- `onReady`, `onUploaded` callbacks.
- `addUpdateSettingsListener` and `removeUpdateSettingsListener` from
  `UploadClientInterface`.
- `from` param of `uploadFile` and `uploadFileGroup`.
- `FileFromEnum` and `GroupFromEnum`.

### Added

- `CancelController` to make API calls cancellable. See README for how
  to use this feature. ([#77](https://github.com/uploadcare/uploadcare-upload-client/issues/77))

## [1.0.0-alpha.5]

### Added

- Support of multipart and big files uploading: `multipartStart`,
  `multipartUpload`, and `multipartComplete` methods to `UploadAPI`.
- Support of canceling uploads and handling them for all API methods
  (`info`, `fromUrl`, `fromUrlStatus`, `group`, `groupInfo`).
- `DefaultSettingsInterface` with required properties.
- `pollingTimeoutMilliseconds` to `SettingsInterface`.
  Now you can adjust the timeout for checking is file ready,
  and checking is file being uploaded from URL.
- `maxConcurrentRequests` setting that allows you to specify the number
  of concurrent requests.

### Changed

- `FileFrom` enum was renamed to `FileFromEnum`.
- `GroupFrom` enum was renamed to `GroupFromEnum`.
- `Settings` was renamed to `SettingsInterface`.
- `FileInfo` was renamed to `FileInfoInterface`.
- `GroupInfo` was renamed to `GroupInfoInfoInterface`.
- `OriginalImageInfo` was renamed to `OriginalImageInfoInterface`.
- `RequestOptions` was renamed to `RequestOptionsInterface`.
- `ProgressStatus` was renamed to `ProgressStatusInterface`.
- `Audio` type was renamed to `AudioInterface`.
- `Video` type was renamed to `VideoInterface`.
- `ErrorRequestInfo` type was renamed to `ErrorRequestInfoInterface`.
- `ErrorResponseInfoInfo` type was renamed to `ErrorResponseInfoInterface`.
- `ProgressState` was renamed to `ProgressStateEnum`.
- `ProgressParams` was renamed to `ProgressParamsInterface`.
- `base` method of Upload API now returns `BaseThenableInterface<BaseResponse>`
  instead of `DirectUploadInterface`.
- `info`, `fromUrl`, `fromUrlStatus`, `group`, `groupInfo` now returns
  `CancelableThenableInterface`.
- Progress is now calculated from 0 to 1 instead of 0 to 100

### Fixed

- Example with `directUpload.onProgress` in `README.md`.
- All tests are passing now.
- Mock server tests are passing now.

### Removed

- `DirectUploadInterface` was removed in favor of `BaseThenableInterface<BaseResponse>`.
- `BaseProgress` was removed in favor of native `ProgressEvent`.
- `InfoResponse` was removed in favor of `FileInfoInterface`.
- Old code in folder `./.back`.

[1.0.0-alpha.5]: https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0-alpha.4...v1.0.0-alpha.5

## [1.0.0-alpha.4]

### Added

- Wrappers for group paths of Upload API (`group`, `groupInfo`).
- The high-level function for group uploading, aka filesGroupFrom.
- Uploading progress for Node.js in the `base` method.

### Changed

- `UploadFromInterface` was renamed to `FileUploadInterface`.
- `FileProgress` was renamed to `ProgressParams`.
- `UploadcareFile` was renamed to `UploadcareFileInterface`.

[1.0.0-alpha.4]: https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0-alpha.3...v1.0.0-alpha.4

## [1.0.0-alpha.3]

### Added

- Support `fileFrom` 'uploaded' file (`uuid`).
- Support of `waiting` status from `/from_url/status/` endpoint.
- Export some main types from the `index.ts` file.
  So you can import them now directly from `@uploadcare/upload-client`.
- Throttling for `request`.
- `retryThrottledMaxTimes` param to set count of max retries after
  throttled request (1 by default).
- `Uuid` type.
- Mock server for local testing.

### Fixed

- The default timeout for polling functions increased from 3s to 10s.
- Removed restrictions for timeout and interval.

[1.0.0-alpha.3]: https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0-alpha.2...v1.0.0-alpha.3

## [1.0.0-alpha.2]

### Changed

- The project was moved from Flow notations to TypeScript.
- The `base` function now returns an object that implements
  `DirectUploadInterface`.
- The `fileFrom` function now returns an object that implements
  `UploadFromInterface`.
- The `UCFile` type renamed to `UploadcareFile`.
- The progress of `fileFrom` now based on the `UploadingProgress` type.

### Added

- Low-level request wrappers for `/from_url/` and `/from_url/status/`
  paths of Upload API.
- Settings: the support of setting `baseCDN`, `checkForUrlDuplicates`,
  `saveUrlForRecurrentUploads`.

[1.0.0-alpha.2]: https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0-alpha.1...v1.0.0-alpha.2

## [1.0.0-alpha.1]

### Fixed

- Use the version from the `package.json` file to create Uploadcare User
  Agent.

### Changed

- The `base` function returns `thenable` object called `DirectUpload`
  instead of using the `promise` property.
- The `fileFrom` function returns `thenable` object called `FilePromise`
  instead of using the `promise` property.
- The `FileInfo` type renamed to `UCFile` and updated.
- The `FilePromise` resolved with an object of the `UploadcareFile` type.
- The progress of `fileFrom` now based on the `FilePromiseProgress` type.
- Updated the `InfoResponse` type.

### Added

- The `checkFileIsReady` function to check if the file is ready on the CDN.
- New properties for the object that the `fileFrom` function returns:
  `onUploaded`, `onReady`.
- The `camelizeKeys` function for inner usage.
- The `baseCDN` default setting

[1.0.0-alpha.1]: https://github.com/uploadcare/uploadcare-upload-client/compare/v1.0.0-alpha...v1.0.0-alpha.1

## 1.0.0-alpha

The first public alpha release.

### Added

- The `request` function to request to any path of [Upload API][upload-api].
- Low-level request wrappers for `/base/` and `/info/` paths of Upload API.
- `UploadClient` class with settings and `fileFrom` method that supports
  only direct uploads now.
- Support of following Uploadcare Settings: `publicKey`, `baseUrl`,
  `doNotStore`, `integration`, `secureExpire`, `secureSignature`.
- Test environment for both Node.js and browsers

[upload-api]: https://uploadcare.com/docs/api_reference/upload/
