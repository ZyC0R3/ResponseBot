# ResponseBot
Helpbot, an Automated and (not so) Intuitive response Bot for AppBoxes

## Installation

In your hubot project repo, run:

``` bash
npm install responsebot --save
```

Then add **hubot-reload-scripts** to your `external-scripts.json`:

``` json
[
  "responsebot"
]
```

## Usage

```
 KB = Knowledgebase Articles
 App = app "appname"
 APPCAT = appcat "category"
 TS = Troubleshooting Basics
 CL = Change Log for Updated Apps
```

## Authors

 ZyC0R3
 Rid

## Change Log

```
V1.0.0 Internal test Version
V2.0.0 Launch version - beta tests
V2.1.0 Added further chat triggers
V2.2.0 Alias updates for apps and triggers
V3.0.0 Change log & simple troubleshooting command added, added further chat triggers, remove the case sensitivity requirements from all commands
V3.1.0 Added hello and good morning responses, alias updates for apps and triggers
V3.2.0 Regex update for apps and triggers, bug fixed for false positives, spelling corrected, co author added
v3.3.0 Change log added, regex test site links commented in code to allow for more efficient changes, added personalised respoces to chat triggers
```