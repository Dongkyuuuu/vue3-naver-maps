<template>
  <div id="vue-naver-maps" :style="mapStyle">
    <slot> </slot>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  onMounted,
  onUnmounted,
  reactive,
  watch,
} from "vue";

export default defineComponent({
  name: "Map",
  props: {
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 },
    mapOptions: {
      type: Object,
      required: true,
    },
    initLayers: { type: Array, default: [] },
  },
  setup: (props, context) => {
    let map = reactive<naver.maps.Map>(new naver.maps.Map(""));
    const { width, height, mapOptions, initLayers } = toRefs(props);
    const mapStyle = reactive({
      width: width.value,
      height: height.value,
    });

    watch(
      mapOptions.value,
      (newVal) => {
        map.setOptions(newVal);
      },
      { deep: true }
    );
    watch(
      initLayers.value,
      (newVal) => {
        // const settings = _.mapLayers({}, newValue);
        // this.setOptions("mapTypes", settings.mapTypes);
      },
      { deep: true }
    );

    const setLayerTypeId = (typeId: string): void => {
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
    /* 
      Getter Methods
    */
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
    /* 
      Setter Methods
    */
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

    onMounted(() => {});
    onUnmounted(() => {
      window.$naverMapsLoaded = false;
    });

    return {
      mapStyle,
      map,
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
      setCenter,
      setCenterPoint,
      setMapTypeId,
      setOptions,
      setSize,
      setZoom,
    };
  },
});
</script>
