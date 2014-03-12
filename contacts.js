const CONTACTS_URL = '/owncloud/remote.php/carddav/addressbooks/francois/contacts';
const CONTACTS_USERNAME = 'francois';
const CONTACTS_PASSWORD = 'francois';

function reqListener() {
  var result = document.getElementById('result');
  result.textContent = this.responseText;
}

function getContacts() {
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("REPORT", CONTACTS_URL, true, CONTACTS_USERNAME, CONTACTS_PASSWORD);
  oReq.setRequestHeader('Depth', 1);
  oReq.setRequestHeader('Prefer', 'return-minimal');
  oReq.setRequestHeader('Content-Type', 'application/xml; charset=utf-8');
  oReq.send(
'<card:addressbook-query xmlns:d="DAV:" xmlns:card="urn:ietf:params:xml:ns:carddav">\
    <d:prop>\
        <d:getetag />\
        <card:address-data />\
    </d:prop>\
</card:addressbook-query>'
  );
}

function pushContact() {
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("PUT", CONTACTS_URL + '/sample.vcf', true, CONTACTS_USERNAME, CONTACTS_PASSWORD);
  oReq.setRequestHeader('Content-Type', 'text/vcard; charset=utf-8');
  oReq.send(
'BEGIN:VCARD\r\
VERSION:3.0\r\
UID:c653477fb0\r\
PRODID:-//ownCloud//NONSGML Contacts 0.2.5//EN\r\
REV:2014-03-12T01:55:24+00:00\r\
CATEGORIES:Friends\r\
FN:Elvis Gratton\r\
N:Gratton;Elvis;;;\r\
NICKNAME:Bob\r\
END:VCARD'
  );
}

var exportbtn = document.getElementById('export-button');
exportbtn.onclick = pushContact;

getContacts();
