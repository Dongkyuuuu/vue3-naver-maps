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

지도 컴포넌트에서 사용 되는 Props 입니다.

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

마커 컴포넌트에서 사용 되는 Props 입니다.

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

정보창 컴포넌트에서 사용 되는 Props 입니다.

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

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Infowindow`
- **상세:**

## NaverCircle

원 컴포넌트에서 사용되는 Props 입니다.

### latitude

- **필수**
- **타입:** `Number`
- **상세:**

원 컴포넌트의 위도를 설정합니다.

### longitude

- **필수**
- **타입:** `Number`
- **상세:**

원 컴포넌트의 경도를 설정합니다.

### radius

- **선택**
- **타입:** `Number`
- **상세:**

컴포넌트의 위도,경도 기준 원의 반경입니다. 단위는 미터(m)로 사용 됩니다.

### options

- **선택**
- **타입:** `naver.maps.CircleOptions`
- **기본값:** `{}`
- **상세:**

원 컴포넌트에서 사용 가능한 추가적인 옵션을 입력합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Circle`
- **상세:**

## NaverEllipse

타원 컴포넌트에서 사용되는 Props 입니다.

### bounds

- **필수**
- **타입:** `naver.maps.Bounds` | `naver.maps.BoundsLiteral`
- **상세:**

도형의 좌표 경계를 지정합니다.

```js
// naver.maps.Bounds 타입
const bounds = new window.naver.maps.LatLngBounds(
  new window.naver.maps.LatLng(37.565, 126.9761217732253), // sw
  new window.naver.maps.LatLng(37.568, 126.980655026774) // ne
);
```

```js
// naver.maps.BoundsLiteral 타입
const bounds = {
  south: 37.566616443521745,
  north: 38.566616443521745,
  west: 126.97837068565364,
  east: 127.97837068565364,
};
```

위와 같은 예제로 bounds를 지정할 수 있습니다.

### options

- **선택**
- **타입:** `naver.maps.EllipseOptions`
- **기본값:** `{}`
- **상세:**

타원 컴포넌트에서 사용 가능한 추가적인 옵션을 입력합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Ellipse`
- **상세:**

## NaverRectangle

사각형 컴포넌트에서 사용되는 Props 입니다.

### bounds

- **필수**
- **타입:** `naver.maps.Bounds` | `naver.maps.BoundsLiteral`
- **상세:**

도형의 좌표 경계를 지정합니다.

```js
// naver.maps.Bounds 타입
const bounds = new window.naver.maps.LatLngBounds(
  new window.naver.maps.LatLng(37.565, 126.9761217732253), // sw
  new window.naver.maps.LatLng(37.568, 126.980655026774) // ne
);
```

```js
// naver.maps.BoundsLiteral 타입
const bounds = {
  south: 37.566616443521745,
  north: 38.566616443521745,
  west: 126.97837068565364,
  east: 127.97837068565364,
};
```

위와 같은 예제로 bounds를 지정할 수 있습니다.

### options

- **선택**
- **타입:** `naver.maps.RectangleOptions`
- **기본값:** `{}`
- **상세:**

사각형 컴포넌트에서 사용 가능한 추가적인 옵션을 입력합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Rectangle`
- **상세:**
