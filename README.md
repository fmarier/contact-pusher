This is a proof of concept for pushing VCards to a third-party
CardDAV server.

# Installation

To get this demo to work:

1. "apt-get install owncloud" into <http://localhost/owncloud>
2. copy this project into `/var/www/`
3. open it via <http://localhost/contact-pusher/contacts.html>

# Gaia app

Development for this has now moved to a [gaia branch](https://github.com/fmarier/gaia/tree/contact-pusher)
where the functionality can be found in the uitests-privileged
app, on a new button called "Push contacts".
