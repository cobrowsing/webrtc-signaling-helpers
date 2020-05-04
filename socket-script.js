// TechnicalHeist      - www.technicalheist.com
// MIT License    - https://github.com/technicalheist/webrtc-signaling-helpers/blob/master/LICENSE
// Documentation  - https://github.com/technicalheist/webrtc-signaling-helpers

const ioServer = require('socket.io');
exports.socket = (config, httpApp) => {
    ioServer(httpApp).on('connection', function(socket) {
        signalingServer.addSocket(socket, config);
    
        // ----------------------
        // below code is optional
    
        const params = socket.handshake.query;
    
        if (!params.socketCustomEvent) {
            params.socketCustomEvent = 'custom-message';
        }
    
        socket.on(params.socketCustomEvent, function(message) {
            socket.broadcast.emit(params.socketCustomEvent, message);
        });
    });
}