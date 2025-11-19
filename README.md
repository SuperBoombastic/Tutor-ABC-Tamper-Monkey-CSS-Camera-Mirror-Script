TutorABC Camera Mirror – User Guide

This user script fixes the mirrored camera view on TutorABC (TutorMeet) so your video looks the right way round to you while teaching.

✅ Students already see you normally – this script only fixes your own preview by removing the website’s mirror effect.

What this script does

TutorABC applies a CSS class called .mirror to your camera preview, which flips your video horizontally. This script:

Finds any elements with the .mirror class

Removes the .mirror class on page load

Keeps watching the page (via MutationObserver) and removes it again if the site tries to re-add it

So even if the room reloads parts of the interface or changes layouts, your camera should stay un-mirrored.

Requirements

To use this script, you need:

The Tampermonkey extension (or similar userscript manager) installed:

Chrome: search for “Tampermonkey” in the Chrome Web Store 


Installation
1. Install Tampermonkey

If you haven’t already:

Open your browser’s extension store.

Search for Tampermonkey.

Click Add to browser / Install and enable the extension.

2. Add the script

You have two common options:

Paste the script manually

Click the Tampermonkey icon in your browser toolbar.

Click Dashboard.

Click the ➕ Create a new script… button.

Delete any default content in the editor.

Paste this entire script:

// ==UserScript==
// @name         Tutor ABC Camera Mirror
// @namespace    http://tampermonkey.net/
// @version      2025-11-19
// @description  This script will reverse the mirror effect on the Tutor ABC Camera
// @author       You
// @match        https://www5.tutormeet.com/*
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


Click File → Save (or press Ctrl+S / Cmd+S).

Make sure the script is enabled (toggle is on / green) in the Tampermonkey dashboard.


Go to your normal TutorABC classroom URL:

https://www5.tutormeet.com/...

Join a class / room where your camera preview appears.

The script will:

Run once when the page loads

Keep watching for layout changes

Your camera preview for you should now appear un-mirrored.

If you don’t see any change, try refreshing the page (Ctrl+R / Cmd+R) after confirming the script is enabled.
