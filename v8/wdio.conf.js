import path from 'path';
import fs from 'fs';
export const config = {
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        browserName: 'chrome',
        browserVersion: "stable",
        "goog:chromeOptions": {
            args: [ "ignore-certificate-errors-spki-list", "--ignore-certificate-errors", "window-size=1920,1080", "--auto-open-devtools-for-tabs" ],
            extensions: [
                fs.readFileSync(path.resolve('./PixiJS-Devtools-Chrome-Web-Store.crx'), 'base64')
            ]
        },
        "goog:loggingPrefs": {
            browser: "INFO",
        },
    }],
    services: [['devtools']],
}
