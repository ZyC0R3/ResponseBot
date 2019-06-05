# ResponseBot
Helpbot, an Automated and (not so) Intuitive response Bot for AppBoxCo

## Installation

In your hubot project repo, run:

``` bash
npm install responsebot --save
```

Then add **responsebot** to your `external-scripts.json`:

``` json
[
  "responsebot"
]
```

## Usage

```
KB = Knowledgebase Articles (Add users name to end of command to tag them in response)
App or App User = app "appname" "Target User"
APPCAT = appcat "category"
TS = Troubleshooting Basics
CL = Change Log for Updated Apps
[Botname] Reload = Reload script without having to restart Hubot
```

## Authors

```
ZyC0R3
Rid
```

# Change Log's

## Responsebot.js
```
V1.0.00 Internal test Version
V2.0.00 Launch version - beta tests
V2.1.00 Added further chat triggers
V2.2.00 Alias updates for apps and triggers
V3.0.00 Change log & simple troubleshooting command added, added further chat triggers, remove the case sensitivity requirements from all commands
V3.1.00 Added hello and good morning responses, alias updates for apps and triggers
V3.2.00 Regex update for apps and triggers, bug fixed for false positives, spelling corrected, co author added
V3.3.00 Change log added, regex test site links commented in code to allow for more efficient changes, added personalised responses to chat triggers
V3.3.03 First test push to RocketChat Bot
v3.3.04 Update to Script Files
V4.0.00 Cas we wanted a new number
V4.0.01 Bug fixes
V4.0.04 New Chat triggers added
V4.1.00 Users can now be Tagged in commands for ResponseBot to target them for the reply
V4.1.01 New Chat triggers added
V4.1.02 Change log Updated, New apps added, SSH/SFTP responses disabled until updated
V4.1.04 Code Fixes
V5.0.00 Code Overhaul & Fixes
V5.0.01 Code Fixes
V5.0.02 NPM Update and Code Changes
V5.0.03 NPM Update and Code Changes
V5.0.04 Phased out CoffeeScript File and added a JS File.
V5.0.05 Test push
V5.1.00 npm Update Patch and Minor Version.
V6.0.00 Integrated  Reload script. (https://www.npmjs.com/package/hubot-reload)
V6.0.01 Version control on updates for apps and chat triggers added for new apps.
V6.0.02 Updated chat triggers
V6.0.03 Updated chat triggers
V6.0.04 Code Fixes
V6.0.05 Google Links has been depreciated so the links have been replaced with Bit.ly Links.
V6.0.06 New Chat triggers added
V6.0.07 New Chat triggers added
```
## TestScripts.js
```
V1.0.00 Initial Testing and Troubleshooting
V1.0.04 Alpha Testing
V1.0.05 Beta Testing
V1.0.06.000+ These are Code Change Test, No Further Change Logs will be recorded for Internal Testing. Referred to as ICT in Future Records
```
## Reload.js
```
This script is not owned or maintained by the creator of ResponseBot, For further information please see :https://www.npmjs.com/package/hubot-reload
V1.0.00 Initial Testing and Troubleshooting
V1.0.01 Public Release
V1.0.02 Patch Fix for NPM
```
## Responsebot.coffee.old
```
V5.0.04 Phased out CoffeeScript File and added a JS File.
V6.0.05 Updated code to Match JS version, CoffeeScript Version is no longer used however this is maintained for reverse compatibility with older versions of HuBot (https://hubot.github.com/)
```
