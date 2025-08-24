import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverInfoWindow } from "@/index";

describe("NaverInfoWindow component", () => {
  it("renders normally", () => {
    // Given
    render(NaverInfoWindow, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        open: false,
        marker: "",
      },
    });
    // When

    // Then
  });
});
