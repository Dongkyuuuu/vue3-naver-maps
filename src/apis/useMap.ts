export interface useMapMethods {
  setLayerTypeId(typeId: string): void;

  addPane(name: string, elementOrZIndex: HTMLElement | number): void;

  destroy(): void;

  fitBounds(
    bounds:
      | naver.maps.Bounds
      | naver.maps.BoundsLiteral
      | naver.maps.ArrayOfCoords
      | naver.maps.ArrayOfCoordsLiteral,
    margin: number
  ): void;

  morph(
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    zoom?: number,
    transitionOptions?: naver.maps.TransitionOptions
  ): void;

  panTo(
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    transitionOptions: naver.maps.TransitionOptions
  ): void;

  panToBounds(
    bounds: naver.maps.Bounds | naver.maps.BoundsLiteral,
    transitionOptions: naver.maps.TransitionOptions,
    margin: naver.maps.Margin
  ): void;

  panBy(x: number, y: number): void;

  refresh(noEffect: boolean): void;

  removePane(name: string): void;

  updateBy(
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    zoom: number
  ): void;

  zoomBy(
    deltaZoom: number,
    zoomOrigin: naver.maps.Coord | naver.maps.CoordLiteral | undefined,
    effect: boolean
  ): void;
}

export interface useMapGetterMethods {
  getBounds(): naver.maps.Bounds;

  getCenter(): naver.maps.Coord;

  getCenterPoint(): naver.maps.Coord;

  getElement(): HTMLElement;

  getMapTypeId(): string;

  getOptions(key: string | undefined): any;

  getPanes(): naver.maps.MapPanes;

  getPrimitiveProjection(): naver.maps.Projection;

  getProjection(): naver.maps.MapSystemProjection;

  getSize(): naver.maps.Size;

  getZoom(): number;
}

export interface useMapSetterMethods {
  setCenter(
    latOrLatLng: naver.maps.LatLng | naver.maps.LatLngLiteral | number,
    lng: number
  ): void;

  setCenterPoint(point: naver.maps.Point | naver.maps.PointLiteral): void;

  setMapTypeId(type: "NORMAL" | "TERRAIN" | "SATELLITE" | "HYBRID"): void;

  setOptions(
    optionsOrKey: naver.maps.MapOptions | string,
    value: naver.maps.MapOptions | null
  ): void;

  setSize(size: naver.maps.Size | naver.maps.SizeLiteral): void;

  setZoom(level: number, useEffect: boolean): void;
}

export interface useMap
  extends useMapMethods,
    useMapGetterMethods,
    useMapSetterMethods {}

/**
 * naver.maps.Map Methods
 */
function _useMapMethods(map: naver.maps.Map): useMapMethods {
  const setLayerTypeId = (typeId: string) => {
    map.mapTypes.setLayerTypeId(typeId);
  };

  const addPane = (name: string, elementOrZIndex: HTMLElement | number) => {
    map.addPane(name, elementOrZIndex);
  };

  const destroy = () => {
    map.destroy();
  };

  const fitBounds = (
    bounds:
      | naver.maps.Bounds
      | naver.maps.BoundsLiteral
      | naver.maps.ArrayOfCoords
      | naver.maps.ArrayOfCoordsLiteral,
    margin: number
  ) => {
    map.fitBounds(bounds, margin);
  };

  const morph = (
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    zoom?: number,
    transitionOptions?: naver.maps.TransitionOptions
  ) => {
    if (!zoom) return map.morph(coord);
    transitionOptions
      ? map.morph(coord, zoom, transitionOptions)
      : map.morph(coord, zoom);
  };

  const panTo = (
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    transitionOptions: naver.maps.TransitionOptions
  ) => {
    map.panTo(coord, transitionOptions);
  };

  const panToBounds = (
    bounds: naver.maps.Bounds | naver.maps.BoundsLiteral,
    transitionOptions: naver.maps.TransitionOptions,
    margin: naver.maps.Margin
  ) => {
    map.panToBounds(bounds, transitionOptions, margin);
  };

  const panBy = (x: number, y: number) => {
    map.panBy(new window.naver.maps.Point(x, y));
  };

  const refresh = (noEffect: boolean = false) => {
    map.refresh(noEffect);
  };

  const removePane = (name: string) => {
    map.removePane(name);
  };

  const updateBy = (
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    zoom: number
  ) => {
    map.updateBy(coord, zoom);
  };

  const zoomBy = (
    deltaZoom: number,
    zoomOrigin:
      | naver.maps.Coord
      | naver.maps.CoordLiteral
      | undefined = undefined,
    effect: boolean = false
  ) => {
    if (zoomOrigin) map.zoomBy(deltaZoom, zoomOrigin, effect);
    else map.zoomBy(deltaZoom);
  };

  return {
    setLayerTypeId,
    addPane,
    fitBounds,
    morph,
    panTo,
    destroy,
    panToBounds,
    panBy,
    refresh,
    removePane,
    updateBy,
    zoomBy,
  };
}

/**
 * naver.maps.Map Getter Methods
 */
function _useMapGetterMethods(map: naver.maps.Map): useMapGetterMethods {
  const getBounds = (): naver.maps.Bounds => {
    return map.getBounds();
  };

  const getCenter = (): naver.maps.Coord => {
    return map.getCenterPoint();
  };

  const getCenterPoint = (): naver.maps.Coord => {
    return map.getCenterPoint();
  };

  const getElement = (): HTMLElement => {
    return map.getElement();
  };

  const getMapTypeId = (): string => {
    return map.getMapTypeId();
  };

  const getOptions = (key: string | undefined = undefined): any => {
    return key ? map.getOptions(key) : map.getOptions();
  };

  const getPanes = (): naver.maps.MapPanes => {
    return map.getPanes();
  };

  const getPrimitiveProjection = (): naver.maps.Projection => {
    return map.getPrimitiveProjection();
  };

  const getProjection = (): naver.maps.MapSystemProjection => {
    return map.getProjection();
  };

  const getSize = (): naver.maps.Size => {
    return map.getSize();
  };

  const getZoom = (): number => {
    return map.getZoom();
  };

  return {
    getBounds,
    getCenter,
    getCenterPoint,
    getElement,
    getMapTypeId,
    getOptions,
    getPanes,
    getPrimitiveProjection,
    getProjection,
    getSize,
    getZoom,
  };
}

/**
 * naver.maps.Map Setter Methods
 */
function _useMapSetterMethods(map: naver.maps.Map): useMapSetterMethods {
  const setCenter = (
    latOrLatLng: naver.maps.LatLng | naver.maps.LatLngLiteral | number,
    lng: number = 0
  ) => {
    const center = isNaN(latOrLatLng as number)
      ? latOrLatLng
      : new window.naver.maps.LatLng(latOrLatLng as number, lng);

    map.setCenter(center as naver.maps.LatLng | naver.maps.LatLngLiteral);
  };

  const setCenterPoint = (
    point: naver.maps.Point | naver.maps.PointLiteral
  ) => {
    map.setCenterPoint(point);
  };

  const setMapTypeId = (
    type: "NORMAL" | "TERRAIN" | "SATELLITE" | "HYBRID"
  ) => {
    const mapTypeId = naver.maps.MapTypeId[type];
    map.setMapTypeId(mapTypeId);
  };

  const setOptions = (
    optionsOrKey: naver.maps.MapOptions | string,
    value: naver.maps.MapOptions | null = null
  ) => {
    if (map) {
      if (value) map.setOptions(optionsOrKey, value);
      else map.setOptions(optionsOrKey);
    } else throw new Error("setOptions not be available before loaded.");
  };

  const setSize = (size: naver.maps.Size | naver.maps.SizeLiteral) => {
    map.setSize(size);
  };

  const setZoom = (level: number, useEffect: boolean = false) => {
    map.setZoom(level, useEffect);
  };

  return {
    setCenter,
    setCenterPoint,
    setMapTypeId,
    setOptions,
    setSize,
    setZoom,
  };
}

export function useMap(map: naver.maps.Map): useMap {
  return {
    ..._useMapMethods(map),
    ..._useMapGetterMethods(map),
    ..._useMapSetterMethods(map),
  };
}
