import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverPolygon } from "@/index";

describe("NaverPolygon component", () => {
  it("renders normally", () => {
    // Given
    render(NaverPolygon, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        paths: [],
      },
    });
    // When

    // Then
  });
});
