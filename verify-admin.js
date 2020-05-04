// TechnicalHeist      - www.technicalheist.com
// MIT License    - https://github.com/technicalheist/webrtc-signaling-helpers/blob/master/LICENSE
// Documentation  - https://github.com/technicalheist/webrtc-signaling-helpers

// /admin/ page
module.exports = exports = function(params, config) {
    if(!params || !params.adminUserName || !params.adminPassword) return false;
    return params.adminUserName === config.adminUserName && params.adminPassword === config.adminPassword;
};
