import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverMarker } from "@/index";

describe("NaverMarker component", () => {
  it("renders normally", () => {
    // Given
    render(NaverMarker, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        latitude: 12323,
        longitude: 123123,
      },
    });
    // When

    // Then
  });
});
