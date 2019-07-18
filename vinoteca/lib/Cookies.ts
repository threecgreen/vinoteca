const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

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
    document.cookie.split(";").forEach((c) => {
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substr(nameEQ.length, c.length);
        }
    });
	return "";
}

export function eraseCookie(name: string) {
	createCookie(name, "", -1);
}
