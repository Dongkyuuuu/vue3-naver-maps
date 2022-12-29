import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverRectangle } from "@/index";

describe("NaverRectangle component", () => {
  it("renders normally", () => {
    // Given
    render(NaverRectangle, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        bounds: "",
      },
    });
    // When

    // Then
  });
});
