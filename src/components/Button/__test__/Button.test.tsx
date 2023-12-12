import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("Button should render with correct textValue", () => {
    const expected = "DeadPool";
    render(<Button text={"DeadPool"} testid={"button1"} />);
    const result = screen.getByRole("button").textContent;
    expect(result).toEqual(expected);
  });
});
