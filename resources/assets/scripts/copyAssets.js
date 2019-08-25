const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const baseAssetPath = {
    src: path.resolve('resources/assets'),
    target: path.resolve('public/assets')
};

const emojiPath = {
    src: baseAssetPath.src + '/emojis',
    target: baseAssetPath.target + '/emojis'
}
;

mkdirp.sync(emojiPath.target);

const emojis = fs.readdirSync(emojiPath.src);

emojis.forEach((e) => {
    fs.copyFile(`${emojiPath.src}/${e}`, `${emojiPath.target}/${e}`, (e) => {
        if (e) {
            console.error(e);
        }
    });
});

const logosPath = {
    src: baseAssetPath.src + '/logos',
    target: baseAssetPath.target + '/logos'
};

mkdirp.sync(logosPath.target);

const logos = fs.readdirSync(logosPath.src);

logos.forEach((e) => {
    fs.copyFile(`${logosPath.src}/${e}`, `${logosPath.target}/${e}`, (e) => {
        if (e) {
            console.error(e);
        }
    });
});
