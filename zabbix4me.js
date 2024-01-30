/*
params:
url:
impact:
source:
sourceId:
machineOs:
application:
X4MeAccount:
password:
userName:
apiKey:
 */

Zabbix.log(3, "Starting zabbix 4me integration");
//Teams
var wintelTeams = 31507;
var aixTeams = 31510;
var databaseTeams = 31513;
var DisasterandRecovery = 31509;
var Monitoring = 31508;
var SAP = 31505;
var StorageTeams = 31511;
var UIAM = 31506;
var YardimMasa = 31515;
var YerindeDestek = 31514;
var YerindeDestekBursa = 31576;
var YerindeDestekDenizli = 31577;
var YerindeDestekGordes = 31578;
var YerindeDestekHadimkoy = 31582;
var YerindeDestekIzmirMarla = 31585;
var YerindeDestekIzmirVestelkom = 31584;
var YerindeDestekLevent199 = 31581;
var YerindeDestekLuleburgaz = 31580;
var YerindeDestekManisa = 31579;


//Services
var databaseServices = 64123;
var systemManagementService = 64121;

//Users
var amirKhanUser = 3702553;

var fourme = {


    params: {},

    setParams: function(params) {
        if (typeof params !== 'object') {
            return;
        }

        forme.params = params;
        if (typeof fourme.params.url === 'string') {
            if (!fourme.params.url.endsWith('/')) {
                fourme.params.url += '/';
            }
        }
    },
    createRequest: function(params) {

        Zabbix.log(3, '4ME Webhook : parsed json in impact in createRequest: ' + params.impact);

        if (params) {
            var requestURL = "?"

            //impact
            if (params.impact) {
                requestURL += "&" + "impact=" + this.urlEncode(fourme.statusMapper(params.impact));
            }
            //Source
            if (params.source) {
                requestURL += "&" + "source=" + this.urlEncode(params.source);
            }
            //SourceId
            if (params.sourceID) {
                requestURL += "&" + "sourceID=" + this.urlEncode(params.sourceID);
            }
            //manager
            requestURL += "&" + "manager=" + this.urlEncode(amirKhanUser);

            // Append service parameter based on machineOs and monsolution
           Zabbix.log(3, "params.machineOs: " + params.machineOs + " params.monsolution: " + params.monsolution);
            if (params.machineOs === "Windows" && params.monsolution === "win") { // ["win", "exc7", "ad", "iis", "lync", "esx"].includes(params.monsolution)) {  //Win, Exc7, ad, iis, lync, vmware(esx)
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "exc7") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "exc7") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "ad") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "iis") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "lync") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "esx") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "aix") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            } else if (params.machineOs === "Windows" && params.monsolution === "mssql") { //mssql, mssc - Database 	Database
                requestURL += "&" + this.urlEncode("service=" + databaseServices);
            } else if (params.machineOs === "Windows" && params.monsolution === "mssc") {
                requestURL += "&" + this.urlEncode("service=" + databaseServices);
            } else if (params.machineOs === "Windows" && params.monsolution === "dbcpu") {
                requestURL += "&" + this.urlEncode("service=" + databaseServices);
            } else if (params.application === "vmware") {
                requestURL += "&" + this.urlEncode("service=" + systemManagementService);
            }

            // Append team parameter based on machineOs and application

            if (params.machineOs === "Windows" && params.monsolution === "win") { // ["win", "exc7", "ad", "iis", "lync", "esx"].includes(params.monsolution)) {  //Win, Exc7, ad, iis, lync, vmware(esx)
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "exc7") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "exc7") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "ad") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "iis") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "lync") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "esx") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            } else if (params.machineOs === "aix") {
                requestURL += "&" + this.urlEncode("team=" + aixTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "mssql") { //mssql, mssc - Database 	Database
                requestURL += "&" + this.urlEncode("team=" + databaseTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "mssc") {
                requestURL += "&" + this.urlEncode("team=" + databaseTeams);
            } else if (params.machineOs === "Windows" && params.monsolution === "dbcpu") {
                requestURL += "&" + this.urlEncode("team=" + databaseTeams);
            } else if (params.application === "vmware") {
                requestURL += "&" + this.urlEncode("team=" + wintelTeams);
            }


            /*
                        if (params.machineOs === "Windows" && ["win", "exc7", "ad", "iis", "lync", "esx"].includes(params.monsolution)) {
                            requestURL += "&" + this.urlEncode("team=" + wintelTeams);
                        } else if (params.machineOs === "aix") {
                            requestURL += "&" + this.urlEncode("team=" + aixTeams);
                        } else if (params.machineOs === "Windows" && ["mssql", "mssc"].includes(params.monsolution)) {
                            requestURL += "&" + this.urlEncode("team=" + databaseTeams);
                        }
            */
            //subject
            if (params.source && params.name) {
                requestURL += "&" + "subject=" + this.urlEncode(this.deleteUnwantedChars(params.source) + " : " + this.urlEncode(this.deleteUnwantedChars(params.name)) + " : Event ID: " + this.urlEncode(this.deleteUnwantedChars(params.sourceID)));
            }
            //note
            if (params.eventoptdata && params.source) {
                requestURL += "&" + "note=" + this.urlEncode(this.deleteUnwantedChars(params.eventoptdata) + " on " + this.deleteUnwantedChars(params.source) + " : Event ID: " + this.deleteUnwantedChars(params.sourceID));
            }
            //requestURL = requestURL.replace("?&", "?");
            Zabbix.log(3, "request url is : " + requestURL);

        } else
            Zabbix.log(3, "There is no parameters to send.");
        return requestURL;
    },
    /*  urlEncode: function(text) {
          try {
              while (text.includes(' ')) {
                  text = text.replace(' ', '%20');
              }
          } catch (error) {

          }
          return text;
      }, */

    urlEncode: function(text) {
        try {
            if (text.includes(' ')) text = text.replace(/ /g, '%20');
            //if (text.includes('%')) text = text.replace(/\%/, '%25%');
            /* if (text.includes('!')) text = text.replace(/\!/g, '%21');
            if (text.includes('"')) text = text.replace(/\"/g, '%22');
            if (text.includes('#')) text = text.replace(/\#/g, '%23');
            if (text.includes('$')) text = text.replace(/\$/g, '%24');
            if (text.includes('%')) text = text.replace(/\%/g, '%25');
            if (text.includes('&')) text = text.replace(/\&/g, '%26');
            if (text.includes('\'')) text = text.replace(/\'/g, '%27');
            if (text.includes('(')) text = text.replace(/\(/g, '%28');
            if (text.includes(')')) text = text.replace(/\)/g, '%29'); 
            if (text.includes('*')) text = text.replace(/\*\/g, '%2A');
            if (text.includes('+')) text = text.replace(/\+/g, '%2B');
            if (text.includes(',')) text = text.replace(/\,/g, '%2C');
            if (text.includes('-')) text = text.replace(/\-/g, '%2D');
            if (text.includes('.')) text = text.replace(/\./g, '%2E');
            if (text.includes('/')) text = text.replace(/\//g, '%2F');
            if (text.match(/[0-9]/)) {
              text = text.replace(/[0-9]/g, function(match) {
                return '%' + match.charCodeAt(0).toString(16).toUpperCase();
              });
            }
            if (text.includes(':')) text = text.replace(/\:/g, '%3A');
            if (text.includes(';')) text = text.replace(/\;/g, '%3B');
            if (text.includes('<')) text = text.replace(/\</g, '%3C');
            if (text.includes('=')) text = text.replace(/\=/g, '%3D');
            if (text.includes('>')) text = text.replace(/\>/g, '%3E');
            if (text.includes('?')) text = text.replace(/\?/g, '%3F');
            if (text.includes('@')) text = text.replace(/\@/g, '%40');
            if (text.match(/[A-Z]/)) {
              text = text.replace(/[A-Z]/g, function(match) {
                return '%' + match.charCodeAt(0).toString(16).toUpperCase();
              });
            }
            if (text.includes('[')) text = text.replace(/\[/g, '%5B');
            if (text.includes(']')) text = text.replace(/\]/g, '%5D');
            if (text.includes('^')) text = text.replace(/\^/g, '%5E');
            if (text.includes('_')) text = text.replace(/\_/g, '%5F');
            if (text.includes('`')) text = text.replace(/\`/g, '%60');
            if (text.match(/[a-z]/)) {
              text = text.replace(/[a-z]/g, function(match) {
                return '%' + match.charCodeAt(0).toString(16).toUpperCase();
              });
            } 
            if (text.includes('{')) text = text.replace(/\{/g, '%7B');
            if (text.includes('|')) text = text.replace(/\|/g, '%7C');
            if (text.includes('}')) text = text.replace(/\}/g, '%7D');
            if (text.includes('~')) text = text.replace(/\~/g, '%7E'); */
        } catch (error) {

        }
        return text;
    },

    deleteUnwantedChars(text) {
        try {
            if (text.includes('%'))
                text = text.replace(/\%/g, "%25");
        } catch (error) {

        }
        return text;
    },
    makeDateTime: function(eventDate, eventTime) {
        return eventDate + "T" + eventTime;
    },
    statusMapper: function(impact) {

        return {
            '0': 'none',
            '1': 'low',
            '2': 'medium',
            '3': 'medium',
            '4': 'high',
            '5': 'top'
        } [impact] || 'none';
    },
    setProxy: function(HTTPProxy) {
        fourme.HTTPProxy = HTTPProxy;
    },
    request: function(method, params) {
        var response,
            url = params.url + "/" + fourme.createRequest(params),
            request = new HttpRequest();

        request.addHeader('Content-Type: application/json');
        request.addHeader('charset:utf-8');
        request.addHeader('X-4me-Account:' + params.X4MeAccount);

        if (fourme.params.userName == "" || params.password == "") {
            Zabbix.log(1, "Authorization: Bearer  used")
            request.addHeader('Authorization: Bearer ' + params.apiKey);
        } else {
            request.addHeader('Authorization: Basic ' + btoa(params.userName + ":" + params.password));
            Zabbix.log(1, "Authorization: Basic  used")

        }
        if (typeof fourme.HTTPProxy !== 'undefined' && fourme.HTTPProxy !== '') {
            request.setProxy(fourme.HTTPProxy);
        }

       // if ((params.impact === "4" || params.impact === "5") && (params.status === "PROBLEM")) {
            Zabbix.log(3, '4ME Webhook : Sending request: ' + url);

            response = request.post(url);

            Zabbix.log(3, '4ME Webhook : Received response with status code ' + request.getStatus() + '\n' + response);
        //} else {
         //  Zabbix.log(3, '4ME Webhook : Script skipped ticketing for Minor,Major and Warning alarms .');
       //}

        if (response !== null) {
            try {
                response = JSON.parse(response);
                Zabbix.log(3, '4ME Webhook : Parsed 4ME Application Id:'+response.id);
                return response.id;

            } catch (error) {
                Zabbix.log(3, '4ME Webhook : Failed to parse response received from 4ME');
                response = null;
            }
        }
        const status = request.getStatus();

        if (status < 200 || status >= 300 || status === null) {
            const message = 'Request failed with status code ' + (status !== null ? status : '') + '\n' + response;
        }
        

    }, 
    requestZabbix: function(params,key) {
        url=params.zabbixUrl+"/zabbix/api_jsonrpc.php";
        request = new HttpRequest();
         request.addHeader('Content-Type: application/json-rpc');
          var data = "{"
    "jsonrpc: 2.0",
    "method : event.acknowledge",
    "params: {"
        "eventids:" + params.sourceID  ,
        "action : 6",
        "message: "  + "4me Ticket is " + key ,
   " }",
    "auth: " + params.apiKey,
    "id:1",
"}";
      try{

            response = request.post(url,data);
        Zabbix.log(3, '4ME Webhook : Succesfully connected to Zabbix');

      } catch(error){
        Zabbix.log(4, '4ME Webhook : Failed to connect Zabbix problem description below \n'+response);

      }

      




    }
};

try {
    Zabbix.log(3, '4ME Webhook : Started with params: ' + value);

    var params = JSON.parse(value);
    var key=fourme.request("post", params);

    result = {tags: {}}
    result.tags.__zbx_4ME_issuekey = key;
    result.tags.__zbx_4ME_issuelink = "https://kyndryl-support.4me.qa/problems/"+key;
    Zabbix.log(3, ' 4me Webhook id: ' + key);
    fourme.requestZabbix(params,key);
    return JSON.stringify(result);

} catch (error) {
    Zabbix.log(4, ' 4me Webhook ERROR: ' + error);
    //throw 'Sending failed: ' + error;
}
