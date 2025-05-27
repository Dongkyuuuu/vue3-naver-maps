# 레퍼런스

## 설치옵션

`main.js`에서 vue3-naver-maps를 설치 할 때, 사용할 수 있는 옵션 입니다.

### clientId

- **필수**
- **타입:** `string`
- **상세:**

네이버 지도에서 발급받은 ClinetId 값을 입력합니다. 기능을 이용하기 위해선 필수적으로 입력 되어야 합니다.

```javascript
// main.js
import { createApp } from "vue";
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app.use(createNaverMap, { clientId: "your clientId" }).mount("#app");
```

### enableAiMaps

- **선택**
- **타입:** `boolean`
- **상세:**

  25.04부터 신규 Maps 서비스가 출시됨에 따라 구버전 서비스를 사용할지 신버전 서비스를 사용할지 선택하는 분기. 하위 호환성을 위해 기본값은 `true`입니다. 자세한 내용은 [공지사항](https://www.ncloud.com/support/notice/all/1930)과 [공식문서](https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html)를 확인해주세요

```javascript
// main.js
import { createApp } from "vue";
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app
  .use(createNaverMap, { clientId: "your clientId", enableAiMaps: true })
  .mount("#app");
```

### category

- **선택**
- **타입:** `"ncp" | "gov" | "fin"`
- **기본값:** `ncp`
- **상세:**

사용할 클라이언트 종류를 입력합니다. `ncp`가 기본값으로 설정 되어 있습니다. 다른 클라이언트 타입을 이용하고 있는경우 사용해주세요.

- [네이버 클라우드 플랫폼](https://console.ncloud.com/mc/solution/naverService/application)
- [공공기관용](https://console.gov-ncloud.com/mc/solution/naverService/application)
- [금융기관용](https://www.fin-ncloud.com/)

```javascript
// main.js
import { createApp } from "vue";
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app
  .use(createNaverMap, { clientId: "your clientId", category: "gov" })
  .mount("#app");
```

### subModules

- **선택**
- **타입:** `array`
- **상세:**

  지도의 서브모듈을 추가할 경우 사용 되는 옵션 입니다. 사용 하는 서브모듈의 이름을 작성해주면 됩니다. 여러 서브모듈을 사용하는 경우 `,`로 공백없이 이어서 입력하면 됩니다. 제공하는 서브모듈은 [공식문서](https://navermaps.github.io/maps.js.ncp/docs/tutorial-4-Submodules.html)를 참고해주세요.

```javascript
// main.js
import { createApp } from "vue";
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app
  .use(createNaverMap, {
    clientId: "your clientId",
    subModules: ["panorama", "geocoder"],
  })
  .mount("#app");
```

## NaverMaps

지도 컴포넌트에서 사용 되는 Props 입니다.

### style

- **선택**
- **타입:** `css style`
- **상세:**

생성된 지도의 스타일을 지정합니다.

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
-

## NaverPolygon

폴리곤 컴포넌트에서 사용되는 Props 입니다.

### paths

- **필수**
- **타입:** `naver.maps ArrayOfCoordsLiteral`
- **상세:**

연결 될 각 좌표들을 설정합니다.

```js
// naver.maps ArrayOfCoordsLiteral 타입
const paths = [
  [126.9797895, 37.5670131],
  [126.979215, 37.5649555],
  [126.9766789, 37.5649082],
  [126.9789515, 37.5637645],
  [126.9785598, 37.5614914],
  [126.9804949, 37.5632666],
  [126.9827689, 37.5619065],
  [126.9818039, 37.5639213],
  [126.9837414, 37.5653719],
  [126.9811162, 37.5651081],
];
```

위와 같은 예제로 paths를 지정할 수 있습니다.

### options

- **선택**
- **타입:** `naver.maps.PolygonOptions`
- **기본값:** `{}`
- **상세:**

폴리곤 컴포넌트에서 사용 가능한 추가적인 옵션을 입력합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Polygon`
- **상세:**

폴리곤 객체를 반환합니다.

## NaverPolyline

폴리라인 컴포넌트에서 사용되는 Props 입니다.

### path

- **필수**
- **타입:** `naver.maps ArrayOfCoordsLiteral`
- **상세:**

연결 될 각 좌표들을 설정합니다.

```js
// naver.maps ArrayOfCoordsLiteral 타입
const path = [
  { lat: 37.5670131, lng: 126.9797895 },
  { lat: 126.979215, lng: 37.5649555 },
];
```

위와 같은 예제로 path를 지정할 수 있습니다.

### options

- **선택**
- **타입:** `naver.maps.PolylineOptions`
- **기본값:** `{}`
- **상세:**

폴리라인 컴포넌트에서 사용 가능한 추가적인 옵션을 입력합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.Polyline`
- **상세:**

폴리라인 객체를 반환 합니다.

## NaverGroundOverlay

지상 오버레이 컴포넌트에서 사용되는 Props 입니다.

### bounds

- **필수**
- **타입:** `naver.maps.BoundsLiteral`
- **상세:**

오버레이가 표시될 위치를 지정합니다.

```js
// naver.maps.BoundsLiteral 타입
const path = {
  south: 37.566616443521745,
  north: 38.566616443521745,
  west: 126.97837068565364,
  east: 127.97837068565364,
};
```

위와 같은 예제로 bound를 지정할 수 있습니다.

### url

- **필수**
- **타입:** `String`
- **상세:**

오버레이 사용 될 이미지 URL을 지정합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.GroundOverlay`
- **상세:**

지상 오버레이 객체를 반환 합니다.

## NaverCustomOverlay

사용자 정의 컴포넌트에서 사용되는 Props 입니다.

### latitude

- **필수**
- **타입:** `number`
- **상세:**

사용자 정의 오버레이의 위도를 지정합니다.

### longitude

- **필수**
- **타입:** `number`
- **상세:**

사용자 정의 오버레이의 경도를 지정합니다.

### @onLoad

- **선택**
- **반환타입:** `naver.maps.OverlayView`
- **상세:**

사용자 정의 오버레이 객체를 반환 합니다.
