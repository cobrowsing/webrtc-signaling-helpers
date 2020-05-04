// TechnicalHeist      - www.technicalheist.com
// MIT License    - https://github.com/technicalheist/webrtc-signaling-helpers/blob/master/LICENSE
// Documentation  - https://github.com/technicalheist/webrtc-signaling-helpers

const fs = require('fs');
var httpServer = require('http');

function serverHandler(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Signaling server works!!.\n\n' + 'For More Visit: TechnicalHeist.com');
    response.end();
}

exports.checkCertficate = (config,isUseHTTPs) => {
    if (isUseHTTPs) {
        httpServer = require('https');
    
        var options = {
            key: null,
            cert: null,
            ca: null
        };
    
        var pfx = false;
    
        if (!fs.existsSync(config.sslKey)) {
            console.log(BASH_COLORS_HELPER.getRedFG(), 'sslKey:\t ' + config.sslKey + ' does not exist.');
        } else {
            pfx = config.sslKey.indexOf('.pfx') !== -1;
            options.key = fs.readFileSync(config.sslKey);
        }
    
        if (!fs.existsSync(config.sslCert)) {
            console.log(BASH_COLORS_HELPER.getRedFG(), 'sslCert:\t ' + config.sslCert + ' does not exist.');
        } else {
            options.cert = fs.readFileSync(config.sslCert);
        }
    
        if (config.sslCabundle) {
            if (!fs.existsSync(config.sslCabundle)) {
                console.log(BASH_COLORS_HELPER.getRedFG(), 'sslCabundle:\t ' + config.sslCabundle + ' does not exist.');
            }
    
            options.ca = fs.readFileSync(config.sslCabundle);
        }
    
        if (pfx === true) {
            options = {
                pfx: sslKey
            };
        }
    
        httpApp = httpServer.createServer(options, serverHandler);
    } else {
        httpApp = httpServer.createServer(serverHandler);
    }

    return httpApp;
}
