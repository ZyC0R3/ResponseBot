# Description:
#   Hubot, Do my job for me.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   Basic Support responce
#   
module.exports = (robot) ->
# ---
# KB Version Info
# ---
  robot.hear /(what vaur|what VAUR)/, (msg) ->
    msg.send 'The current version of Responses that is loaded is V2'
# ---
# KB Responces
# ---
  robot.hear /(kb transmission remote)/, (msg) ->
    msg.send 'Your Guide to setting up Transmission Remote Gui: https://goo.gl/aRnxvw'
  robot.hear /(kb dht)/, (msg) ->
    msg.send 'Questions about DHT, Should you Disable it or not, Read this for more info:  https://goo.gl/gUjeXY'
  robot.hear /(kb raise a bug)/, (msg) ->
    msg.send 'You can raise or track the status of a bug or requested feature at https://git.cylo.io/cylo/cylo/boards _(You will need to create an account)_'
  robot.hear /(kb transdroid ru)/, (msg) ->
    msg.send 'Look no further for the settings for Transdroid (ruTorrent Set-Up Guide):  https://goo.gl/6kpGYk'
  robot.hear /(kb autodl-irssi|kb autodl)/, (msg) ->
    msg.send 'Need some help with Autodl-irssi, Take a look at this basic guide: https://goo.gl/jJz5qB'
  robot.hear /(kb port)/, (msg) ->
    msg.send 'Please update the app and the relevant port will be shown. If no update is avaliable then please let us know in chat to make sure there is no other reason you are missing the port'
  robot.hear /(kb slow speeds)/, (msg) ->
    msg.send '*STOP*, Before You Open a Ticket or Complain Something is Broken Read This: https://goo.gl/bpmBVf'
  robot.hear /(kb rutorrent errors)/, (msg) ->
    msg.send 'Check out this page on known and common ruTorrent issues and errors: https://goo.gl/RHouqh'
  robot.hear /(kb installing page)/, (msg) ->
    msg.send 'Stuck on the installing page, have a quick read: https://goo.gl/n3qeWi'
  robot.hear /(kb gs|kb getting started)/, (msg) ->
    msg.send 'New to AppBoxes, have a quick read of our getting started pages: https://goo.gl/wDprGi'
  robot.hear /(kb public html|kb public folder|kb public_html)/, (msg) ->
    msg.send 'So you looking at setting up a public_html Folder, look no further: https://goo.gl/WKwg9s'
    msg.send 'More Knowledge Base Articles to follow with further support with things link .htaccess and PHP directory scripts'
  robot.hear /(kb ftp)/, (msg) ->
    msg.send 'Click here for instrructions on setting up FTP: https://goo.gl/5toACz'
    msg.send 'And because im an all-knowing Bot, so I know you are going to ask at some point'
    msg.send 'Click here for instrructions on setting up SFTP: https://goo.gl/xMYSmy'
  robot.hear /(kb ticket|raise a ticket)/, (msg) ->
    msg.send 'Tickets can be raised on the existing support system at: https://billing.seedboxes.co/supporttickets.php'
# ---
# App Store Links
# ---
  robot.hear /(app plex)/, (msg) ->
    msg.send '*Plex:* Organize your videos, music, and photos. VLatest Requires 1 app slot: https://www.appboxes.co/appstore/app/37'
  robot.hear /(app wordpress)/, (msg) ->
    msg.send '*Wordpress:* WordPress is a free and open-source content management system. V4.9.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/87'
  robot.hear /(app ftp)/, (msg) ->
    msg.send '*Pure-FTPd:* Pure-FTPd is an FTP server. V1.0.36-1 Requires 1 app slot: https://www.appboxes.co/appstore/app/67'
  robot.hear /(app lamp|app lamp stack)/, (msg) ->
    msg.send '*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96'
  robot.hear /(app mattermost)/, (msg) ->
    msg.send '*Mattermost:* Workplace messaging for web, PCs and phones. V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95'
  robot.hear /(app rocket)/, (msg) ->
    msg.send '*Rocket Chat:* Rocket.Chat is the leading open source team chat software solution. V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89'
  robot.hear /(app lets chat)/, (msg) ->
    msg.send '*Lets Chat:* A self-hosted chat app for small teams built by Security Compass. V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88'
  robot.hear /(app ubuntu desktop|app vnc)/, (msg) ->
    msg.send '*Ubuntu Desktop (VNC):* This install includes VNC, SSH & Various Apps. V17.10 Requires 5 app slot: https://www.appboxes.co/appstore/app/85'
  robot.hear /(app ruTorrent)/, (msg) ->
    msg.send '*ruTorrent:* ruTorrent is a web frontend for rtorrent. V3.8-5 Requires 1 app slot: https://www.appboxes.co/appstore/app/66'
  robot.hear /(app deluge)/, (msg) ->
    msg.send '*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/68'
  robot.hear /(app transmission)/, (msg) ->
    msg.send '*Transmission:* Transmission is a BitTorrent client. V2.93 Requires 1 app slot: https://www.appboxes.co/appstore/app/77'
  robot.hear /(app flood)/, (msg) ->
    msg.send '*Flood:* A modern web UI for rTorrent. V1.0.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/82'
  robot.hear /(app ubuntu Server|app ssh)/, (msg) ->
    msg.send '*Ubuntu Server (SSH):* A simple SSH server. V17.10 Requires 5 app slot: https://www.appboxes.co/appstore/app/43'
  robot.hear /(app VPN|app vpn)/, (msg) ->
    msg.send '*VPN:* The Open Source VPN. V0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/69'
  robot.hear /(app nextcloud)/, (msg) ->
    msg.send '*Nextcloud:* Nextcloud - Protecting your data. V13.0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/71'
  robot.hear /(app madsonic)/, (msg) ->
    msg.send '*Madsonic:* Madsonic is a web-based media library. V6.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/72'
  robot.hear /(app resilio|app resilio sync)/, (msg) ->
    msg.send '*Resilio Sync:* Have Your Files Anywhere,Sync to all your devices. V2.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/73'
  robot.hear /(app mysql|app mariadb)/, (msg) ->
    msg.send '*MySQL (MariaDB):* A popular database server. Made by the original MySQL devs. V10.3 Requires 1 app slot: https://www.appboxes.co/appstore/app/74'
  robot.hear /(app nginx|app php|app php7)/, (msg) ->
    msg.send '*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75'
  robot.hear /(app znc)/, (msg) ->
    msg.send '*ZNC:* ZNC is an IRC network bouncer or BNC. V1.6 Requires 1 app slot: https://www.appboxes.co/appstore/app/81'
  robot.hear /(app rapidleech)/, (msg) ->
    msg.send '*Rapidleech:* Rapid Leech is a free server transfer script. V2.43 Requires 1 app slot: https://www.appboxes.co/appstore/app/78'
# ---
# App Store Categories
# ---
  robot.hear /(appcat chat)/, (msg) ->
    msg.send '*This is a list of applications that are categorised as Chat applications*'
    msg.send '*Mattermost:* V4.9.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/95'
    msg.send '*Rocket Chat:* V0.62.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/89'
    msg.send '*Lets Chat:* V0.4.8 Requires 1 app slot: https://www.appboxes.co/appstore/app/88'
  robot.hear /(appcat clients)/, (msg) ->
    msg.send '*This is a list of applications that are categorised as Torrent Clients*'
    msg.send '*ruTorrent:* ruTorrent is a web frontend for rtorrent. V3.8-5 Requires 1 app slot: https://www.appboxes.co/appstore/app/66'
    msg.send '*Deluge:* Deluge is a lightweight BitTorrent client. V1.3.15-2 Requires 1 app slot: https://www.appboxes.co/appstore/app/68'
    msg.send '*Transmission:* Transmission is a BitTorrent client. V2.93 Requires 1 app slot: https://www.appboxes.co/appstore/app/77'
    msg.send '*Flood:* A modern web UI for rTorrent. V1.0.0 Requires 1 app slot: https://www.appboxes.co/appstore/app/82'
  robot.hear /(appcat webserver)/, (msg) ->
    msg.send '*This is a list of applications that are categorised as Webservers*'
    msg.send '*Nginx & PHP7:* Nginx is a web server and can also be used as a reverse proxy, load balancer and HTTP cache. V1.13.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/75'
    msg.send '*Lamp Stack:* LAMP is a prebuild webserver. V3.7 Requires 1 app slot: https://www.appboxes.co/appstore/app/96'
  robot.hear /(appcat sync)/, (msg) ->
    msg.send '*This is a list of applications that are categorised under Sync*'
    msg.send '*Resilio Sync:* Have Your Files Anywhere,Sync to all your devices. V2.5 Requires 1 app slot: https://www.appboxes.co/appstore/app/73'
    msg.send '*Nextcloud:* Nextcloud - Protecting your data. V13.0.1 Requires 1 app slot: https://www.appboxes.co/appstore/app/71'
# ---
# Chat Triggers
# ---
  robot.hear /(%PORTS|100EXTERNAL%)/, (msg) ->
    msg.send 'Please update the app and the relevant port will be shown. If no update is avaliable then please let us know in chat to make sure there is no other reason you are missing the port'
  robot.hear /(set up SFTP)/, (msg) ->
    msg.send 'I knew someone was going to ask: instruction on setting up SFTP: https://goo.gl/xMYSmy'
  robot.hear /(504 [error,getplugins]|getplugins|error 504)/, (msg) ->
    msg.send '*STOP* do not restart your application or refresh the page, ruTorrent is known to have this issue. ruTorrent is single threaded on its XMLRPC interface, that means it cannot handle a whole load of commands at once very well. Therefore, when doing any actions, do a small chunk, wait for them to finish, then continue. If you still have this error after 30 mins please message an Admin or raise a ticket.'
  return

# ---
# Script for AppBoxesCo use only
# ZyC0R3
