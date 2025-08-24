import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverGroundOverlay } from "@/index";

describe("NaverGroundOverlay component", () => {
  it("renders normally", () => {
    // Given
    render(NaverGroundOverlay, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        bounds: "",
        url: "",
      },
    });
    // When

    // Then
  });
});
