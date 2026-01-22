import toast from "react-hot-toast";

/** Simplifies displaying of toast messages to user */
export function showToast(message: string): void {
    toast.error(message, {
        duration: 10000,
        style: {
            background: "rgb(173, 20, 87)",
            color: "#fff",
        },
    });
}

export function setTitle(title: string): void {
    document.title = `${title} | vinoteca`;
}

export function setDescription(desc: string): void {
    document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
}

const BASE_URL = "https://vinote.ca";
export function setCanonical(url: string): void {
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${BASE_URL}${url}`);
}
