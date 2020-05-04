// TechnicalHeist      - www.technicalheist.com
// MIT License    - https://github.com/technicalheist/webrtc-signaling-helpers/blob/master/LICENSE
// Documentation  - https://github.com/technicalheist/webrtc-signaling-helpers

function resolveURL(url) {
    var isWin = !!process.platform.match(/^win/);
    if (!isWin) return url;
    return url.replace(/\//g, '\\');
}

module.exports = exports = resolveURL;
