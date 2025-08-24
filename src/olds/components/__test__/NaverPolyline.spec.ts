import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverPolyline } from "@/index";

describe("NaverPolyline component", () => {
  it("renders normally", () => {
    // Given
    render(NaverPolyline, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        path: [],
      },
    });
    // When

    // Then
  });
});
