# 타입정의

타입스크립트로 프로젝트를 진행하는 경우, `@types/navermaps`가 필수적으로 설치되어 있어야 합니다. 타입 정의들은 `naverV3` 호출을 통해 이용 가능합니다.

## naverV3

`vue3-naver-maps`에서 `naverV3` 타입정의를 호출합니다.

```ts
import type { naverV3 } from "vue3-naver-maps";
```

### **initLayer**

지도 레이어 생성에 사용 됩니다.

```ts
type initLayer =
  | "BACKGROUND"
  | "BACKGROUND_DETAIL"
  | "BICYCLE"
  | "CADASTRAL"
  | "CTT"
  | "HIKING_TRAIL"
  | "PANORAMA"
  | "POI_KOREAN"
  | "TRANSIT"
  | "KOREAN"
  | "ENGLISH"
  | "CHINESE"
  | "JAPANESE";
```

### mapOptions

`naver.maps.MapOptions`를 상속 받아 사용합니다. 지도 옵션 생성에 사용 됩니다.

```ts
interface mapOptions extends naver.maps.MapOptions {
  latitude?: number;
  longitude?: number;
}
```

### htmlIcon

htmlIcon을 사용하는 `marker`의 초기 `size`와 `anchor`를 설정합니다.

```ts
interface htmlIcon {
  size: {
    width: number;
    height: number;
  };
  anchor: {
    x: number;
    y: number;
  };
}
```
