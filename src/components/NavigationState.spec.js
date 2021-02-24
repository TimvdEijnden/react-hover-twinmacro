import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavigationState } from "./NavigationState";
import "@testing-library/jest-dom/extend-expect";

const renderComponent = () => render(<NavigationState />);

describe("NavigationState", () => {
  it("should render all menu items", () => {
    renderComponent();

    expect(screen.getByText("Hover me")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "First", hidden: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Second", hidden: true })
    ).toBeInTheDocument();
  });

  it("should not show the buttons", () => {
    renderComponent();

    expect(screen.getByText("Hover me")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "First", hidden: true })
    ).not.toBeVisible();
    expect(
      screen.getByRole("button", { name: "Second", hidden: true })
    ).not.toBeVisible();
  });

  it("should show the buttons", () => {
    renderComponent();

    fireEvent.mouseEnter(screen.getByText("Hover me"));

    expect(
      screen.getByRole("button", { name: "First"})
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: "Second"})
    ).toBeVisible();

    fireEvent.mouseLeave(screen.getByText("Hover me"));
  });
});
