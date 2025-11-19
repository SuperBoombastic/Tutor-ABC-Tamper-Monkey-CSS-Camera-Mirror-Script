TutorABC Camera Mirror – User Guide

This user script fixes the mirrored camera view on TutorABC (TutorMeet) so your video looks the correct way round for you while teaching.

✅ Students already see you normally — this script only fixes your own preview by removing the website’s mirror effect.

🎯 What This Script Does

TutorABC applies a CSS class called .mirror to your camera preview, which flips your video horizontally.
This script automatically:

Finds any elements with the .mirror class

Removes the .mirror class on page load

Uses a MutationObserver to keep removing it if the site re-adds it

Even if TutorABC reloads parts of the interface, your camera stays un-mirrored.

⚙️ Requirements

You will need a userscript manager, such as Tampermonkey.

Chrome: Search for Tampermonkey in the Chrome Web Store

Edge/Brave/Opera: Same process

Firefox: Use the Tampermonkey Firefox extension

🛠️ Installation
1. Install Tampermonkey

If you haven’t yet:

Open your browser’s extension store

Search for “Tampermonkey”

Click Add to browser

Enable the extension

2. Add the Script

You can install the script manually:

Click the Tampermonkey icon in your browser toolbar

Select Dashboard

Click ➕ Create a new script…

Delete the default template

Paste the entire script below:

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


Click File → Save (or press Ctrl+S / Cmd+S)

Make sure the script toggle is ON (green) in Tampermonkey

▶️ Usage

Go to your usual TutorABC classroom URL:
https://www5.tutormeet.com/...

Join a class or open a room where your camera preview appears

The script will automatically:

Run once on page load

Continue monitoring for layout changes

Your camera preview (for you only) should now be un-mirrored.

🔧 Troubleshooting

If nothing changes, refresh the page (Ctrl+R / Cmd+R)

Ensure the script is enabled in Tampermonkey

Ensure you are on the correct domain:
https://www5.tutormeet.com/*
