/**
 * Naver Mouse UI Event
 */
export const UI_EVENT_MOUSE = [
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "rightclick",
  "mouseover",
  "mouseout",
  "mousemove",
] as const;
/**
 * Naver Drag UI Event
 */
export const UI_EVENT_DRAG = ["dragstart", "drag", "dragend"] as const;
/**
 * Naver Touch UI Event
 */
export const UI_EVENT_TOUCH = [
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
] as const;

/**
 * Naver Object UI Event
 */
export const UI_EVENT_OBJECT = [
  ...UI_EVENT_MOUSE,
  ...UI_EVENT_DRAG,
  ...UI_EVENT_TOUCH,
] as const;

/**
 * Naver Map UI Event
 */
export const UI_EVENT_MAP = [
  ...UI_EVENT_OBJECT,
  "addLayer",
  "bounds_changed",
  "center_changed",
  "centerPoint_changed",
  "idle",
  "init_stylemap",
  "keydown",
  "keyup",
  "mapType_changed",
  "mapTypeId_changed",
  "panning",
  "projection_changed",
  "removeLayer",
  "resize",
  "size_changed",
  "tilesloaded",
  "zoom_changed",
  "zooming",
] as const;

/**
 * Naver InfoWindow UI Event
 */
export const UI_EVENT_INFOWINDOW = [
  "anchorColor_changed",
  "anchorSize_changed",
  "anchorSkew_changed",
  "backgroundColor_changed",
  "borderColor_changed",
  "borderWidth_changed",
  "close",
  "content_changed",
  "disableAnchor_changed",
  "disableAutoPan_changed",
  "maxWidth_changed",
  "open",
  "pixelOffset_changed",
  "position_changed",
  "zIndex_changed",
] as const;

/**
 * Naver Circle UI Event
 */
export const UI_EVENT_CIRCLE = [
  "center_changed",
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "radius_changed",
  "visible_changed",
  "zIndex_changed",
] as const;

/**
 * Naver Ellipse UI Event
 */
export const UI_EVENT_ELLIPSE = [
  "bounds_changed",
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "visible_changed",
  "zIndex_changed",
] as const;

/**
 * Naver Rectangle UI Event
 */
export const UI_EVENT_RECTANGLE = [
  "bounds_changed",
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "visible_changed",
  "zIndex_changed",
] as const;

/**
 * Naver Polygon UI Event
 */
export const UI_EVENT_POLYGON = [
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "visible_changed",
  "zIndex_changed",
] as const;

/**
 * Naver Polyline UI Event
 */
export const UI_EVENT_POLYLINE = [
  "click",
  "clickable_changed",
  "dblclick",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "visible_changed",
  "zIndex_changed",
];

/**
 * Naver GroundOverlay UI Event
 */
export const UI_EVENT_GROUNDOVERLAY = ["click", "dbclick"] as const;
