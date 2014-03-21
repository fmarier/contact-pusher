const CONTACTS_URL = 'http://moz.fruux.net';

function reqListener() {
  var result = document.getElementById('result');
  result.textContent = this.responseText;
}

function getCredentials() {
  navigator.id.get(function (assertion) {
    var data = {
      audience: 'http://localhost',
      assertion: assertion
    };

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('POST', CONTACTS_URL + '/browserid/login', true);
    oReq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    oReq.send(JSON.stringify(data));
  });
}

var getcreds_button = document.getElementById('getcreds-button');
getcreds_button.onclick = getCredentials;
