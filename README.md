TutorABC Camera Mirror – User Guide

This userscript fixes the mirrored camera view on TutorABC (TutorMeet) so your own video preview appears the correct way around while teaching.

✅ Students already see you normally — this script only affects your preview by removing the website’s mirror effect.

🎯 What This Script Does

TutorABC applies a CSS class called .mirror to your camera preview, which flips your video horizontally.

This script automatically:

Finds any elements with the .mirror class

Removes the .mirror class on page load

Uses a MutationObserver to remove it again if the website re-adds it

This ensures your preview stays un-mirrored even if TutorABC reloads parts of the interface.

⚙️ Requirements

You will need a userscript manager such as Tampermonkey.

Chrome — Install Tampermonkey from the Chrome Web Store

Edge / Brave / Opera — Same process

Firefox — Use the Tampermonkey Firefox Add-on

🛠️ Installation
1. Install Tampermonkey

If you haven’t already:

Open your browser’s extension store

Search for Tampermonkey

Click Add to browser

Enable the extension

2. Add the Script

You can install the script manually:

Click the Tampermonkey icon in your browser toolbar

Select Dashboard

Click ➕ Create a new script…

Delete the default template

Paste the script from the link below

Save the script (Ctrl+S / Cmd+S)

Ensure the script toggle is ON (green) in Tampermonkey

➡️ Script Link

[Script Link](https://github.com/SuperBoombastic/Tutor-ABC-Tamper-Monkey-CSS-Camera-Mirror-Script/blob/main/Tutor%20ABC%20Camera%20Mirrorscript.js)

▶️ Usage

Visit the TutorABC classroom:
https://www5.tutormeet.com/

Join a class or open any room showing your camera preview

The script will automatically:

Run once on page load

Continue monitoring for layout changes

Your camera preview (visible only to you) will now appear un-mirrored.

🔧 Troubleshooting

Refresh the page (Ctrl+R / Cmd+R)

Check that the script is enabled in Tampermonkey

Make sure you are on the correct domain:
https://www5.tutormeet.com/*
