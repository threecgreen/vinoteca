const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

/**
 * Create or update a cookie
 * @param name name/key of the cookie
 * @param value value to store
 * @param days number of days the cookie is valid, defaults to the current session
 */
export function createCookie(name: string, value: string, days?: number) {
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * MILLISECONDS_IN_DAY));
		var expires = "; expires=" + date.toUTCString();
	} else {
        var expires = "";
    }
	document.cookie = name + "=" + value + expires + "; path=/";
}

export function readCookie(name: string): string {
    const nameEQ = name + "=";
    for (let c of document.cookie.split(";")) {
        while (c.charAt(0) == " ") {
            c = c.substr(1);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substr(nameEQ.length);
        }
    }
	return "";
}

export function deleteCookie(name: string) {
	createCookie(name, "", -1);
}
