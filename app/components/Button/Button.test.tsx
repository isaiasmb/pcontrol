import React from "react";

import { render, screen } from "@testing-library/react";
import { Plus } from "iconoir-react";

import Button from ".";

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button icon={Plus} onClick={jest.fn()} label="ButtonLabel" />);

    expect(
      screen.getByRole("button", { name: /ButtonLabel/i })
    ).toBeInTheDocument();
  });
});
