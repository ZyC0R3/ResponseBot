// Description:
//  Test Scripts
//
// Dependencies:
//  None
//
// Configuration:
//  Installed as part of ResponseBot via npm install responsebot --save
//
// Commands:
//  App code "appname" "Target User"
//
// Author:
//  ZyC0R3
//  Rid
//

module.exports = function(robot) {
  /// ---
robot.hear(/(what vaur)/i, function(msg) {
  return msg.send('The current version of Test Scripts that is loaded is JS V1.0.6.2');
  // --- Use this as the Git Changelog Record
  // --- 6.000 - Internal Code Testing (ICT)
});
  // ---
  // --- Test Code for User VAR as it breaks every update
  // ---
  robot.hear(/(app code) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === void 0) {
      return msg.send(' *user == undefined* ' + user);
    } else if (user === "undefined") {
      return msg.send(' *user == "undefined"* ' + user);
    } else if (user === "undefined") {
      return msg.send(' Not undefined @' + user);
    } else if (user === 0) {
      return msg.send(' 0 ' + user);
    } else if (user === null) {
      return msg.send(' null' + user);
    } else {
      return msg.send(' Non Valid @' + user);
    }
  });
  robot.hear(/(app test) ?(?:@(\w*))?/i, function(msg) {
    //
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Test:* Test');
    } else {
      msg.send('@' + user + ' *Test:* Test');
      return msg.send('For Support and Instructions on how to Install this App, Check out the support pages, https://bit.ly/2KlnyhJ');
    }
  });
};

// ---
// Script for AppBoxesCo use only JS V-TestScripts
// ZyC0R3 - Rid
// ---
