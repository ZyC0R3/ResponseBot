// Description:
//   Helpbot, an Automated and (not so) Intuitive response Bot.
//   Hello and Good Morning Responses
//
// Dependencies:
//   None
//
// Configuration:
//   install via internal Hubot
//
// Commands:
//   KB = Knowledgebase Articles
//   App = app "appname"
//   APPCAT = appcat "category"
//   TS = Troubleshooting Basics
//   CL = Change Log for Updated Apps
//
// Author:
//   ZyC0R3
// 	 Rid
//
var hellos, mornings;

hellos = ['Well hello there, %', 'Hey %, Hello!', 'Marnin\', %', 'Good day, %', 'Good \'aye!, %'];

mornings = ['Good morning, %', 'Good morning to you too, %', 'Good day, %', 'Good \'aye!, %'];

module.exports = function(robot) {
// ---
// Hello and Good Morning, Author marioBonales, Edited for further use.
// ---
  robot.hear(/(hello|good( [d'])?ay(e)?)/i, function(msg) {
    var hello;
    hello = void 0;
    hello = msg.random(hellos);
    return msg.send(hello.replace('%', msg.message.user.name));
  });
  robot.hear(/(^(good )?m(a|o)rnin(g)?)/i, function(msg) {
    var hello;
    hello = void 0;
    hello = msg.random(mornings);
    return msg.send(hello.replace('%', msg.message.user.name));
  });
// ---
// KB Version Info
// ---
  robot.hear(/(what vaur)/i, function(msg) {
    return msg.send('The current version of Responses that is loaded is V3.2');
  });
// ---
// KB Responces
// ---
  robot.hear(/(kb transmission remote)/i, function(msg) {
    return msg.send('Your Guide to setting up Transmission Remote Gui: https://goo.gl/aRnxvw');
  });
  robot.hear(/(kb dht)/i, function(msg) {
    return msg.send('Questions about DHT, Should you Disable it or not, Read this for more info:  https://goo.gl/gUjeXY');
  });
  robot.hear(/(kb raise a bug)/i, function(msg) {
    return msg.send('You can raise or track the status of a bug or requested feature at https://git.cylo.io/cylo/cylo/boards _(You will need to create an account)_');
  });
  robot.hear(/(kb transdroid ru)/i, function(msg) {
    return msg.send('Look no further for the settings for Transdroid (ruTorrent Set-Up Guide):  https://goo.gl/6kpGYk');
  });
  robot.hear(/(kb (autodl|(-?irssi)))/i, function(msg) {
    return msg.send('Need some help with Autodl-irssi, Take a look at this basic guide: https://goo.gl/jJz5qB');
  });
  robot.hear(/(kb port)/i, function(msg) {
    return msg.send('Please update the app and the relevant port will be shown. If no update is available then please let us know in chat to make sure there is no other reason you are missing the port');
  });
  robot.hear(/(kb slow speeds)/i, function(msg) {
    return msg.send('*STOP*, Before You Open a Ticket or Complain Something is Broken Read This: https://goo.gl/bpmBVf');
  });
  robot.hear(/(kb rutorrent errors)/i, function(msg) {
    return msg.send('Check out this page on known and common ruTorrent issues and errors: https://goo.gl/RHouqh');
  });
  robot.hear(/(kb installing page)/i, function(msg) {
    return msg.send('Stuck on the installing page, have a quick read: https://goo.gl/n3qeWi');
  });
  robot.hear(/(kb gs|kb getting started)/i, function(msg) {
    return msg.send('New to AppBoxes, have a quick read of our getting started pages: https://goo.gl/wDprGi');
  });
  robot.hear(/(kb (public|(.?html)))/i, function(msg) {
    msg.send('So you\'re looking at setting up a public_html Folder, look no further: https://goo.gl/WKwg9s');
    return msg.send('More Knowledgebase Articles to follow with further support with things like .htaccess and PHP directory scripts');
  });
  robot.hear(/(kb ftp)/i, function(msg) {
    msg.send('Click here for instructions on setting up FTP: https://goo.gl/5toACz');
    msg.send('And because i\'m an all-knowing Bot, so I know you are going to ask at some point');
    return msg.send('Click here for instructions on setting up SFTP: https://goo.gl/xMYSmy');
  });
  robot.hear(/(kb (sftp|ssh))/i, function(msg) {
    return msg.send('Click here for instructions on setting up SFTP: https://goo.gl/xMYSmy');
  });
  robot.hear(/(kb ticket|raise a ticket)/i, function(msg) {
    return msg.send('Tickets can be raised on the existing support system at: https://billing.seedboxes.co/supporttickets.php');
  });
// ---
// App Store Links
// ---
  robot.hear(/(app plex)/i, function(msg) {
    return msg.send('*Plex:* Organize your videos, music, and photos. VLatest Requires 1 app slot: https://www.appboxes.co/appstore/app/37');
  });
  robot.hear(/(app wordpress)/i, function(msg) {
    return msg.send('*Wordpress:* WordPress is a free and open-source content management system. V4.9.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/87');
  });
  robot.hear(/(app ftp)/i, function(msg) {
    return msg.send('*Pure-FTPd:* Pure-FTPd is an FTP server. V1.0.36-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/67');
  });
  robot.hear(/(app (lamp|(.?stack)))/i, function(msg) {
    return msg.send('*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96');
  });
  robot.hear(/(app mattermost)/i, function(msg) {
    return msg.send('*Mattermost:* Workplace messaging for web, PCs and phones. V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95');
  });
  robot.hear(/(app rocket)/i, function(msg) {
    return msg.send('*Rocket Chat:* Rocket.Chat is the leading open source team chat software solution. V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89');
  });
  robot.hear(/(app lets chat)/i, function(msg) {
    return msg.send('*Lets Chat:* A self-hosted chat app for small teams built by Security Compass. V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88');
  });
  robot.hear(/(app (ubuntu desktop|vnc))/i, function(msg) {
    return msg.send('*Ubuntu Desktop (VNC):* This install includes VNC, SSH & Various Apps. V17.10 Requires 5 app slot: https://www.appboxes.co/appstore/app/85');
  });
  robot.hear(/(app rutorrent)/i, function(msg) {
    return msg.send('*ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-6 Requires 1 app slot: https://www.appboxes.co/appstore/app/66');
  });
  robot.hear(/(app deluge)/i, function(msg) {
    return msg.send('*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/68');
  });
  robot.hear(/(app transmission)/i, function(msg) {
    return msg.send('*Transmission:* Transmission is a BitTorrent client. V2.93 Requires 1 app slot: https://www.appboxes.co/appstore/app/77');
  });
  robot.hear(/(app flood)/i, function(msg) {
    return msg.send('*Flood:* A modern web UI for rTorrent. V1.0.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/82');
  });
  robot.hear(/(app (ubuntu server|ssh))/i, function(msg) {
    return msg.send('*Ubuntu Server (SSH):* A simple SSH server. V17.10 Requires 5 app slot: https://www.appboxes.co/appstore/app/43');
  });
  robot.hear(/(app vpn)/i, function(msg) {
    return msg.send('*VPN:* The Open Source VPN. V0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/69');
  });
  robot.hear(/(app nextcloud)/i, function(msg) {
    return msg.send('*Nextcloud:* Nextcloud - Protecting your data. V13.0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/71');
  });
  robot.hear(/(app madsonic)/i, function(msg) {
    return msg.send('*Madsonic:* Madsonic is a web-based media library. V6.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/72');
  });
  robot.hear(/(app ((resil+io|bt)|(.?sync)))/i, function(msg) {
    return msg.send('*Resilio Sync:* Have Your Files Anywhere, Sync to all your devices. V2.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/73');
  });
  robot.hear(/(app (mysql|mariadb))/i, function(msg) {
    return msg.send('*MySQL (MariaDB):* A popular database server. Made by the original MySQL devs. V10.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/74');
  });
  robot.hear(/(app (nginx|php(7)?))/i, function(msg) {
    return msg.send('*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75');
  });
  robot.hear(/(app znc)/i, function(msg) {
    return msg.send('*ZNC:* ZNC is an IRC network bouncer or BNC. V1.6 Requires 1 app slot: https://www.appboxes.co/appstore/app/81');
  });
  robot.hear(/(app rapidleech)/i, function(msg) {
    return msg.send('*Rapidleech:* Rapid Leech is a free server transfer script. V2.43 Requires 1 app slot: https://www.appboxes.co/appstore/app/78');
  });
// ---
// App Store Categories
// ---
  robot.hear(/(appcat chat)/i, function(msg) {
    msg.send('*This is a list of applications that are categorised as Chat applications*');
    msg.send('*Mattermost:* V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95');
    msg.send('*Rocket Chat:* V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89');
    return msg.send('*Lets Chat:* V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88');
  });
  robot.hear(/(appcat (torrent|.?clients))/i, function(msg) {
    msg.send('*This is a list of applications that are categorised as Torrent Clients*');
    msg.send('*ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-6 Requires 1 app slot: https://www.appboxes.co/appstore/app/66');
    msg.send('*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/68');
    msg.send('*Transmission:* Transmission is a BitTorrent client. V2.93 Requires 1 app slot: https://www.appboxes.co/appstore/app/77');
    return msg.send('*Flood:* A modern web UI for rTorrent. V1.0.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/82');
  });
  robot.hear(/(appcat webserver)/i, function(msg) {
    msg.send('*This is a list of applications that are categorised as Webservers*');
    msg.send('*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75');
    return msg.send('*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96');
  });
  robot.hear(/(appcat (cloud|sync))/i, function(msg) {
    msg.send('*This is a list of applications that are categorised under Sync*');
    msg.send('*Resilio Sync:* Have Your Files Anywhere,Sync to all your devices. V2.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/73');
    return msg.send('*Nextcloud:* Nextcloud - Protecting your data. V13.0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/71');
  });
// ---
// Chat Triggers
// ---
  robot.hear(/(.*(torrent).*(mov(e|ing)).*)|(.*(mov(e|ing)).*(torrent).*)/i, function(msg) {
    return msg.send('We\'ve recently issued an automated ruTorrent update which will reset automove, so torrents will be automatically moved from /torrents/downloading to /torrents/completed. You can turn this off in ruTorrent via Settings > Autotools, and then tick "Enable AutoMove" and set your own location. This will be the last time we\'ll be overriding this via an update, so your setting will stick in future. Appologies once again.');
  });
  robot.hear(/(%PORTS|100EXTERNAL%)/i, function(msg) {
    return msg.send('Please update the app and the relevant port will be shown. If no update is avaliable then please let us know in chat to make sure there is no other reason you are missing the port');
  });
  robot.hear(/(set(|[t]?in(g?)) up sftp)/i, function(msg) {
    return msg.send('I knew someone was going to ask: instruction on setting up SFTP: https://goo.gl/xMYSmy');
  });
  robot.hear(/(504 [error,getplugins]|getplugins|error 504)/i, function(msg) {
    return msg.send('*STOP* do not restart your application or refresh the page, ruTorrent is single threaded on its XMLRPC interface, this means it doesn\'t manage excessive commands simultaneously. Therefore, when doing any actions, do a small chunk, wait for them to finish, then continue. If you still have this error after 30 mins please holla at an Admin or raise a ticket.');
  });
  robot.hear(/(actively refused|FTP cant connect|connection refused|ECONNREFUSED|(FTP|port).*(FTP|port)|ftp.*not.*working)/i, function(msg) {
    return msg.send('When any update is performed the port that is assigned can somtimes be changed, First point of call is to check the port you are using is the correct port on your app settings page, click here to login and check: https://www.appboxes.co/appboxmanager/installedapps');
  });
  robot.hear(/(SSL_ERROR_BAD_CERT_DOMAIN)/i, function(msg) {
    return msg.send('If this error is seen while using Firefox, although it directly relates to the appboxes.co website it is not an error with you accessing the page. This error is only produced on Firefox and means the app you are trying to install/update has not finished yet. If the same page is opened in Chrome or IE you would get the \"Please Wait\" landing page advising the same. Please do not raise a ticket for this reason, if however, you have been getting the \"Please Wait\" page for more than 30 mins holla at an admin or raise a ticket. ');
  });
// ---
// Simple Troubleshooting
// ---
  robot.hear(/(ts ftp)/i, function(msg) {
    msg.send('Quick Troubleshooting Tips for FTP');
    msg.send('1: Make sure the Port, Password, Username and Domain you are using is correct, Check here https://www.appboxes.co/appboxmanager/installedapps');
    msg.send('2: If the above does not work, and you are using FileZilla, remove the connection from connection manager and add it again.');
    msg.send('3: Try installing a second Pure-FTPd applicaiton on your AppBox, *DO NOT* remove the troubled instance, this is to test there is no other errors with your box or FTP globally.');
    return msg.send('4: Last and only option is try SFTP _(Type kb sftp for support)_, if this fails too then please holla at an admin');
  });
  robot.hear(/(ts rutorrent)/i, function(msg) {
    msg.send('Quick Troubleshooting Tips for ruTorrent');
    msg.send('1: First thing, and most important, *DO NOT* uninsatll ruTorrent, ruTorrent is single threaded on its XMLRPC interface, this means it doesn\'t manage excessive commands simultaneously. Therefore, when doing any actions, do a small chunk, wait for them to finish, then continue.');
    msg.send('2: If after 15 mins (note large amounts of data/actions can take longer, be proportionate) restart your instance of ruTorrent here: https://www.appboxes.co/appboxmanager/installedapps.');
    msg.send('3: Next is a bit of common sense, read the last hour or so of chat, are the admins dealing with a known issue, has it been reported, are you the only one effected. If it is known, being dealt with and you are not alone *JUST BE PATIENT* it will be fixed soon.');
    return msg.send('4: If the first 3 dont help then please holla at an admin or raise a ticket.');
  });
// ---
// Change log
// This is more of a location to store known changes to applciations as they are updated, it however is not a complete chagne log.
// ---
  robot.hear(/(cl rutorrent)/i, function(msg) {
    msg.send('V3.8-2: Added ffmpeg');
    msg.send('V3.8-3: Various fixes & stability improvements');
    msg.send('V3.8-4: Performance updates, Fixed GeoIP, made /home viewable and added proxy settings to nginx');
    msg.send('V3.8-5: Adjusted settings and timeout');
    return msg.send('V3.8-6: A Legacy file from a old version was overriding user settings and preventing seeding of torrents, this was removed.');
  });
  robot.hear(/(cl (cute|.?ftp(d)?))/i, function(msg) {
    return msg.send('V1.0.36-1: Raise number of concurrent connections');
  });
  robot.hear(/(cl deluge)/i, function(msg) {
    msg.send('V1.1.3.5-1: Public release');
    return msg.send('V1.1.3.5-2: Something was changed, not really that sure, give me a while and ask again.');
  });
};
// ---
// Script for AppBoxesCo use only V3.2
// ZyC0R3
// ---
// generated by js2coffee 2.2.0
// ---
