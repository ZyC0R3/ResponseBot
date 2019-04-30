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

var hellos, mornings;

hellos = ['Well hello there, %', 'Hey %, Hello!', 'Marnin\', %', 'Good day, %', 'Good \'aye!, %'];

mornings = ['Good morning, %', 'Good morning to you too, %', 'Good day, %', 'Good \'aye!, %'];

module.exports = function(robot) {
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
  // ---
  // Hello and Good Morning, Author marioBonales, Edited for further use.
  // ---
  robot.hear(/(hello|good( [d'])?ay(e)?)/i, function(msg) {
    var hello;
    hello = msg.random(hellos);
    return msg.send(hello.replace('%', msg.message.user.name));
  });
  robot.hear(/(^(good )?m(a|o)rnin(g)?)/i, function(msg) {
    var hello;
    hello = msg.random(mornings);
    return msg.send(hello.replace('%', msg.message.user.name));
  });
  // ---
  // KB Version Info
  // ---
  robot.hear(/(what vaur)/i, function(msg) {
    return msg.send('The current version of ResponseBot that is loaded is JS V6.0.4');
  });
  // ---
  // KB Responses with user Triggers
  // ---
  robot.hear(/(kb dht) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Questions about DHT, Should you Disable it or not, Read this for more info:  https://goo.gl/gUjeXY');
    } else {
      return msg.send('@' + user + ' Questions about DHT, Should you Disable it or not, Read this for more info:  https://goo.gl/gUjeXY');
    }
  });
  // ---
  robot.hear(/(kb transdroid ru) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Look no further for the settings for Transdroid (ruTorrent Set-Up Guide):  https://goo.gl/6kpGYk');
    } else {
      return msg.send('@' + user + ' Look no further for the settings for Transdroid (ruTorrent Set-Up Guide):  https://goo.gl/6kpGYk');
    }
  });
  // ---
  robot.hear(/(kb transdroid deluge) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Look no further for the settings for Transdroid (Deluge Set-Up Guide):  https://goo.gl/tEPYtt');
    } else {
      return msg.send('@' + user + ' Look no further for the settings for Transdroid (Deluge Set-Up Guide):  https://goo.gl/tEPYtt');
    }
  });
  // ---
  robot.hear(/(kb autodl) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Need some help with Autodl-irssi, Take a look at this basic guide: https://goo.gl/jJz5qB');
    } else {
      return msg.send('@' + user + ' Need some help with Autodl-irssi, Take a look at this basic guide: https://goo.gl/jJz5qB');
    }
  });
  // ---
  robot.hear(/(kb slow speeds) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Before you open a ticket or complain something is broken read this: https://goo.gl/bpmBVf');
    } else {
      return msg.send('@' + user + ' Before you open a ticket or complain something is broken read this: https://goo.gl/bpmBVf');
    }
  });
  // ---
  robot.hear(/(kb rutorrent errors) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Check out this page on known and common ruTorrent issues and errors: https://goo.gl/RHouqh');
    } else {
      return msg.send('@' + user + ' Check out this page on known and common ruTorrent issues and errors: https://goo.gl/RHouqh');
    }
  });
  // ---
  robot.hear(/(kb installing page) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Stuck on the installing page, have a quick read: https://goo.gl/n3qeWi');
    } else {
      return msg.send('@' + user + ' Stuck on the installing page, have a quick read: https://goo.gl/n3qeWi');
    }
  });
  // ---
  robot.hear(/(kb (gs|getting started)) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[3]);
    if (user === "undefined") {
      return msg.send('New to AppBoxes, have a quick read of our getting started pages: https://goo.gl/wDprGi');
    } else {
      return msg.send('@' + user + ' New to AppBoxes, have a quick read of our getting started pages: https://goo.gl/wDprGi');
    }
  });
  // ---
  robot.hear(/(kb public.?h?t?m?l?\b) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      msg.send('So you\'re looking at setting up a public_html Folder, look no further: https://goo.gl/WKwg9s');
      return msg.send('More Knowledgebase Articles to follow with further support with things like .htaccess and PHP directory scripts');
    } else {
      msg.send('@' + user + ' So you\'re looking at setting up a public_html Folder, look no further: https://goo.gl/WKwg9s');
      return msg.send('More Knowledgebase Articles to follow with further support with things like .htaccess and PHP directory scripts');
    }
  });
  // ---
  robot.hear(/(kb ftp) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('Click here for instructions on setting up FTP: https://goo.gl/5toACz');
    } else {
      return msg.send('@' + user + ' Click here for instructions on setting up FTP: https://goo.gl/5toACz');
    }
  });
  // ---
  robot.hear(/(kb (elec|electorrent|etm)) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[3]);
    if (user === "undefined") {
      return msg.send('Click here for instructions on setting Electorrent, The best Multi-client desktop torrent manager: https://bit.ly/2DCYtus');
    } else {
      return msg.send('@' + user + ' Click here for instructions on setting Electorrent, The best Multi-client desktop torrent manager: https://bit.ly/2DCYtus');
    }
  });
  // ---
  // App Store Links
  // ---
  robot.hear(/(app plex) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Plex:* Organize your videos, music, and photos. (Plex Version is controlled in App) Requires 1 app slot: https://www.appboxes.co/appstore/app/37');
    } else {
      return msg.send('@' + user + ' *Plex:* Organize your videos, music, and photos. (Plex Version is controlled in App) Requires 1 app slot: https://www.appboxes.co/appstore/app/37');
    }
  });
  // ---
  robot.hear(/(app wordpress) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Wordpress:* WordPress is a free and open-source content management system. V4.9.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/87');
    } else {
      return msg.send('@' + user + ' *Wordpress:* WordPress is a free and open-source content management system. V4.9.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/87');
    }
  });
  // ---
  robot.hear(/(app ftp) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Pure-FTPd:* Pure-FTPd is an FTP server. V1.0.43-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/67');
    } else {
      return msg.send('@' + user + ' *Pure-FTPd:* Pure-FTPd is an FTP server. V1.0.43-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/67');
    }
  });
  // ---
  robot.hear(/(app (lamp(.?stack))) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[4]);
    if (user === "undefined") {
      return msg.send('*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96');
    } else {
      return msg.send('@' + user + ' *Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96');
    }
  });
  // ---
  robot.hear(/(app mattermost) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Mattermost:* Workplace messaging for web, PCs and phones. V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95');
    } else {
      return msg.send('@' + user + ' *Mattermost:* Workplace messaging for web, PCs and phones. V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95');
    }
  });
  // ---
  robot.hear(/(app (rocket(.?chat))) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[4]);
    if (user === "undefined") {
      return msg.send('*Rocket Chat:* Rocket.Chat is the leading open source team chat software solution. V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89');
    } else {
      return msg.send('@' + user + ' *Rocket Chat:* Rocket.Chat is the leading open source team chat software solution. V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89');
    }
  });
  // ---
  //robot.hear(/(app lets chat) ?(?:@(\w*))?/i, function(msg) {
  //  var user;
  //  user = escape(msg.match[2]);
  //  if (user === "undefined") {
  //    return msg.send('*Lets Chat:* A self-hosted chat app for small teams built by Security Compass. V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88');
  //  } else {
  //    return msg.send('@' + user + ' *Lets Chat:* A self-hosted chat app for small teams built by Security Compass. V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88');
  //  }
  //});
  // ---
  robot.hear(/(app (ubuntu|vnc|ssh)) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[3]);
    if (user === "undefined") {
      return msg.send('*Ubuntu Desktop (VNC):* This install includes VNC, SSH & Various Apps. V18.04-3 Requires 5 app slot: https://www.appboxes.co/appstore/app/97');
    } else {
      return msg.send('@' + user + ' *Ubuntu Desktop (VNC):* This install includes VNC, SSH & Various Apps. V18.04-3 Requires 5 app slot: https://www.appboxes.co/appstore/app/97');
    }
  });
  // ---
  robot.hear(/(app rutorrent) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-20 Requires 1 app slot: https://www.appboxes.co/appstore/app/66');
    } else {
      return msg.send('@' + user + ' *ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-20 Requires 1 app slot: https://www.appboxes.co/appstore/app/66');
    }
  });
  // ---
  robot.hear(/(app deluge) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-4 Requires 1 app slot: https://www.appboxes.co/appstore/app/68');
    } else {
      return msg.send('@' + user + ' *Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-4 Requires 1 app slot: https://www.appboxes.co/appstore/app/68');
    }
  });
  // ---
  robot.hear(/(app transmission) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Transmission:* Transmission is a BitTorrent client. V2.94 Requires 1 app slot: https://www.appboxes.co/appstore/app/77');
    } else {
      return msg.send('@' + user + ' *Transmission:* Transmission is a BitTorrent client. V2.94 Requires 1 app slot: https://www.appboxes.co/appstore/app/77');
    }
  });
  // ---
  robot.hear(/(app flood) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Flood:* A modern web UI for rTorrent. V1.0.0-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/82');
    } else {
      return msg.send('@' + user + ' *Flood:* A modern web UI for rTorrent. V1.0.0-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/82');
    }
  });
  // ---
  robot.hear(/(app vpn) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*VPN:* The Open Source VPN. V2.4.6 Requires 1 app slot: https://www.appboxes.co/appstore/app/69');
    } else {
      return msg.send('@' + user + ' *VPN:* The Open Source VPN. V2.4.6 Requires 1 app slot: https://www.appboxes.co/appstore/app/69');
    }
  });
  // ---
  robot.hear(/(app nextcloud) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Nextcloud:* Nextcloud - Protecting your data. V13.0.4 Requires 1 app slot: https://www.appboxes.co/appstore/app/71');
    } else {
      return msg.send('@' + user + ' *Nextcloud:* Nextcloud - Protecting your data. V13.0.4 Requires 1 app slot: https://www.appboxes.co/appstore/app/71');
    }
  });
  // ---
  robot.hear(/(app madsonic) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Madsonic:* Madsonic is a web-based media library. V6.3.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/72');
    } else {
      return msg.send('@' + user + ' *Madsonic:* Madsonic is a web-based media library. V6.3.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/72');
    }
  });
  // ---
  robot.hear(/(app ((resil+io|bt.?sync))) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[4]);
    if (user === "undefined") {
      return msg.send('*Resilio Sync:* Have Your Files Anywhere, Sync to all your devices. V2.5-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/73');
    } else {
      return msg.send('@' + user + ' *Resilio Sync:* Have Your Files Anywhere, Sync to all your devices. V2.5-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/73');
    }
  });
  // ---
  robot.hear(/(app (mysql|mariadb)) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[3]);
    if (user === "undefined") {
      return msg.send('*MySQL (MariaDB):* A popular database server. Made by the original MySQL devs. V10.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/74');
    } else {
      return msg.send('@' + user + ' *MySQL (MariaDB):* A popular database server. Made by the original MySQL devs. V10.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/74');
    }
  });
  // ---
  robot.hear(/(app (nginx|php(7)?)) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.14.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/108');
    } else {
      return msg.send('@' + user + ' *Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.14.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/108');
    }
  });
  // ---
  robot.hear(/(app znc) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*ZNC:* ZNC is an IRC network bouncer or BNC. V1.7.2 Requires 1 app slot: https://www.appboxes.co/appstore/app/81');
    } else {
      return msg.send('@' + user + ' *ZNC:* ZNC is an IRC network bouncer or BNC. V1.7.2 Requires 1 app slot: https://www.appboxes.co/appstore/app/81');
    }
  });
  // ---
  robot.hear(/(app rapidleech) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Rapidleech:* Rapid Leech is a free server transfer script. V2.43 Requires 1 app slot: https://www.appboxes.co/appstore/app/78');
    } else {
      return msg.send('@' + user + ' *Rapidleech:* Rapid Leech is a free server transfer script. V2.43 Requires 1 app slot: https://www.appboxes.co/appstore/app/78');
    }
  });
  // ---
  robot.hear(/(app seat) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*SeAT:* A Simple, EVE Online API Tool and Corporation Manager. V3.0.6 Requires 1 app slot: https://www.appboxes.co/appstore/app/102');
    } else {
      return msg.send('@' + user + ' *SeAT:* A Simple, EVE Online API Tool and Corporation Manager. V3.0.6 Requires 1 app slot: https://www.appboxes.co/appstore/app/102');
    }
  });
  // ---
  robot.hear(/(app kodexplorer) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*kODExplorer:* A web based file manager, web IDE / browser based code editor. V4.35 Requires 1 app slot: https://www.appboxes.co/appstore/app/103');
    } else {
      return msg.send('@' + user + ' *kODExplorer:* A web based file manager, web IDE / browser based code editor. V4.35 Requires 1 app slot: https://www.appboxes.co/appstore/app/103');
    }
  });
  // ---
  robot.hear(/(app gogs) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Gogs:* A painless self-hosted Git service. V0.11.53 Requires 1 app slot: https://www.appboxes.co/appstore/app/111');
    } else {
      return msg.send('@' + user + ' *Gogs:* A painless self-hosted Git service. V0.11.53 Requires 1 app slot: https://www.appboxes.co/appstore/app/111');
    }
  });
  // ---
  robot.hear(/(app serposcope) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Serposcope:* Rank tracker to monitor websites ranking in Google. V2.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/114');
    } else {
      return msg.send('@' + user + ' *Serposcope:* Rank tracker to monitor websites ranking in Google. V2.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/114');
    }
  });
  // ---
  //robot.hear(/(app fathom) ?(?:@(\w*))?/i, function(msg) {
  //  var user;
  //  user = escape(msg.match[2]);
  //  if (user === "undefined") {
  //    return msg.send('*Fathom:* Fathom Analytics is a simpler and more privacy-focused alternative to Google Analytics. Requires 1 app slot: https://www.appboxes.co/appstore/app/113');
  //  } else {
  //    return msg.send('@' + user + ' *Fathom:* Fathom Analytics is a simpler and more privacy-focused alternative to Google Analytics. Requires 1 app slot: https://www.appboxes.co/appstore/app/113');
  //  }
  //});
  // ---
  robot.hear(/(app lemp) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Lemp Stack:* LEMP is a group of open-source software which enable a server to host dynamic websites and web applications. V1.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/112');
    } else {
      return msg.send('@' + user + ' *Lemp Stack:* LEMP is a group of open-source software which enable a server to host dynamic websites and web applications. V1.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/112');
    }
  });
  // ---
  robot.hear(/(app teamspeak) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Teamspeak 3 Server:* Use crystal clear sound to communicate with your team mates cross-platform with military-grade security, lag-free performance & unparalleled reliability and uptime. V3.5.4 Requires 3 app slot: https://www.appboxes.co/appstore/app/118');
    } else {
      return msg.send('@' + user + ' *Teamspeak 3 Server:* Use crystal clear sound to communicate with your team mates cross-platform with military-grade security, lag-free performance & unparalleled reliability and uptime. V3.5.4 Requires 3 app slot: https://www.appboxes.co/appstore/app/118');
    }
  });
  // ---
  robot.hear(/(app filerun) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*FileRun File Manager:* Access your files anywhere through self-hosted secure cloud storage, file backup and sharing for your photos, videos, files and more. V2.10.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/116');
    } else {
      return msg.send('@' + user + ' *FileRun File Manager:* Access your files anywhere through self-hosted secure cloud storage, file backup and sharing for your photos, videos, files and more. V2.10.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/116');
    }
  });
  // ---
  robot.hear(/(app (minecraft|mc)) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*Minecraft Server:* McMyAdmin is the leading web control panel and administration console for Minecraft servers. V2.7.1.0-1 Requires 5 app slot: https://www.appboxes.co/appstore/app/117');
    } else {
      return msg.send('@' + user + ' *Minecraft Server:* McMyAdmin is the leading web control panel and administration console for Minecraft servers. V2.7.1.0-1 Requires 5 app slot: https://www.appboxes.co/appstore/app/117');
    }
  });
  // ---
  robot.hear(/(app gitlab) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[2]);
    if (user === "undefined") {
      return msg.send('*GitLab:* GitLab is a web-based Git-repository manager. V11.7.0-ce.0 Requires 5 app slot: https://www.appboxes.co/appstore/app/119');
    } else {
      return msg.send('@' + user + ' *GitLab:* GitLab is a web-based Git-repository manager. V11.7.0-ce.0 Requires 5 app slot: https://www.appboxes.co/appstore/app/119');
    }
  });
  // ---
  // App Store Categories
  // Major Work Needed, Out of Date.
  // ---
  //robot.hear(/(appcat chat)/i, function(msg) {
  //  msg.send('*This is a list of applications that are categorised as Chat applications*');
  //  msg.send('*Mattermost:* V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95');
  //  msg.send('*Rocket Chat:* V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89');
  //  return msg.send('*Lets Chat:* V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88');
  //});
  // ---
  //robot.hear(/(appcat (torrent|.?clients))/i, function(msg) {
  //  msg.send('*This is a list of applications that are categorised as Torrent Clients*');
  //  msg.send('*ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-8 Requires 1 app slot: https://www.appboxes.co/appstore/app/66');
  //  msg.send('*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/68');
  //  msg.send('*Transmission:* Transmission is a BitTorrent client. V2.93 Requires 1 app slot: https://www.appboxes.co/appstore/app/77');
  //  return msg.send('*Flood:* A modern web UI for rTorrent. V1.0.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/82');
  //});
  // ---
  //robot.hear(/(appcat webserver)/i, function(msg) {
  //  msg.send('*This is a list of applications that are categorised as Webservers*');
  //  msg.send('*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75');
  //  return msg.send('*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96');
  //});
  // ---
  //robot.hear(/(appcat (cloud|sync))/i, function(msg) {
  //  msg.send('*This is a list of applications that are categorised under Sync*');
  //  msg.send('*Resilio Sync:* Have Your Files Anywhere,Sync to all your devices. V2.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/73');
  //  return msg.send('*Nextcloud:* Nextcloud - Protecting your data. V13.0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/71');
  //});
  // ---
  // Chat Triggers
  // ---
  robot.hear(/(%PORTS|100EXTERNAL%)/i, function(msg) {
    var username;
    username = msg.message.user.name;
    return msg.send('@' + username + ' Please update the app and the relevant port will be shown. If no update is avaliable then please let us know in chat to make sure there is no other reason you are missing the port');
  });
  // ---
  robot.hear(/(https:\/\/<username>.appboxes.co,)/i, function(msg) {
    var username;
    username = msg.message.user.name;
    return msg.send('@' + username + ' Apologies you are having some issues with installing your app, If you have been seeing this error for longer than 45 Mins please let me know.');
  });
  // ---
  robot.hear(/(500 \[error,getplugins\])/i, function(msg) {
    var username;
    username = msg.message.user.name;
    msg.send('*STOP*, @' + username + ' Investigations are ongoing into the causes of this error, there is a Troubleshooting step you can take to try and resolve this, this has a varying level of success for different users');
    msg.send('It involves deleting unnecessary files from the rutorrent application folder, using FTP or any other file management method, navigate to `/apps/rutorrent.sample.appboxes.co/torrents/config/rutorrent/settings` and `/apps/rutorrent.sample.appboxes.co/torrents/config/rutorrent/users/sample/settings` and delete the folder called tasks, *MAKE SURE YOU ONLY DELETE THIS FOLDER AND NOTHING ELSE*');
    return msg.send('If you still have this error after 30 mins please holla at an Admin or raise a ticket. _(Type `Raise a Ticket` for more info)_');
  });
  // ---
  robot.hear(/(504 \[error,getplugins\])/i, function(msg) {
    var username;
    username = msg.message.user.name;
    msg.send('*STOP*, @' + username + ' do not restart your application or refresh the page. ruTorrent is single threaded on its XMLRPC interface, this means it can not manage an excessive amount of commands at once. Therefore, when doing any actions, do small chunks, wait for it to finish, then continue. If you still have this error after 30 mins please holla at an Admin or raise a ticket.');
    return msg.send('_(Type `Raise a Ticket` for more info)_');
  });
  // ---
  robot.hear(/(SSL_ERROR_BAD_CERT_DOMAIN)/i, function(msg) {
    var username;
    username = msg.message.user.name;
    msg.send('@' + username + ' If this error is seen while using Firefox, although it directly relates to the appboxes.co website it is not an error with you accessing the page. This error is only produced on Firefox and means the app you are trying to install/update has not finished yet. If the same page is opened in Chrome or IE you would get the "Please Wait" landing page advising the same. Please do not raise a ticket for this reason, if however, you have been getting the "Please Wait" page for more than 30 mins holla at an admin or raise a ticket.');
    return msg.send('_(Type `Raise a Ticket` for more info)_');
  });
  // ---
  robot.hear(/(who made you)/i, function(msg) {
    return msg.send('Zycore gave me life, Rid made me a real bot.');
  });
  // ---
  robot.hear(/((disk).*(quota|full))/i, function(msg) {
    var username;
    username = msg.message.user.name;
    msg.send('@' + username + ' If you have filled your Disk Quota, some applications will not work/load. In this case you will need to delete some data from your account to be able to continue to use your services. If the Disk Quota is full then the FTP App cant write to its logs/pid files and hence this is not an option to achive this.');
    msg.send('Use the file explorer on your https://www.appboxes.co/appboxmanager/appboxes page, click on the appbox that has the full Disk Quota then click \'File Explorer\' top right hand corner below the logout button.');
    return msg.send('This File Explorer is owned by a privileged user and access the filesystem outside of the container so will work regardless  if your disk is full or not. Once you have deleted data it may take up to 15 minutes for services to reload, restarting applicaiton during this time will not speed this process up.');
  });
  // ---
  robot.hear(/((submit|raise) a?.*bug|issue tracker) ?(?:@(\w*))?/i, function(msg) {
    var user, username;
    user = escape(msg.match[3]);
    if (user === "undefined") {
      username = msg.message.user.name;
      return msg.send('@' + username + ' You can raise or track the status of a bug or requested feature and submit a new one at https://git.cylo.io/cylo/cylo/boards _(You will need to create an account)_');
    } else {
      return msg.send('@' + user + ' You can raise or track the status of a bug or requested feature and submit a new one at https://git.cylo.io/cylo/cylo/boards _(You will need to create an account)_');
    }
  });
  // ---
  robot.hear(/((raise).*ticket) ?(?:@(\w*))?/i, function(msg) {
    var user;
    user = escape(msg.match[3]);
    if (user === "undefined") {
      return msg.send('Tickets can be raised on the existing support system at: https://billing.seedboxes.co/supporttickets.php');
    } else {
      return msg.send('@' + user + ' Tickets can be raised on the existing support system at: https://billing.seedboxes.co/supporttickets.php');
    }
  });
  // ---
  // Simple Troubleshooting
  // ---
  robot.hear(/(ts ftp)/i, function(msg) {
    msg.send('Quick Troubleshooting Tips for FTP or SFTP');
    msg.send('1: Make sure the Port, Password, Username (For SFTP the username is: _root_) and Domain you are using is correct, Check here https://www.appboxes.co/appboxmanager/installedapps');
    msg.send('2: If the above does not work, and you are using FileZilla, remove the connection from connection manager and add it again.');
    msg.send('3: Try installing a second Pure-FTPd applicaiton on your AppBox, *DO NOT* remove the troubled instance, this is to test there is no other errors with your box or FTP globally.');
    return msg.send('4: Last and only option is to holla at an admin');
  });
  // ---
  return robot.hear(/(ts rutorrent)/i, function(msg) {
    msg.send('Quick Troubleshooting Tips for ruTorrent');
    msg.send('1: First thing, and most important, *DO NOT* uninsatll ruTorrent, ruTorrent is single threaded on its XMLRPC interface, this means it doesn\'t manage excessive commands simultaneously. Therefore, when doing any actions, do a small chunk, wait for them to finish, then continue.');
    msg.send('2: If after 15 mins (note large amounts of data/actions can take longer, be proportionate) restart your instance of ruTorrent here: https://www.appboxes.co/appboxmanager/installedapps.');
    msg.send('3: Next is a bit of common sense, read the last hour or so of chat, are the admins dealing with a known issue, has it been reported, are you the only one effected. If it is known, being dealt with and you are not alone *JUST BE PATIENT* it will be fixed soon.');
    return msg.send('4: If the first 3 dont help then please holla at an admin or raise a ticket. _(Type `Raise a Ticket` for more info)_');
  });
};

// ---
// Script for AppBoxesCo use only JS V6.0.1
// ZyC0R3 - Rid
// ---
