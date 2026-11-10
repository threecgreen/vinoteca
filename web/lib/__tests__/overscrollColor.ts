import { installOverscrollColor } from "../overscrollColor";

const scrollTo = (scrollY: number) => {
    Object.defineProperty(window, "scrollY", { value: scrollY, configurable: true });
    window.dispatchEvent(new Event("scroll"));
};

beforeEach(() => {
    Object.defineProperty(window, "innerHeight", { value: 800, configurable: true });
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 2000, configurable: true });
});

test("Root takes the footer color once scrolled into the bottom half", () => {
    const uninstall = installOverscrollColor();
    const root = document.documentElement;
    expect(root.classList.contains("overscroll-footer")).toBe(false);

    scrollTo(1000);
    expect(root.classList.contains("overscroll-footer")).toBe(true);

    scrollTo(100);
    expect(root.classList.contains("overscroll-footer")).toBe(false);
    uninstall();
});
