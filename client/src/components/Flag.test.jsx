// Flag.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Flag from "./Flag";

describe("Flag Component", () => {
  test("renders flag when currentCountry is provided", () => {
    const mockCountry = {
      flag: "https://example.com/flag.png",
      country: "Example Country",
    };

    render(<Flag currentCountry={mockCountry} />);

    const flagImage = screen.getByAltText(/flag of Example Country/i);
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute("src", mockCountry.flag);
  });

  test("does not render flag when currentCountry is not provided", () => {
    render(<Flag currentCountry={null} />);

    const flagImage = screen.queryByAltText(/flag of/i);
    expect(flagImage).not.toBeInTheDocument();
  });
});
