import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders Button component with children", () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("passes props to Button component", () => {
  render(<Button disabled={true}>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeDisabled();
});
