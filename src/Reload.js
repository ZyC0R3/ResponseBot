// Description:
//  Allows Hubot to (re)load scripts without restart
//
// Dependencies:
//  None
//
// Configuration:
//  Installed as part of ResponseBot via npm install responsebot --save
//
// Commands:
//  Reload = Reloads script
//
// Original Authors:
//  spajus
//  vinta
//  m-seldin

var Fs, Path, oldCommands, oldListeners;

Fs = require('fs');

Path = require('path');

npm = require('npm');

oldCommands = null;

oldListeners = null;

module.exports = function(robot) {
  var deleteScriptCache, reloadAllScripts, success, walkSync;
  robot.hear(/(what vaur)/i, function(msg) {
    return msg.send('The current version of Reload that is loaded is JS V1.0.2');
  });
  robot.respond(/reload/i, {
    id: 'reload-scripts.reload'
  }, function(msg) {
    var error;
    try {
      npm.load({save: true}, function () {
        npm.commands.outdated({json: true}, function (err, data) {
            //console.log(data);
            npm.commands.update(function(err, d){
                console.log(d);
            });
           });
        });
    } catch (_error) {
      error = _error;
      console.log("Hubot reloader:", error);
      return msg.send("Could not reload all scripts: " + error);
    }
    try {
      oldCommands = robot.commands;
      oldListeners = robot.listeners;
      robot.commands = [];
      robot.listeners = [];
      return reloadAllScripts(msg, success, function(err) {
        return msg.send(err);
      });
    } catch (_error) {
      error = _error;
      console.log("Hubot reloader:", error);
      return msg.send("Could not reload all scripts: " + error);
    }
  });
  success = function(msg) {
    var i, len, listener;
    for (i = 0, len = oldListeners.length; i < len; i++) {
      listener = oldListeners[i];
      listener = {};
    }
    oldListeners = null;
    oldCommands = null;
    return msg.send("Reloaded all scripts");
  };
  walkSync = function(dir, filelist) {
    var file, files, fullPath, i, len;
    files = Fs.readdirSync(dir);
    filelist = filelist || [];
    for (i = 0, len = files.length; i < len; i++) {
      file = files[i];
      fullPath = Path.join(dir, file);
      robot.logger.debug("Scanning file : " + fullPath);
      if (Fs.statSync(fullPath).isDirectory()) {
        filelist = walkSync(fullPath, filelist);
      } else {
        filelist.push(fullPath);
      }
    }
    return filelist;
  };
  deleteScriptCache = function(scriptsBaseDir) {
    var cacheobj, error, file, fileList, i, len, ref;
    if (Fs.existsSync(scriptsBaseDir)) {
      fileList = walkSync(scriptsBaseDir);
      ref = fileList.sort();
      for (i = 0, len = ref.length; i < len; i++) {
        file = ref[i];
        robot.logger.debug("file: " + file);
        if (require.cache[require.resolve(file)]) {
          try {
            cacheobj = require.resolve(file);
            console.log("Invalidate require cache for " + cacheobj);
            delete require.cache[cacheobj];
          } catch (_error) {
            error = _error;
            console.log("Unable to invalidate " + cacheobj + ": " + error.stack);
          }
        }
      }
    }
    return robot.logger.debug("Finished deleting script cache!");
  };
  return reloadAllScripts = function(msg, success, error) {
    var externalScripts, hubotScripts, scriptsPath;
    robot = msg.robot;
    robot.emit('reload_scripts');
    robot.logger.debug("Deleting script cache...");
    scriptsPath = Path.resolve(".", "scripts");
    deleteScriptCache(scriptsPath);
    robot.load(scriptsPath);
    scriptsPath = Path.resolve(".", "src", "scripts");
    deleteScriptCache(scriptsPath);
    robot.load(scriptsPath);
    robot.logger.debug("Loading hubot scripts...");
    hubotScripts = Path.resolve(".", "hubot-scripts.json");
    Fs.exists(hubotScripts, function(exists) {
      if (exists) {
        return Fs.readFile(hubotScripts, function(err, data) {
          var scripts;
          if (data.length > 0) {
            try {
              scripts = JSON.parse(data);
              scriptsPath = Path.resolve("node_modules", "hubot-scripts", "src", "scripts");
              return robot.loadHubotScripts(scriptsPath, scripts);
            } catch (_error) {
              err = _error;
              error("Error parsing JSON data from hubot-scripts.json: " + err);
            }
          }
        });
      }
    });
    robot.logger.debug("Loading hubot external scripts...");
    robot.logger.debug("Deleting cache for apppulsemobile");
    deleteScriptCache(Path.resolve(".", "node_modules", "hubot-apppulsemobile", "src"));
    externalScripts = Path.resolve(".", "external-scripts.json");
    Fs.exists(externalScripts, function(exists) {
      if (exists) {
        return Fs.readFile(externalScripts, function(err, data) {
          var i, len, pkg, scriptPath, scripts;
          if (data.length > 0) {
            try {
              robot.logger.debug("DATA : " + data);
              scripts = JSON.parse(data);
              if (scripts instanceof Array) {
                for (i = 0, len = scripts.length; i < len; i++) {
                  pkg = scripts[i];
                  scriptPath = Path.resolve(".", "node_modules", pkg, "src");
                  robot.logger.debug("Deleting cache for " + pkg);
                  robot.logger.debug("Path : " + scripts);
                  deleteScriptCache(scriptPath);
                }
              }
            } catch (_error) {
              err = _error;
              error("Error parsing JSON data from external-scripts.json: " + err);
            }
            robot.loadExternalScripts(scripts);
          }
        });
      }
    });
    robot.logger.debug("step 5");
    return success(msg);
  };
};

// ---
// Script for AppBoxesCo use only JS V5.1.0
// ZyC0R3 - Rid
// ---
