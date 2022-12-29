import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { createNaverMap, NaverCircle } from "@/index";

describe("NaverCircle component", () => {
  it("renders normally", () => {
    // Given
    render(NaverCircle, {
      global: {
        plugins: [[createNaverMap, { clientId: "2323" }]],
      },
      props: {
        latitude: 123123,
        longitude: 123213,
      },
    });
    // When

    // Then
  });
});
