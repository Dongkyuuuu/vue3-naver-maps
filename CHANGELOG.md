# [4.2.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v4.1.0...v4.2.0) (2023-08-11)


### Bug Fixes

* 네이버지도 API 변경 대응 ([#23](https://github.com/DongKyuuuu/vue3-naver-maps/issues/23)) ([99f1136](https://github.com/DongKyuuuu/vue3-naver-maps/commit/99f1136bedd0175a31894433d25791d6b3b42a69))


### Features

* **docs:** update nuxt section ([3f32653](https://github.com/DongKyuuuu/vue3-naver-maps/commit/3f32653999528b5a1998581442c11430151f6830))
* update nuxt docs ([a1add22](https://github.com/DongKyuuuu/vue3-naver-maps/commit/a1add22d20a740d9b67ba04dd7179a14e14de420))



# [4.1.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v4.0.1...v4.1.0) (2023-02-27)


### Bug Fixes

* naver maps submodule parameter name changed ([#16](https://github.com/DongKyuuuu/vue3-naver-maps/issues/16)) ([e3dcc17](https://github.com/DongKyuuuu/vue3-naver-maps/commit/e3dcc17c89bf38f0b2547ce8191c6146ab047945))



## [4.0.1](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v4.0.0...v4.0.1) (2022-12-28)


### Features

* **docs:** update README.md ([#11](https://github.com/DongKyuuuu/vue3-naver-maps/issues/11)) ([1c65af8](https://github.com/DongKyuuuu/vue3-naver-maps/commit/1c65af8168710127ab0d5d35e4544cc4c4f92c21))



# [4.0.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v3.2.1...v4.0.0) (2022-12-28)


### Features

* **docs:** add new docs migration from 3.x ([#10](https://github.com/DongKyuuuu/vue3-naver-maps/issues/10)) ([6db989f](https://github.com/DongKyuuuu/vue3-naver-maps/commit/6db989f71341fc95f03814139479408e5ceb483c))
* refactoring the entire code ([65f073d](https://github.com/DongKyuuuu/vue3-naver-maps/commit/65f073d6bc82bbf9f130e7600277184cad96cb86))


### BREAKING CHANGES

* the installation module called `export default` has been changed to `createNaverMap` module.
* install options `subModule` type is changed. (`string` to `array`)



## [3.1.1](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v3.1.0...v3.1.1) (2022-09-27)


### Bug Fixes

* **Marker:** HtmlIcon children nodes issue ([a971d6b](https://github.com/DongKyuuuu/vue3-naver-maps/commit/a971d6b7a8af54185264203c5d3404ed3d8a5e71))


### Features

* **docs:** update marker document ([27590b1](https://github.com/DongKyuuuu/vue3-naver-maps/commit/27590b11df694b59f78132e66e6410ebf0248777))



# [3.1.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v3.0.14...v3.1.0) (2022-09-27)

### Bug Fixes

- **Marker:** HtmlIcon issue fix ([78f8675](https://github.com/DongKyuuuu/vue3-naver-maps/commit/78f86759c1649c955f6f57d90007817adb16a94d))

# [2.0.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v1.0.1...v2.0.0) (2022-02-09)

### Breaking Change

`v2.0.0` need upper `Vue@3.2.0` and `@vue/compiler-sfc@3.2.0`.

### Features

- **docs:** installation, guide ([ead8a33](https://github.com/DongKyuuuu/vue3-naver-maps/commit/ead8a33eb35d1e8c68e1bac2eed67ec53de8c9fb))

## [1.0.1](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v1.0.0...v1.0.1) (2021-10-10)

### Bug Fixes

- **customOverlay:** temporarily delete ([58734c3](https://github.com/DongKyuuuu/vue3-naver-maps/commit/58734c3d714eb3c53cf0861a159e897d301f57ba))

# [1.0.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.7.0...v1.0.0) (2021-10-10)

### Features

- add CustomOverlay compoennt ([c4762cb](https://github.com/DongKyuuuu/vue3-naver-maps/commit/c4762cb89f711eff45a59a5a6260c35d8f95e718))
- **GroundOverlaya:** add GroundOverlay component ([9554487](https://github.com/DongKyuuuu/vue3-naver-maps/commit/955448705d301b1017aa0d11f99e5dd98e130a34))

# [0.7.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.6.0...v0.7.0) (2021-10-01)

### Bug Fixes

- **polyline:** change types, paths -> path ([f5431e1](https://github.com/DongKyuuuu/vue3-naver-maps/commit/f5431e1a20ffa558936efa8072ccff79e68787d5))
- SSR, SPA mode spearte script install ([7ba6edf](https://github.com/DongKyuuuu/vue3-naver-maps/commit/7ba6edf151110cde142c648883a3310fc931617d))

### Features

- change NaverMaps component ssr ([bbd9e87](https://github.com/DongKyuuuu/vue3-naver-maps/commit/bbd9e8712d83c26fbfaa4fee47bfd663db095305))
- **dcos:** add polyline docs ([ee10224](https://github.com/DongKyuuuu/vue3-naver-maps/commit/ee10224c5a497dd811a6fdb32d59d81b746a81d7))
- **docs:** add ssr docs ([b279a60](https://github.com/DongKyuuuu/vue3-naver-maps/commit/b279a60eff85f4b0b6f58c00e866f7612c963614))
- **polygon:** change polygone props paths type ([5f858b9](https://github.com/DongKyuuuu/vue3-naver-maps/commit/5f858b93e793b75c54f49ad01fb612ca00161a31))
- **polyline:** add Polyline Component ([2c211f2](https://github.com/DongKyuuuu/vue3-naver-maps/commit/2c211f26b40aa92c36a0044371eec0f01598e0e8))

# [0.6.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.5.0...v0.6.0) (2021-09-30)

### Bug Fixes

- change naver script install process ([9e12ee7](https://github.com/DongKyuuuu/vue3-naver-maps/commit/9e12ee794ada795169a398290a8243d2cffb13cd))

# [0.5.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.4.0...v0.5.0) (2021-09-30)

### Features

- **docs:** ssr / components path ([c3ce8ce](https://github.com/DongKyuuuu/vue3-naver-maps/commit/c3ce8ce9f7ac3585678f36efa9b34a875cdd2c28))
- **SSR:** SSR support ([4d9a406](https://github.com/DongKyuuuu/vue3-naver-maps/commit/4d9a4066e54cb36aa9b89939a0197a0d4bf5efb2))

# [0.4.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.3.1...v0.4.0) (2021-09-29)

### Features

- **docs:** add polygone docs ([c537240](https://github.com/DongKyuuuu/vue3-naver-maps/commit/c537240fb62aa509eded853b5912b323e19cca87))
- **polygon:** add Polygon Component ([772c880](https://github.com/DongKyuuuu/vue3-naver-maps/commit/772c8809deed5d57bacb9a162d996485ed911b42))

## [0.3.1](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.3.0...v0.3.1) (2021-09-28)

### Bug Fixes

- **Marker:** webpack4 optional chaining error fix ([d118daf](https://github.com/DongKyuuuu/vue3-naver-maps/commit/d118dafb47b9cb847464618d10162a42bb17834a))

# [0.3.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.2.1...v0.3.0) (2021-09-27)

### Bug Fixes

- update UI Event ([2d6a8d7](https://github.com/DongKyuuuu/vue3-naver-maps/commit/2d6a8d75d631b664c7604297ae9bc8a8c22d6ee0))

### Features

- **circle:** add Circle Components ([b67520a](https://github.com/DongKyuuuu/vue3-naver-maps/commit/b67520affeea567fe28437a7bf21de6929a317b0))
- **docs:** update docs ([e8c0bd7](https://github.com/DongKyuuuu/vue3-naver-maps/commit/e8c0bd733f3c7bc4f1112e010c7e20261faf26de))
- **ellpise:** add Ellpise Component ([3879aac](https://github.com/DongKyuuuu/vue3-naver-maps/commit/3879aac18391d6a88773219e2b0e2ba7b859a09c))
- **infowindow:** add props options ref ([5f8cbff](https://github.com/DongKyuuuu/vue3-naver-maps/commit/5f8cbff33fa791f0ecbe5823c6f4292513f0cb64))
- **Rectangle:** add Rectangle Component ([68c1fa2](https://github.com/DongKyuuuu/vue3-naver-maps/commit/68c1fa255ac8e813a05f668a75e9b84807b54a51))

## [0.2.1](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.2.0...v0.2.1) (2021-09-27)

# [0.2.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.1.0...v0.2.0) (2021-09-27)

### Bug Fixes

- **infowindow:** scroll error fix ([632c909](https://github.com/DongKyuuuu/vue3-naver-maps/commit/632c909513c455b5881e44b961affd097168a0de))

### Features

- change Injection Symbols ([9a23f92](https://github.com/DongKyuuuu/vue3-naver-maps/commit/9a23f9216d942eb4f955c20777ebc66607d64fe9))
- **docs:** add example components ([8f5eab1](https://github.com/DongKyuuuu/vue3-naver-maps/commit/8f5eab13ba854648593a276c918b44ed5ccf9979))
- **docs:** change init module ([0918032](https://github.com/DongKyuuuu/vue3-naver-maps/commit/09180329a276e695d03801c9e1b01ea5fbdbb587))
- **infowindow:** add Infowindow component ([0c8e311](https://github.com/DongKyuuuu/vue3-naver-maps/commit/0c8e3112848745e1e486747ba43b953f36986fa1))
- **infowindow:** register infowindow components ([5542b2e](https://github.com/DongKyuuuu/vue3-naver-maps/commit/5542b2e1daee11933eacea94d78ddd2fc325499a))
- **marker:** Changing the slot data parsing ([692e63e](https://github.com/DongKyuuuu/vue3-naver-maps/commit/692e63efdffa92a4eba7d35001c17c7e900e88f4))

# [0.1.0](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.0.5...v0.1.0) (2021-09-05)

### Features

- **dcos:** update install usage docs ([38f3447](https://github.com/DongKyuuuu/vue3-naver-maps/commit/38f3447ae5f6672e7e7e2dff7dfda93ab4513732))
- **docs:** fix types code snippet lang ([90961eb](https://github.com/DongKyuuuu/vue3-naver-maps/commit/90961eb055a5938692b733e352135917d94093cd))
- **process:** change install & useage process ([e8924c9](https://github.com/DongKyuuuu/vue3-naver-maps/commit/e8924c9bf7c8e1f7b2b527293f173d1094f9078a))

## [0.0.5](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.0.4...v0.0.5) (2021-09-05)

### Features

- **docs:** add import type example `naverV3` ([cb3904d](https://github.com/DongKyuuuu/vue3-naver-maps/commit/cb3904dc66da1c1e2b4949a5e6d73bc0515b586a))
- **docs:** update UI event List ([dc1269f](https://github.com/DongKyuuuu/vue3-naver-maps/commit/dc1269f86da67116b782f7b4a5449d968f004441))
- **types:** change export types ([b1f44b1](https://github.com/DongKyuuuu/vue3-naver-maps/commit/b1f44b145e04edec2318d10492e54e4cd93f8406))

## [0.0.4](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.0.3...v0.0.4) (2021-09-05)

### Features

- **UIEvent:** add naver `UI event ([a63a518](https://github.com/DongKyuuuu/vue3-naver-maps/commit/a63a518008480bd470a986e23e7a8b2c4a331ab7))

## [0.0.3](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.0.2...v0.0.3) (2021-09-05)

### Bug Fixes

- **Map:** mapOptions init center position bug fix ([a691274](https://github.com/DongKyuuuu/vue3-naver-maps/commit/a69127435367329d360d73ababaeec2eabd53558))

## [0.0.2](https://github.com/DongKyuuuu/vue3-naver-maps/compare/v0.0.1...v0.0.2) (2021-09-04)

### Bug Fixes

- **map:** optional chaining bug fix ([40618be](https://github.com/DongKyuuuu/vue3-naver-maps/commit/40618be1c61d57aafe200252f0ed82ddbd459dc6))

## 0.0.1 (2021-09-04)

### Bug Fixes

- **docs:** docs confilct text delete ([31ef113](https://github.com/DongKyuuuu/vue3-naver-maps/commit/31ef1137d7bce04c225a13506c738becf0eef1d5))
- **docs:** docs link change ([85ad5c2](https://github.com/DongKyuuuu/vue3-naver-maps/commit/85ad5c25f954ad475516161026d803f3f749de30))
- **docs:** docs link path ([62476bc](https://github.com/DongKyuuuu/vue3-naver-maps/commit/62476bc10eca70cd830219cda18fbf78a84d8a20))

### Features

- add map component ([aa28d65](https://github.com/DongKyuuuu/vue3-naver-maps/commit/aa28d65508d19528fd04fd06d9a1cf67256da0fc))
- **docs:** add vitepress base URL ([55d731c](https://github.com/DongKyuuuu/vue3-naver-maps/commit/55d731c8aafafd4e2a5779bf9773e7e3df1e0219))
- **docs:** create docs ([59c3c76](https://github.com/DongKyuuuu/vue3-naver-maps/commit/59c3c76c7773656e530bd41f9b5b307abf3fd904))
- **docs:** update README ([c64704a](https://github.com/DongKyuuuu/vue3-naver-maps/commit/c64704a417a65661fa353b4c95098828293855d4))
- **map:** add feature map components ([9284469](https://github.com/DongKyuuuu/vue3-naver-maps/commit/92844692beccc84c2687745ed1c164aead21f342))
- **marker:** add naverMaps marker component ([64836ae](https://github.com/DongKyuuuu/vue3-naver-maps/commit/64836ae894e8bef9877305cff76d33a3f65e070d))
- naver map props list change ([fa77dd1](https://github.com/DongKyuuuu/vue3-naver-maps/commit/fa77dd1c29e4c9f6cea0d25f8e602fb2ba8161ad))
