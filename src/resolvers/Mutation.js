module.exports = {
  Mutation: {
    // get all threats, will be used to populate the homepage grid of our web client
    ThreatData: async (_, { url, clientId, clientVersion, threatTypes, platformTypes, threatEntryTypes }, { dataSources }) => {
      const threatMatches = await dataSources.threatAPI.ThreatData(url, clientId, clientVersion, threatTypes, platformTypes, threatEntryTypes);
      console.log(threatMatches)
      return(threatMatches)
    },
  },
};
