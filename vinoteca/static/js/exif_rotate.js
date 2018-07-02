"use strict";
/* Modified from runeb's GitHub gist
 * https://gist.github.com/runeb/c11f864cd7ead969a5f0 */
Object.defineProperty(exports, "__esModule", { value: true });
var rotation = {
    1: 'rotate(0deg)',
    3: 'rotate(180deg)',
    6: 'rotate(90deg)',
    8: 'rotate(270deg)'
};
function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}
function orientation(file, callback) {
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
        var base64img = "data:" + file.type + ";base64," + _arrayBufferToBase64(fileReader.result);
        var scanner = new DataView(fileReader.result);
        var idx = 0;
        var value = 1; // Non-rotated is the default
        if (fileReader.result.length < 2 || scanner.getUint16(idx) !== 0xFFD8) {
            // Not a JPEG
            if (callback) {
                callback(base64img, value);
            }
            return;
        }
        idx += 2;
        var maxBytes = scanner.byteLength;
        while (idx < maxBytes - 2) {
            var uint16 = scanner.getUint16(idx);
            idx += 2;
            switch (uint16) {
                case 0xFFE1: // Start of EXIF
                    var exifLength = scanner.getUint16(idx);
                    maxBytes = exifLength - idx;
                    idx += 2;
                    break;
                case 0x0112: // Orientation tag
                    // Read the value, its 6 bytes further out
                    // See page 102 at the following URL
                    // http://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf
                    value = scanner.getUint16(idx + 6, false);
                    maxBytes = 0; // Stop scanning
                    break;
            }
        }
        if (callback) {
            callback(base64img, value);
        }
    };
    fileReader.readAsArrayBuffer(file);
}
exports.orientation = orientation;
;
$(function () {
    var wine_img = $("#wine-image");
    if (wine_img) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", wine_img[0].src);
        xhr.responseType = "blob";
        xhr.onload = function () {
            orientation(this.response, function (base64img, value) {
                wine_img.css("transform", rotation[value]);
            });
        };
        xhr.send();
    }
});
//# sourceMappingURL=exif_rotate.js.map