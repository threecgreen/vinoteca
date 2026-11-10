const FOOTER_CLASS = "overscroll-footer";

/**
 * Browsers fill the overscroll area with the root background color, and the header and footer
 * differ, so switch the root to the footer color while the bottom half of the page is in view.
 */
export function installOverscrollColor(): () => void {
    const root = document.documentElement;
    const update = () => {
        const maxScroll = root.scrollHeight - window.innerHeight;
        root.classList.toggle(FOOTER_CLASS, maxScroll > 0 && window.scrollY > maxScroll / 2);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
    };
}
