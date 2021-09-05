export const UI_EVENT = [
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "rightclick",
  "mouseover",
  "mouseout",
  "mousemove",
  "dragstart",
  "drag",
  "dragend",
  "touchstart",
  "touchmove",
  "touchend",
  "pinchstart",
  "pinch",
  "pinchend",
  "tap",
  "longtap",
  "twofingertap",
  "doubletap",
];
export const UI_EVENT_MAP = [
  ...UI_EVENT,
  "addLayer",
  "bounds_changed",
  "center_changed",
  "centerPoint_changed",
];

export function addEvent(emit: any, target: any, name: string) {
  window.naver.maps.Event.addListener(target, name, (event) => {
    emit(name, event);
  });
}

export function addEventMap(emit: any, target: naver.maps.Map) {
  UI_EVENT_MAP.forEach((name) => addEvent(emit, target, name));
}

export function addEventMarker(emit: any, target: naver.maps.Marker) {
  UI_EVENT.forEach((name) => addEvent(emit, target, name));
}
