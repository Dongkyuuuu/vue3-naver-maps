import {
  UI_EVENT_MAP,
  UI_EVENT_OBJECT,
  UI_EVENT_INFOWINDOW,
  UI_EVENT_CIRCLE,
  UI_EVENT_ELLIPSE,
  UI_EVENT_RECTANGLE,
} from "./eventList";

export function addEvent(emit: any, target: any, name: string) {
  window.naver.maps.Event.addListener(target, name, (event) => {
    emit(name, event);
  });
}

export function addEventMap(emit: any, target: naver.maps.Map) {
  UI_EVENT_MAP.forEach((name) => addEvent(emit, target, name));
}

export function addEventMarker(emit: any, target: naver.maps.Marker) {
  UI_EVENT_OBJECT.forEach((name) => addEvent(emit, target, name));
}

export function addEventInfoWindow(emit: any, target: naver.maps.InfoWindow) {
  UI_EVENT_INFOWINDOW.forEach((name) => addEvent(emit, target, name));
}

export function addEventCircle(emit: any, target: naver.maps.Circle) {
  UI_EVENT_CIRCLE.forEach((name) => addEvent(emit, target, name));
}

export function addEventEllipse(emit: any, target: naver.maps.Ellipse) {
  UI_EVENT_ELLIPSE.forEach((name) => addEvent(emit, target, name));
}

export function addEventRectangle(emit: any, target: naver.maps.Rectangle) {
  UI_EVENT_RECTANGLE.forEach((name) => addEvent(emit, target, name));
}
