import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverMap } from "@/index";

describe("NaverMap component", () => {
  it("renders normally", () => {
    // Given
    render(NaverMap, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
    });
    // When

    // Then
  });
});
