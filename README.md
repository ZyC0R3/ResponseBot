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

## Usage ResponseBot

```
KB = Knowledgebase Articles (Add users name to end of command to tag them in response)
App or App User = app "appname" "Target User"
APPCAT = appcat "category" (Currently Disabled)
TS = Troubleshooting Basics
```
## Usage Reload

```
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
V1.0.0 Internal test Version
V2.0.0 Launch version - beta tests
V2.1.0 Added further chat triggers
V2.2.0 Alias updates for apps and triggers
V3.0.0 Change log & simple troubleshooting command added, added further chat triggers, remove the case sensitivity requirements from all commands
V3.1.0 Added hello and good morning responses, alias updates for apps and triggers
V3.2.0 Regex update for apps and triggers, bug fixed for false positives, spelling corrected, co author added
V3.3.0 Change log added, regex test site links commented in code to allow for more efficient changes, added personalised responses to chat triggers
V3.3.3 First test push to RocketChat Bot
v3.3.4 Update to Script Files
V4.0.0 Cas we wanted a new number
V4.0.1 Bug fixes
V4.0.4 New Chat triggers added
V4.1.0 Users can now be Tagged in commands for ResponseBot to target them for the reply
V4.1.1 New Chat triggers added
V4.1.2 Change log Updated, New apps added, SSH/SFTP responses disabled until updated
V4.1.4 Code Fixes
V5.0.0 Code Overhaul & Fixes
V5.0.1 Code Fixes
V5.0.2 NPM Update and Code Changes
V5.0.3 NPM Update and Code Changes
V5.0.4 Phased out CoffeeScript File and added a JS File.
V5.0.5 Test push
V5.1.0 npm Update Patch and Minor Version.
V6.0.0 Integrated  Reload script. (https://www.npmjs.com/package/hubot-reload)
V6.0.1 Version control on updates for apps and chat triggers added for new apps.
V6.0.2 Updated chat triggers
V6.0.3 Updated chat triggers
V6.0.4 Code Fixes
V6.0.5 Google Links has been depreciated so the links have been replaced with Bit.ly Links.
V6.0.6 New Chat triggers added
V6.0.7 New Chat triggers added
V7.0.0 Code Relicensing - Project is now under GPL-3.0
V7.0.1 Converted index.coffee to index.js
V7.0.2 Updated all App Command Links 
```

## Coming Soon!
```
V7.1.0 - Major Command updates
```
## TestScripts.js
```
V1.0.0 Initial Testing and Troubleshooting
V1.0.4 Alpha Testing
V1.0.5 Beta Testing
V1.0.6.000+ These are Code Change Test, No Further Change Logs will be recorded for Internal Testing. Referred to as ICT in Future Records
```
## Reload.js
```
This script is not owned or maintained by the creator of ResponseBot, For further information please see :https://www.npmjs.com/package/hubot-reload
V1.0.0 Initial Testing and Troubleshooting
V1.0.1 Public Release
V1.0.2 Patch Fix for NPM
```
## Responsebot.coffee.old
```
V5.0.4 Phased out CoffeeScript File and added a JS File
V6.0.5 Updated code to Match JS version
V7.0.0 Updated code to Match JS version, CoffeeScript Version is no longer used however this is maintained for reverse compatibility with older versions of HuBot (https://hubot.github.com/)
V7.0.2 Updated code to Match JS version
```

## index.coffee.old
```
V7.0.1 Phased out CoffeeScript File and added a JS File
```
