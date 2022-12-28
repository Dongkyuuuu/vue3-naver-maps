# 3.x 버전으로 부터 마이그레이션

4.x 버전은 3.x에서 전체적인 코드 리팩토링 작업과 `install` 부분이 변경 되었습니다.

## vue3-naver-maps 설치 시, 설치 모듈 이름 변경

자세한 예제 코드는 [설치하기 - 설정방법](../start/install.md)에서 확인 가능합니다.

### 3.x 이전

3.x 이전 에는 `vue3-naver-maps`에서 `export default`로 호출 된 값을 install module로 사용 하였습니다.

```javascript
import { createApp } from "vue";
import App from "./app.vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app.use(naver, { clientId: "your clientId" }).mount("#app");
```

### 4.x 이후

4.x 이후 부터는 `createNaverMap`이라는 명확한 install module을 사용합니다.

```javascript
import { createApp } from "vue";
import App from "./app.vue";
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app.use(createNaverMap, { clientId: "your clientId" }).mount("#app");
```

## 설치 옵션 `subModules` 변경

기존 `string`에 `,`로 여러 모듈을 사용 했다면, 4.x 이후 부터 `array`로 필요한 모듈을 불러와서 사용 합니다.

또한 `SubModules` 타입스크립트 유저를 위한 타입을 제공합니다.

```typescript
import { createApp } from "vue";
import App from "./app.vue";
import { createNaverMap } from "vue3-naver-maps";
import type { SubModules } from "vue3-naver-maps"; // subModule type

const app = createApp(App);

app
  .use(createNaverMap, {
    clientId: "your clientId", // Required
    subModules: [] as SubModules,
  })
  .mount("#app");
```
