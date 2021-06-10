<template>
  <div id="vue-naver-maps" style="width: 1000px; height: 1000px"></div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  onUnmounted,
  reactive,
  watch,
  PropType,
} from "vue";

/*

  naver.maps.Map Methods

*/
function mapMethods(map: naver.maps.Map) {
  const setLayerTypeId = (typeId: string) => {
    map.mapTypes.setLayerTypeId(typeId);
  };

  const addPane = (name: string, elementOrZIndex: HTMLElement | number) => {
    map.addPane(name, elementOrZIndex);
  };

  const destroy = () => {
    map.destroy();
    window.$naverMapsLoaded = false;
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
/*

  naver.maps.Map Getter Methods

*/
function mapGetterMethods(map: naver.maps.Map) {
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

/*

  naver.maps.Map Setter Methods

*/
function mapSetterMethods(map: naver.maps.Map) {
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

function mapSettings(
  mapOptions: v3Map.mapOptions,
  initLayers: v3Map.initLayers
) {
  const settings: naver.maps.MapOptions = {
    maxZoom: 21,
    minZoom: 0,
  };
  const mapOptionsLat = mapOptions.lat || mapOptions.lat === 0 ? true : false;
  const mapOptionsLng = mapOptions.lng || mapOptions.lng === 0 ? true : false;

  if (!mapOptionsLat || !mapOptionsLng) {
    settings.center = new window.naver.maps.LatLng(
      mapOptions.lat as number,
      mapOptions.lng as number
    );
  }

  if (initLayers.length === 0) return settings;
  else return mapLayers(settings, initLayers);
}

function mapLayers(
  settings: naver.maps.MapOptions,
  initLayers: v3Map.initLayers
) {
  const layers: v3Map.layers = {
    BACKGROUND: "bg",
    BACKGROUND_DETAIL: "ol",
    BICYCLE: "br",
    CADASTRAL: "lp",
    CTT: "ctt",
    HIKING_TRAIL: "ar",
    PANORAMA: "pr",
    POI_KOREAN: "lko",
    TRANSIT: "ts",
    KOREAN: "lko",
    ENGLISH: "len",
    CHINESE: "lzh",
    JAPANESE: "lja",
  };

  settings.mapTypes = new window.naver.maps.MapTypeRegistry({
    /* @ts-ignore */
    noraml: window.naver.maps.NaverStyleMapTypeOption.getNormalMap({
      overlayType: initLayers.map((layer) => layers[layer]).join("."),
    }),
  });

  return settings;
}

export default defineComponent({
  name: "Map",
  props: {
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 },
    mapOptions: { type: Object as PropType<v3Map.mapOptions>, required: true },
    initLayers: {
      type: Array as PropType<v3Map.initLayers>,
      default: [],
    },
  },
  setup: (props, { emit }) => {
    const mapOptions = reactive<v3Map.mapOptions>(props.mapOptions);
    const initLayers = ref<v3Map.initLayers>(props.initLayers);

    // const { mapOptions, initLayers } = toRefs(props);
    // window.naver.maps.onJSContentLoaded = () => {};
    // const { width, height, mapOptions, initLayers } = toRefs(props);
    // const mapStyle = reactive({
    //   width: width.value + "px",
    //   height: height.value + "px",
    // });

    // watch(
    //   mapOptions.value,
    //   (newVal) => {
    //     map.setOptions(newVal);
    //   },
    //   { deep: true }
    // );
    // watch(
    //   initLayers.value,
    //   (newVal) => {
    //     // const settings = _.mapLayers({}, newValue);
    //     // this.setOptions("mapTypes", settings.mapTypes);
    //   },
    //   { deep: true }
    // );

    return {
      // mapStyle,
      // map,
    };
  },
});
</script>
