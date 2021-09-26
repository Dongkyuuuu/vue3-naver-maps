# 타입정의

`vue3-naver-maps`에서 자체적으로 제공하는 `naverV3` 타입 정의 입니다.

## initLayer

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

## mapOptions

`naver.maps.MapOptions`를 상속 받아 사용합니다. 지도 옵션 생성에 사용 됩니다.

```ts
interface mapOptions extends naver.maps.MapOptions {
  latitude?: number;
  longitude?: number;
}
```

## htmlIcon

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
