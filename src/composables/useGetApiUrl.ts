import Qs from "query-string";
import { ERROR_SUBMODULE_TYPES } from "@/constants/errors";

import type { Options } from "@/types";

/** Create navermaps openAPI url */
export const useGetApiUrl = ({
  clientId,
  subModules,
  category,
  enableAiMaps = true,
}: Options) => {
  if (subModules && !Array.isArray(subModules))
    throw new Error(ERROR_SUBMODULE_TYPES);

  const clientIdParams = enableAiMaps
    ? `${category ?? "ncp"}ClientId`
    : "ncpKeyId";

  const query = Qs.stringify({
    [clientIdParams]: clientId,
    submodules: subModules?.join() ?? "",
  });

  return `https://oapi.map.naver.com/openapi/v3/maps.js?${query}`;
};
