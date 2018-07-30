# Description:
#  Helpbot, an Automated and (not so) Intuitive response Bot.
#  Hello and Good Morning Responses.
#  Tagged Users in Responses
#
# Dependencies:
#  None
#
# Configuration:
#  Install via internal Hubot with CoffeeScript or via npm install responsebot --save
#
# Commands:
#  KB = Knowledgebase Articles (Add users name to end of command to tag them in response)
#  App or App User = app "appname" "Target User"
#  APPCAT = appcat "category"
#  TS = Troubleshooting Basics
#  CL = Change Log for Updated Apps
#
# Author:
#  ZyC0R3
#  Rid
#
hellos = [
  'Well hello there, %'
  'Hey %, Hello!'
  'Marnin\', %'
  'Good day, %'
  'Good \'aye!, %'
]
mornings = [
  'Good morning, %'
  'Good morning to you too, %'
  'Good day, %'
  'Good \'aye!, %'
]

module.exports = (robot) ->
  # ---
  # --- Test Code for User VAR as it breaks every update
  # ---
  robot.hear /(app code) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == undefined
      msg.send ' *user == undefined* ' + user
    else if user == "undefined"
      msg.send ' *user == "undefined"* ' + user
    else if user == "undefined"
      msg.send ' Not undefined @' + user
    else if user == 0
      msg.send ' 0 ' + user
    else if user == null
      msg.send ' null' + user
    else
      msg.send ' Non Valid @' + user
  # ---
  # Hello and Good Morning, Author marioBonales, Edited for further use.
  # ---
  robot.hear /(hello|good( [d'])?ay(e)?)/i, (msg) ->
    hello = msg.random(hellos)
    msg.send hello.replace('%', msg.message.user.name)
  robot.hear /(^(good )?m(a|o)rnin(g)?)/i, (msg) ->
    hello = msg.random(mornings)
    msg.send hello.replace('%', msg.message.user.name)
  # ---
  # KB Version Info
  # ---
  robot.hear /(what vaur)/i, (msg) ->
    msg.send 'The current version of Responses that is loaded is V5.0.2'
  # ---
  # KB Responses with user Triggers
  # ---
  robot.hear /(kb dht) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Questions about DHT, Should you Disable it or not, Read this for more info:  https://goo.gl/gUjeXY'
    else msg.send '@' + user + ' Questions about DHT, Should you Disable it or not, Read this for more info:  https://goo.gl/gUjeXY'
  # ---
  robot.hear /(kb transdroid ru) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Look no further for the settings for Transdroid (ruTorrent Set-Up Guide):  https://goo.gl/6kpGYk'
    else msg.send '@' + user + ' Look no further for the settings for Transdroid (ruTorrent Set-Up Guide):  https://goo.gl/6kpGYk'
  # ---
  robot.hear /(kb autodl) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Need some help with Autodl-irssi, Take a look at this basic guide: https://goo.gl/jJz5qB'
    else msg.send '@' + user + ' Need some help with Autodl-irssi, Take a look at this basic guide: https://goo.gl/jJz5qB'
  # ---
  robot.hear /(kb slow speeds) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Before you open a ticket or complain something is broken read this: https://goo.gl/bpmBVf'
    else
      msg.send '@' + user + ' Before you open a ticket or complain something is broken read this: https://goo.gl/bpmBVf'
  # ---
  robot.hear /(kb rutorrent errors) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Check out this page on known and common ruTorrent issues and errors: https://goo.gl/RHouqh'
    else
      msg.send '@' + user + ' Check out this page on known and common ruTorrent issues and errors: https://goo.gl/RHouqh'
  # ---
  robot.hear /(kb installing page) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Stuck on the installing page, have a quick read: https://goo.gl/n3qeWi'
    else
      msg.send '@' + user + ' Stuck on the installing page, have a quick read: https://goo.gl/n3qeWi'
  # ---
  robot.hear /(kb (gs|getting started)) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[3])
    if user == "undefined"
      msg.send 'New to AppBoxes, have a quick read of our getting started pages: https://goo.gl/wDprGi'
    else
      msg.send '@' + user + ' New to AppBoxes, have a quick read of our getting started pages: https://goo.gl/wDprGi'
    # ---
  robot.hear /(kb public.?h?t?m?l?\b) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'So you\'re looking at setting up a public_html Folder, look no further: https://goo.gl/WKwg9s'
      msg.send 'More Knowledgebase Articles to follow with further support with things like .htaccess and PHP directory scripts'
    else
      msg.send '@' + user + ' So you\'re looking at setting up a public_html Folder, look no further: https://goo.gl/WKwg9s'
      msg.send 'More Knowledgebase Articles to follow with further support with things like .htaccess and PHP directory scripts'
  # ---
  robot.hear /(kb ftp) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send 'Click here for instructions on setting up FTP: https://goo.gl/5toACz'
    else
      msg.send '@' + user + ' Click here for instructions on setting up FTP: https://goo.gl/5toACz'
  # ---
  # App Store Links
  # ---
  robot.hear /(app plex) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Plex:* Organize your videos, music, and photos. (Plex Version is controlled in App) Requires 1 app slot: https://www.appboxes.co/appstore/app/37'
    else
      msg.send '@' + user + ' *Plex:* Organize your videos, music, and photos. (Plex Version is controlled in App) Requires 1 app slot: https://www.appboxes.co/appstore/app/37'
  # ---
  robot.hear /(app wordpress) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Wordpress:* WordPress is a free and open-source content management system. V4.9.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/87'
    else
      msg.send '@' + user + ' *Wordpress:* WordPress is a free and open-source content management system. V4.9.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/87'
  # ---
  robot.hear /(app ftp) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Pure-FTPd:* Pure-FTPd is an FTP server. V1.0.36-4 Requires 1 app slot: https://www.appboxes.co/appstore/app/67'
    else
      msg.send '@' + user + ' *Pure-FTPd:* Pure-FTPd is an FTP server. V1.0.36-4 Requires 1 app slot: https://www.appboxes.co/appstore/app/67'
  # ---
  robot.hear /(app (lamp(.?stack))) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[4])
    if user == "undefined"
      msg.send '*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96'
    else
      msg.send '@' + user + ' *Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96'
  # ---
  robot.hear /(app mattermost) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Mattermost:* Workplace messaging for web, PCs and phones. V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95'
    else
      msg.send '@' + user + ' *Mattermost:* Workplace messaging for web, PCs and phones. V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95'
  # ---
  robot.hear /(app (rocket(.?chat))) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[4])
    if user == "undefined"
      msg.send '*Rocket Chat:* Rocket.Chat is the leading open source team chat software solution. V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89'
    else
      msg.send '@' + user + ' *Rocket Chat:* Rocket.Chat is the leading open source team chat software solution. V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89'
  # ---
  robot.hear /(app lets chat) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Lets Chat:* A self-hosted chat app for small teams built by Security Compass. V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88'
    else
      msg.send '@' + user + ' *Lets Chat:* A self-hosted chat app for small teams built by Security Compass. V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88'
  # ---
  robot.hear /(app (ubuntu|vnc|ssh)) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[3])
    if user == "undefined"
      msg.send '*Ubuntu Desktop (VNC):* This install includes VNC, SSH & Various Apps. V18.04-1 Requires 5 app slot: https://www.appboxes.co/appstore/app/97'
    else
      msg.send '@' + user + ' *Ubuntu Desktop (VNC):* This install includes VNC, SSH & Various Apps. V18.04-1 Requires 5 app slot: https://www.appboxes.co/appstore/app/97'
  # ---
  robot.hear /(app rutorrent) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-16 Requires 1 app slot: https://www.appboxes.co/appstore/app/66'
    else
      msg.send '@' + user + ' *ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-16 Requires 1 app slot: https://www.appboxes.co/appstore/app/66'
  # ---
  robot.hear /(app deluge) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-4 Requires 1 app slot: https://www.appboxes.co/appstore/app/68'
    else
      msg.send '@' + user + ' *Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-4 Requires 1 app slot: https://www.appboxes.co/appstore/app/68'
  # ---
  robot.hear /(app transmission) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Transmission:* Transmission is a BitTorrent client. V2.94 Requires 1 app slot: https://www.appboxes.co/appstore/app/77'
    else
      msg.send '@' + user + ' *Transmission:* Transmission is a BitTorrent client. V2.94 Requires 1 app slot: https://www.appboxes.co/appstore/app/77'
  # ---
  robot.hear /(app flood) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Flood:* A modern web UI for rTorrent. V1.0.0-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/82'
    else
      msg.send '@' + user + ' *Flood:* A modern web UI for rTorrent. V1.0.0-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/82'
  # ---
  robot.hear /(app vpn) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*VPN:* The Open Source VPN. V0.1-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/69'
    else
      msg.send '@' + user + ' *VPN:* The Open Source VPN. V0.1-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/69'
  # ---
  robot.hear /(app nextcloud) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Nextcloud:* Nextcloud - Protecting your data. V13.0.4 Requires 1 app slot: https://www.appboxes.co/appstore/app/71'
    else
      msg.send '@' + user + ' *Nextcloud:* Nextcloud - Protecting your data. V13.0.4 Requires 1 app slot: https://www.appboxes.co/appstore/app/71'
  # ---
  robot.hear /(app madsonic) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Madsonic:* Madsonic is a web-based media library. V6.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/72'
    else
      msg.send '@' + user + ' *Madsonic:* Madsonic is a web-based media library. V6.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/72'
  # ---
  robot.hear /(app ((resil+io|bt.?sync))) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[4])
    if user == "undefined"
      msg.send '*Resilio Sync:* Have Your Files Anywhere, Sync to all your devices. V2.5-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/73'
    else
      msg.send '@' + user + ' *Resilio Sync:* Have Your Files Anywhere, Sync to all your devices. V2.5-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/73'
  # ---
  robot.hear /(app (mysql|mariadb)) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[3])
    if user == "undefined"
      msg.send '*MySQL (MariaDB):* A popular database server. Made by the original MySQL devs. V10.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/74'
    else
      msg.send '@' + user + ' *MySQL (MariaDB):* A popular database server. Made by the original MySQL devs. V10.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/74'
  # ---
  robot.hear /(app (nginx|php(7)?)) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75'
    else
      msg.send '@' + user + ' *Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75'
  # ---
  robot.hear /(app znc) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*ZNC:* ZNC is an IRC network bouncer or BNC. V1.6-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/81'
    else
      msg.send '@' + user + ' *ZNC:* ZNC is an IRC network bouncer or BNC. V1.6-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/81'
  # ---
  robot.hear /(app rapidleech) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Rapidleech:* Rapid Leech is a free server transfer script. V2.43 Requires 1 app slot: https://www.appboxes.co/appstore/app/78'
    else
      msg.send '@' + user + ' *Rapidleech:* Rapid Leech is a free server transfer script. V2.43 Requires 1 app slot: https://www.appboxes.co/appstore/app/78'
  # ---
  robot.hear /(app seat) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*SeAT:* A Simple, EVE Online API Tool and Corporation Manager. V2.0.19 Requires 1 app slot: https://www.appboxes.co/appstore/app/102'
    else
      msg.send '@' + user + ' *SeAT:* A Simple, EVE Online API Tool and Corporation Manager. V2.0.19 Requires 1 app slot: https://www.appboxes.co/appstore/app/102'
  # ---
  robot.hear /(app kodexplorer) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*kODExplorer:* A web based file manager,web IDE / browser based code editor. V4.25-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/103'
    else
      msg.send '@' + user + ' *kODExplorer:* A web based file manager,web IDE / browser based code editor. V4.25-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/103'
  robot.hear /(app gogs) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[2])
    if user == "undefined"
      msg.send '*Gogs:* A painless self-hosted Git service. V0.11.53 Requires 1 app slot: https://www.appboxes.co/appstore/app/111'
    else
      msg.send '@' + user + ' *Gogs:* A painless self-hosted Git service. V0.11.53 Requires 1 app slot: https://www.appboxes.co/appstore/app/111'
  # ---
  # App Store Categories
  # ---
  robot.hear /(appcat chat)/i, (msg) ->
    msg.send '*This is a list of applications that are categorised as Chat applications*'
    msg.send '*Mattermost:* V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95'
    msg.send '*Rocket Chat:* V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89'
    msg.send '*Lets Chat:* V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88'
  # ---
  robot.hear /(appcat (torrent|.?clients))/i, (msg) ->
    msg.send '*This is a list of applications that are categorised as Torrent Clients*'
    msg.send '*ruTorrent:* ruTorrent is a web front-end for rtorrent. V3.8-8 Requires 1 app slot: https://www.appboxes.co/appstore/app/66'
    msg.send '*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/68'
    msg.send '*Transmission:* Transmission is a BitTorrent client. V2.93 Requires 1 app slot: https://www.appboxes.co/appstore/app/77'
    msg.send '*Flood:* A modern web UI for rTorrent. V1.0.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/82'
  # ---
  robot.hear /(appcat webserver)/i, (msg) ->
    msg.send '*This is a list of applications that are categorised as Webservers*'
    msg.send '*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75'
    msg.send '*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96'
  # ---
  robot.hear /(appcat (cloud|sync))/i, (msg) ->
    msg.send '*This is a list of applications that are categorised under Sync*'
    msg.send '*Resilio Sync:* Have Your Files Anywhere,Sync to all your devices. V2.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/73'
    msg.send '*Nextcloud:* Nextcloud - Protecting your data. V13.0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/71'
  # ---
  # Chat Triggers
  # ---
  robot.hear /(%PORTS|100EXTERNAL%)/i, (msg) ->
    username = msg.message.user.name
    msg.send '@' + username + ' Please update the app and the relevant port will be shown. If no update is avaliable then please let us know in chat to make sure there is no other reason you are missing the port'
  # ---
  robot.hear /(500 \[error,getplugins\])/i, (msg) ->
    username = msg.message.user.name
    msg.send '*STOP*, @' + username + ' Investigations are ongoing into the causes of this error, there is a Troubleshooting step you can take to try and resolve this, this has a varying level of success for different users'
    msg.send 'It involves deleting unnecessary files from the rutorrent application folder, using FTP or any other file management method, navigate to `/apps/rutorrent.sample.appboxes.co/torrents/config/rutorrent/settings` and `/apps/rutorrent.sample.appboxes.co/torrents/config/rutorrent/users/sample/settings` and delete the folder called tasks, *MAKE SURE YOU ONLY DELETE THIS FOLDER AND NOTHING ELSE*'
    msg.send 'If you still have this error after 30 mins please holla at an Admin or raise a ticket. _(Type `Raise a Ticket` for more info)_'
  # ---
  robot.hear /(504 \[error,getplugins\])/i, (msg) ->
    username = msg.message.user.name
    msg.send '*STOP*, @' + username + ' do not restart your application or refresh the page. ruTorrent is single threaded on its XMLRPC interface, this means it can not manage an excessive amount of commands at once. Therefore, when doing any actions, do small chunks, wait for it to finish, then continue. If you still have this error after 30 mins please holla at an Admin or raise a ticket.'
    msg.send '_(Type `Raise a Ticket` for more info)_'
  # ---
  #robot.hear /(actively refused|(i|s?ftp) (can.?t connect(.*to s?ftp))|connection refused|ECONNREFUSED|(((s?ftp).*(port))|((port).*(s?ftp)))|s?ftp.*not.*working)/i, (msg) ->
    # Regex Test - https://regex101.com/r/Ne5pIs/5/tests
  #  username = msg.message.user.name
   # msg.send '@' + username + ' When any update is performed the port that is assigned to that app can sometimes be changed, First point of call is for you to check the port you are using is the correct port on your app settings page, click here to login and check: https://www.appboxes.co/appboxmanager/installedapps, If the port is a match however then please let us know in chat to make sure there is no other reason for this error.'
  #  msg.send 'If this error is FTP or SFTP related please type `ts ftp` for further support'
  # ---
  robot.hear /(SSL_ERROR_BAD_CERT_DOMAIN)/i, (msg) ->
    username = msg.message.user.name
    msg.send '@' + username + ' If this error is seen while using Firefox, although it directly relates to the appboxes.co website it is not an error with you accessing the page. This error is only produced on Firefox and means the app you are trying to install/update has not finished yet. If the same page is opened in Chrome or IE you would get the "Please Wait" landing page advising the same. Please do not raise a ticket for this reason, if however, you have been getting the "Please Wait" page for more than 30 mins holla at an admin or raise a ticket.'
    msg.send '_(Type `Raise a Ticket` for more info)_'
  # ---
  robot.hear /(who made you)/i, (msg) ->
    msg.send 'Zycore gave me life, Rid made me a real bot.'
  # ---
  robot.hear /((disk).*(quota|full))/i, (msg) ->
    username = msg.message.user.name
    msg.send '@' + username + ' If you have filled your Disk Quota, some applications will not work/load. In this case you will need to delete some data from your account to be able to continue to use your services. If the Disk Quota is full then the FTP App cant write to its logs/pid files and hence this is not an option to achive this.'
    msg.send 'Use the file explorer on your https://www.appboxes.co/appboxmanager/appboxes page, click on the appbox that has the full Disk Quota then click \'File Explorer\' top right hand corner below the logout button.'
    msg.send 'This File Explorer is owned by a privileged user and access the filesystem outside of the container so will work regardless  if your disk is full or not. Once you have deleted data it may take up to 15 minutes for services to reload, restarting applicaiton during this time will not speed this process up.'
  # ---
  robot.hear /((submit|raise) a?.*bug|issue tracker) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[3])
    if user == "undefined"
      username = msg.message.user.name
      msg.send '@' + username + ' You can raise or track the status of a bug or requested feature and submit a new one at https://git.cylo.io/cylo/cylo/boards _(You will need to create an account)_'
    else
      msg.send '@' + user + ' You can raise or track the status of a bug or requested feature and submit a new one at https://git.cylo.io/cylo/cylo/boards _(You will need to create an account)_'
  # ---
  robot.hear /((raise).*ticket) ?(?:@(\w*))?/i, (msg) ->
    user = escape(msg.match[3])
    if user == "undefined"
      msg.send 'Tickets can be raised on the existing support system at: https://billing.seedboxes.co/supporttickets.php'
    else
      msg.send '@' + user + ' Tickets can be raised on the existing support system at: https://billing.seedboxes.co/supporttickets.php'
#		robot.hear /(novnc)/i, (msg) ->
#    username = msg.message.user.name
#    msg.send '@' + username + ' If you are trying to use NoVNC to connect to the BETA version of Ubuntu Desktop (VNC) then this will not work, there is a known bug for this and is currently under investigation. Please do not raise a ticket for this issues. Refer to the Issue Tracker for further information _(Type \'Issue Tracker\' for more info)_'
#    msg.send 'If your issue is unrelated to to this then please ask for support here, hola at an admin (if other users are not able to support) or rasie a ticket. _(Type \'Raise a Ticket\' for more info)_'
  # ---
  # Simple Troubleshooting
  # ---
  robot.hear /(ts ftp)/i, (msg) ->
    msg.send 'Quick Troubleshooting Tips for FTP or SFTP'
    msg.send '1: Make sure the Port, Password, Username (For SFTP the username is: _root_) and Domain you are using is correct, Check here https://www.appboxes.co/appboxmanager/installedapps'
    msg.send '2: If the above does not work, and you are using FileZilla, remove the connection from connection manager and add it again.'
    msg.send '3: Try installing a second Pure-FTPd applicaiton on your AppBox, *DO NOT* remove the troubled instance, this is to test there is no other errors with your box or FTP globally.'
#    msg.send '4: Last and only option is try SFTP _(Type `kb sftp` for support setting it up)_, if this fails too then please holla at an admin'
    msg.send '4: Last and only option is to holla at an admin'
  robot.hear /(ts rutorrent)/i, (msg) ->
    msg.send 'Quick Troubleshooting Tips for ruTorrent'
    msg.send '1: First thing, and most important, *DO NOT* uninsatll ruTorrent, ruTorrent is single threaded on its XMLRPC interface, this means it doesn\'t manage excessive commands simultaneously. Therefore, when doing any actions, do a small chunk, wait for them to finish, then continue.'
    msg.send '2: If after 15 mins (note large amounts of data/actions can take longer, be proportionate) restart your instance of ruTorrent here: https://www.appboxes.co/appboxmanager/installedapps.'
    msg.send '3: Next is a bit of common sense, read the last hour or so of chat, are the admins dealing with a known issue, has it been reported, are you the only one effected. If it is known, being dealt with and you are not alone *JUST BE PATIENT* it will be fixed soon.'
    msg.send '4: If the first 3 dont help then please holla at an admin or raise a ticket. _(Type `Raise a Ticket` for more info)_'
  # ---
  # Change log
  # This is more of a location to store known changes to applciations as they are updated, it however is not a complete chagne log.
  # ---
  robot.hear /(cl rutorrent)/i, (msg) ->
    msg.send 'V3.8-2: Added ffmpeg'
    msg.send 'V3.8-3: Various fixes & stability improvements'
    msg.send 'V3.8-4: Performance updates, Fixed GeoIP, made /home viewable and added proxy settings to nginx'
    msg.send 'V3.8-5: Adjusted settings and timeout'
    msg.send 'V3.8-6: A Legacy file from a old version was overriding user settings and preventing seeding of torrents, this was removed.'
    msg.send 'V3.8-7: No changes to applcaiton files or settings, port mapping issue fixed'
    msg.send 'V3.8-8: Update which should fix any getplugins 504 timeout issues, however this is not gospel'
  robot.hear /(cl (cute|.?ftp(d)?))/i, (msg) ->
    msg.send 'V1.0.36-1: Raise number of concurrent connections'
    msg.send 'V1.0.36-2: Bug Fixes'
    msg.send 'V1.0.36-3: Multi-User support feature added'
  robot.hear /(cl deluge)/i, (msg) ->
    msg.send 'V1.3.5-1: Public release'
    msg.send 'V1.3.5-2: Fixed an issue where only 3 torrents would work simultaneously.'
  robot.hear /(cl ubuntu)/i, (msg) ->
    msg.send 'V18.04-1: Public release'
  return
# ---
# Script for AppBoxesCo use only V5.0.1
# ZyC0R3 - Rid
# ---
# generated by js2coffee 2.2.0
# ---
