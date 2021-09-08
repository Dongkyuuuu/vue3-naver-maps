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
    margin?: number
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
    margin?: naver.maps.Margin
  ): void;

  panBy(x: number, y: number): void;

  refresh(noEffect?: boolean): void;

  removePane(name: string): void;

  updateBy(
    coord: naver.maps.Coord | naver.maps.CoordLiteral,
    zoom: number
  ): void;

  zoomBy(
    deltaZoom: number,
    zoomOrigin?: naver.maps.Coord | naver.maps.CoordLiteral,
    effect?: boolean
  ): void;
}

export interface useMapGetterMethods {
  getBounds(): naver.maps.Bounds;

  getCenter(): naver.maps.Coord;

  getCenterPoint(): naver.maps.Coord;

  getElement(): HTMLElement;

  getMapTypeId(): string;

  getOptions(key?: string): any;

  getPanes(): naver.maps.MapPanes;

  getPrimitiveProjection(): naver.maps.Projection;

  getProjection(): naver.maps.MapSystemProjection;

  getSize(): naver.maps.Size;

  getZoom(): number;
}

export interface useMapSetterMethods {
  setCenter(
    latOrLatLng: naver.maps.LatLng | naver.maps.LatLngLiteral | number,
    lng: number | undefined
  ): void;

  setCenterPoint(point: naver.maps.Point | naver.maps.PointLiteral): void;

  setMapTypeId(type: "NORMAL" | "TERRAIN" | "SATELLITE" | "HYBRID"): void;

  setOptions(
    optionsOrKey: naver.maps.MapOptions | string,
    value?: naver.maps.MapOptions | null
  ): void;

  setSize(size: naver.maps.Size | naver.maps.SizeLiteral): void;

  setZoom(level: number, useEffect?: boolean): void;
}

export interface useMap
  extends useMapMethods,
    useMapGetterMethods,
    useMapSetterMethods {}
