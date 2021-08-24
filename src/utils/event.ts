export function addEvent(target: any, name: any) {
  naver.maps.Event.addListener(target, name, (event) => {});
}
