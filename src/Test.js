// Description:
//  Helpbot, an Automated and (not so) Intuitive response Bot.
//  Hello and Good Morning Responses.
//  Tagged Users in Responses
//
// Dependencies:
//  None
//
// Configuration:
//  Install via internal Hubot with CoffeeScript or via npm install responsebot --save
//
// Commands:
//  KB = Knowledgebase Articles (Add users name to end of command to tag them in response)
//  App or App User = app "appname" "Target User"
//  APPCAT = appcat "category"
//  TS = Troubleshooting Basics
//  CL = Change Log for Updated Apps
//  [Botname] Reload = Reload script without having to restart Hubot
//
// Author:
//  ZyC0R3
//  Rid
//

module.exports = function(robot) {
  /// ---
  robot.hear(/(what vaur)/i, function(msg) {
    return msg.send('The current version of Test Scripts that is loaded is JS V1.0.4');
  });
  /// ---
  return robot.hear(/(eggs)/i, function(res) {
    var room;
    room = "BotTest";
    return robot.messageRoom(room, "Egg Test");
  });
  /// ---
  return robot.hear(/#([\d]+)/i, function(msg) {
    var issueId, updatedMsg;
    issueId = msg.match[1];
    return updatedMsg = msg.message.text.replace("#" + issueId, "[#" + issueId + "](https://linkaddress.address/show_bug.cgi?id=" + issueId, robot.adapter.callMethod('updateMessage', {
      _id: msg.message.id,
      rid: msg.message.room,
      msg: updatedMsg
    })["catch"](function(err) {
      return console.error(err);
    }));
  });
};

// ---
// Script for AppBoxesCo use only JS V-TestScripts
// ZyC0R3 - Rid
// ---
