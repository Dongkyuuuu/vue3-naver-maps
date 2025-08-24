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

  it("구버전 서비스 사용하는 URL", () => {
    // Given
    const expectResult =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=test&submodules=drawing%2Cgeocoder";
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

  it("신버전 서비스 사용하는 URL", () => {
    // Given
    const expectResult =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=test&submodules=drawing%2Cgeocoder";
    const options: Options = {
      clientId: "test",
      category: "ncp",
      subModules: ["drawing", "geocoder"],
      enableAiMaps: false,
    };

    // When
    const execResult = useGetApiUrl(options);

    // Then
    expect(execResult).toBe(expectResult);
  });
});
