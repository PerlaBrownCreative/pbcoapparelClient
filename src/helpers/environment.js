let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:4000';
        break;
        case "pbcoapparelclient.herokuapp.com/":
            APIURL= 'https://pbcoapparel.herokuapp.com'
}

export default APIURL;