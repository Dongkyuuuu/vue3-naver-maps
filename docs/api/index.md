---
sidebar: auto
---

# API 레퍼런스

## 설치옵션

`main.js`에서 vue3-naver-maps를 설치 할 때, 사용할 수 있는 옵션 입니다.

### clinetId

- **필수**
- **타입:** `string`
- **상세:**

네이버 지도에서 발급받은 ClinetId 값을 입력합니다. 기능을 이용하기 위해선 필수적으로 입력 되어야 합니다.

```javascript
// main.js
import { createApp } from "vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app.use(naver, { clientId: "your clientId" }).mount("#app");
```

### category

- **선택**
- **타입:** `"ncp" | "gov" | "fin"`
- **기본값:** `ncp`
- **상세:**

사용할 클라이언트 종류를 입력합니다. `ncp`가 기본값으로 설정 되어 있습니다. 다른 클라이언트 타입을 이용하고 있는경우 사용해주세요.

`ncp`: 네이버클라우드 플랫폼<br/>
`gov`: 공공기관용<br/>
`fin`: 금융기관용

```javascript
// main.js
import { createApp } from "vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app.use(naver, { clientId: "your clientId", category: "gov" }).mount("#app");
```

### subModules

- **선택**
- **타입:** `string`
- **상세:**

사용할 서브모듈을 생성합니다. 여러개의 서브모듈을 이용할 경우 `콤마(,)`를 이용하여 작성해야 합니다.

```javascript
// main.js
import { createApp } from "vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app
  .use(naver, { clientId: "your clientId", subModules: "panorama,geocoder" })
  .mount("#app");
```

## NaverMaps

### width

- **선택**
- **타입:** `string`
- **기본값:** `400px`
- **상세:**

생성된 지도의 너비를 정합니다. `px` `em` `%` `vh` `vw` 등 css 단위 전부 사용 가능합니다.

### height

- **선택**
- **타입:** `string`
- **기본값:** `400px`
- **상세:**

생성된 지도의 높이를 정합니다. `px` `em` `%` `vh` `vw` 등 css 단위 전부 사용 가능합니다.

### mapOptions

- **선택**
- **타입:** [`naverV3.mapOptions`](../types/define.html#mapoptions)
- **상세:**

`naver.maps.mapOptions`타입을 상속받아 사용 합니다. 지도 생성 옵션을 지정 합니다. 옵션을 지정하지 않는 경우, 네이버에서 제공 하는 기본 지도 옵션을 사용합니다.

`latitude`, `longitude`로 맵 로드 시 중앙을 설정 할 수 있습니다.

### initLayers

- **선택**
- **타입:** [`naverV3.initLayer[]`](../types/define.html#initlayer)
- **기본값:** `[]`
- **상세:**

기본 레이어를 설정합니다. 대문자 그대로 사용하여야 하며, 아래의 지정 된 옵션만 사용해야 합니다.

- `BACKGROUND`
- `BACKGROUND_DETAIL`
- `BICYCLE`
- `CADASTRAL`
- `CTT`
- `HIKING_TRAIL`
- `PANORAMA`
- `POI_KOREAN`
- `TRANSIT`
- `KOREAN`
- `ENGLISH`
- `CHINESE`
- `JAPANESE`

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Map`
- **상세:**

컴포넌트에서 생성한 지도 객체를 반환 합니다. 반환받은 네이버 맵 객체를 통해 지도를 설정 할 수 있습니다.

## NaverMarker

### latitude

- **필수**
- **타입:** `number`
- **상세:**

마커의 위도를 지정합니다.

### longitude

- **필수**
- **타입:** `number`
- **상세:**

마커의 경도를 지정합니다.

### htmlIcon

- **선택**
- **타입:** [`naverV3.htmlIcon`](../types/define.html#htmlicon)
- **상세:**

htmlIcon을 사용하는 경우, 초기 `size`와 `anchor`를 지정합니다. `@onLoad`를 통해 마커 객체를 반환 받고 `setIcon()`을 사용하여도 무관합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Marker`
- **상세:**

## NaverInfoWindow

### marker

- **필수**
- **타입:** `naver.maps.Marker` | `undefined`
- **상세:**

정보창을 연동할 마커를 지정합니다. marker가 필수적으로 있어야 정보창이 연동 됩니다.

### isOpen

- **선택**
- **타입:** `Boolean`
- **기본값:** `false`
- **상세:**

정보창을 보여줍니다.(false: 안보임, true: 보임)

### options

- **선택**
- **타입:** `naver.maps.InfoWindowOptions`
- **기본값:** `{}`
- **상세:**

정보창에 대한 옵션을 설정합니다.
