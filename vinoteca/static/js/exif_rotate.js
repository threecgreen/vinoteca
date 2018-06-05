/* Modified from runeb's GitHub gist
 * https://gist.github.com/runeb/c11f864cd7ead969a5f0 */

const rotation = {
    1: 'rotate(0deg)',
    3: 'rotate(180deg)',
    6: 'rotate(90deg)',
    8: 'rotate(270deg)'
};

function _arrayBufferToBase64( buffer ) {
    let binary = '';
    let bytes = new Uint8Array( buffer );
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] )
    }
    return window.btoa( binary );
}

const orientation = function(file, callback) {
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
        let base64img = "data:"+file.type+";base64," + _arrayBufferToBase64(fileReader.result);
        let scanner = new DataView(fileReader.result);
        let idx = 0;
        let value = 1; // Non-rotated is the default
        if(fileReader.result.length < 2 || scanner.getUint16(idx) !== 0xFFD8) {
            // Not a JPEG
            if(callback) {
                callback(base64img, value);
            }
            return;
        }
        idx += 2;
        let maxBytes = scanner.byteLength;
        while(idx < maxBytes - 2) {
            let uint16 = scanner.getUint16(idx);
            idx += 2;
            switch(uint16) {
                case 0xFFE1: // Start of EXIF
                    let exifLength = scanner.getUint16(idx);
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
        if(callback) {
            callback(base64img, value);
        }
    };
    fileReader.readAsArrayBuffer(file);
};

$(function () {
    const wine_img = $("#wine-image");
    if (wine_img) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", wine_img[0].src);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            orientation(this.response, function (base64img, value) {
                wine_img.css("transform", rotation[value]);
            });
        };
        xhr.send();
    }
});
