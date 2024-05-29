const { RESTDataSource } = require("@apollo/datasource-rest");

class ThreatAPI extends RESTDataSource {

  
    baseURL = "https://safebrowsing.googleapis.com/";


    ThreatData(url, clientId, clientVersion, threatTypes, platformTypes, threatEntryTypes) {
      return this.post(
        `/v4/threatMatches:find?key=AIzaSyAagFCpCc6mu5M4d9ScnhDC4AiLAaf-JAk`, //path
        { body: 
          {
            "client": {
              "clientId":      clientId,
              "clientVersion": clientVersion
            },
            "threatInfo": {
              "threatTypes":      threatTypes,
              "platformTypes":    platformTypes,
              "threatEntryTypes": threatEntryTypes,
              "threatEntries":  
                {"url": url}
            }
          }
        },
      );
    }
  };
  module.exports = ThreatAPI;