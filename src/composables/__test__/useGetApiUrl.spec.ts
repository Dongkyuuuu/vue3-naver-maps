import { describe, it, expect } from "vitest";
import { ERROR_SUBMODULE_TYPES } from "@/constants/errors";
import { useGetApiUrl } from "../useGetApiUrl";

import type { Options } from "@/types";

describe("useGetApiUrl() must return naverMap openApi url", () => {
  it("SubModules type is not string", () => {
    // Given
    const options = { subModules: "panorama,geocoder" } as any;

    // When

    // Then
    expect(() => useGetApiUrl(options)).toThrow(ERROR_SUBMODULE_TYPES);
  });

  it("SubModule type is array", () => {
    // Given
    const options = { subModules: ["panorama", "geocoder"] } as any;

    // When
    const execResult = useGetApiUrl(options);

    // Then
    expect(execResult).toBeTruthy();
  });

  it("Get naver url", () => {
    // Given
    const expectResult =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=test&subModules=drawing%2Cgeocoder";
    const options: Options = {
      clientId: "test",
      category: "ncp",
      subModules: ["drawing", "geocoder"],
    };

    // When
    const execResult = useGetApiUrl(options);

    // Then
    expect(execResult).toBe(expectResult);
  });
});
