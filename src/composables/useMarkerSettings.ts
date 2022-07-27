export interface HtmlIcon {
  size?: naver.maps.Size | naver.maps.SizeLiteral;
  anchor?: naver.maps.Point | naver.maps.PointLiteral | naver.maps.Position;
}

export const getIcon = (
  icon?: string | HTMLElement,
  iconOptions?: HtmlIcon
) => {
  if (!icon) return undefined; // default marker icon
  return Object.assign({ content: icon }, iconOptions ?? {});
};
