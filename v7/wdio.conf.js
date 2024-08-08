import path from 'path';
import fs from 'fs';

exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    path: "/wd/hub",
    capabilities: [{
        browserName: 'chrome',
        "selenoid:options": { enableVNC: true },
        acceptInsecureCerts: true,
        "goog:chromeOptions": {
            args: [ "ignore-certificate-errors-spki-list", "--ignore-certificate-errors", "window-size=1920,1080", "--auto-open-devtools-for-tabs" ],
            extensions: [
                fs.readFileSync(path.resolve('./PixiJS-Devtools-Chrome-Web-Store.crx'), 'base64')
            ]
        },
    }],
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 1000 * 60 * 5, // 5 min
    },
}
