// ==UserScript==
// @name         chess.com custom sounds
// @version      1.0
// @author       zesi
// @description  replaces chess.com sounds with custom ones
// @match        https://www.chess.com/*
// @downloadURL  https://github.com/zesizesizesi/chess.com-custom-sounds/raw/main/chess-custom-sounds.user.js
// @updateURL    https://github.com/zesizesizesi/chess.com-custom-sounds/raw/main/chess-custom-sounds.user.js
// ==/UserScript==

(function() {
    'use strict';

    // URL for custom sounds
    const BASE_URL = 'https://zesizesizesi.github.io/chess.com-custom-sounds/sounds';

    // maps the chess.com sounds to custom sounds
    const SOUND_MAP = {
        'move-self.webm': 'move-self.mp3',
        'move-check.webm': 'move-check.mp3',
        'move-opponent.webm': 'move-opponent.mp3',
        'capture.webm': 'capture.mp3',
        'castle.webm': 'castle.mp3',
        'promote.webm': 'promote.mp3',
        'notify.webm': 'notify.mp3',
        'tenseconds.webm': 'tenseconds.mp3',
        'illegal.webm': 'illegal.mp3',
        'premove.webm': 'premove.mp3',
        'game-start.webm': 'game-start.mp3',
        'game-end.webm': 'game-end.mp3'
    };

    // get the custom sound URL
    function getReplacementUrl(originalUrl) {
        const matchedSound = Object.entries(SOUND_MAP).find(([original]) => originalUrl.includes(original));
        if (matchedSound) {
            return `${BASE_URL}/${matchedSound[1]}`;
        }
        return originalUrl;
    }

    // intercept fetch to replace sounds URLs
    function interceptFetch() {
        const originalFetch = window.fetch;
        window.fetch = async function(url, options) {
            if (typeof url === 'string' && Object.keys(SOUND_MAP).some(sound => url.includes(sound))) {
                return originalFetch.call(this, getReplacementUrl(url), options);
            }
            return originalFetch.call(this, url, options);
        };
    }

    // intercept XMLHttpRequest to replace sounds URLs
    function interceptXHR() {
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url, ...rest) {
            if (typeof url === 'string' && Object.keys(SOUND_MAP).some(sound => url.includes(sound))) {
                url = getReplacementUrl(url);
            }
            return originalOpen.call(this, method, url, ...rest);
        };
    }

    interceptFetch();
    interceptXHR();
})();