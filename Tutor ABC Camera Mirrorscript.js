// ==UserScript==
// @name         Tutor ABC Camera Mirror
// @namespace    http://tampermonkey.net/
// @version      2025-11-19
// @description  This script will reverse the mirror effect on the Tutor ABC Camera
// @author       You
// @match        https://www5.tutormeet.com/*
// @match        https://consultant.tutorabcglobal.com.hk/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeMirror() {
        const elements = document.querySelectorAll('.mirror');
        elements.forEach(el => el.classList.remove('mirror'));
    }

    // Run once on page load
    removeMirror();

    // Keep removing it in case the website adds it back
    const obs = new MutationObserver(() => {
        removeMirror();
    });

    obs.observe(document.body, { childList: true, subtree: true, attributes: true });
})(); 
