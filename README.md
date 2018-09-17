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
```

## Authors

```
ZyC0R3
Rid
```

## Change Log

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
```
