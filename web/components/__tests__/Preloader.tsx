import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { CircleSize, Preloader, PreloaderCirc, SpinnerColor } from "../Preloader";

test("Linear preloader renders a visible bar", () => {
    render(<Preloader />);
    const track = screen.getByRole("progressbar", { name: "Loading" });
    expect(track).toHaveClass("h-1", "w-full");
    expect(track.firstElementChild).toHaveClass("bg-wine-green", "animate-indeterminate");
});

test.each([
    [undefined, "w-[50px]", "h-[50px]"],
    [CircleSize.Tiny, "w-6", "h-6"],
    [CircleSize.Small, "w-9", "h-9"],
    [CircleSize.Medium, "w-[50px]", "h-[50px]"],
    [CircleSize.Large, "w-16", "h-16"],
])("Circular preloader with size %s has explicit dimensions", (size, width, height) => {
    render(<PreloaderCirc size={ size } />);
    const spinner = screen.getByRole("status", { name: "Loading" });
    expect(spinner).toHaveClass(width, height, "border-[3px]", "animate-spin");
});

test.each([
    [undefined, "border-wine-green"],
    [SpinnerColor.WineGreen, "border-wine-green"],
    [SpinnerColor.WineRed, "border-wine-red"],
    [SpinnerColor.GoldenYellow, "border-golden-yellow"],
])("Circular preloader with color %s has a border color", (color, colorClass) => {
    render(<PreloaderCirc color={ color } className="confirm" />);
    expect(screen.getByRole("status")).toHaveClass(colorClass, "confirm");
});
