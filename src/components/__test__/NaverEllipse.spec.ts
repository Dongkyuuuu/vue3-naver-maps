import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverEllipse } from "@/index";

describe("NaverEllipse component", () => {
  it("renders normally", () => {
    // Given
    render(NaverEllipse, {
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
