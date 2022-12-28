import Qs from "query-string";
import { ERROR_SUBMODULE_TYPES } from "@/constants/errors";

import type { Options } from "@/types";

/** Create navermaps openAPI url */
export const useGetApiUrl = (options: Options) => {
  if (options.subModules && !Array.isArray(options.subModules))
    throw new Error(ERROR_SUBMODULE_TYPES);

  const query = Qs.stringify({
    [`${options.category ?? "ncp"}ClientId`]: options.clientId,
    subModules: options.subModules?.join() ?? "",
  });

  return `https://openapi.map.naver.com/openapi/v3/maps.js?${query}`;
};
