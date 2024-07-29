
const db = require('../db/json-db.js')

module.exports = {
  getCollets: async (event) => {
    let data = {};
    try {
      if(event?.pathParameters?.assetId && event?.pathParameters?.sensorId){
        data = await db.getData(`/assets/${event.pathParameters.assetId}/sensors/${event.pathParameters.sensorId}/collets`);
      }
    } catch (_error) {
      console.log(_error);
    }
  
    return { statusCode: 200, body: JSON.stringify(data) };
  },
  postCollets: async (event) => {
    try {
      const body = JSON.parse(event.body)
      if(event?.pathParameters?.assetId && event?.pathParameters?.sensorId){
        await db.push(`/assets/${event.pathParameters.assetId}/sensors/${event.pathParameters.sensorId}/collets[]`, body);
        return { statusCode: 201 };
      }
    } catch (_error) {
      console.log(_error);
      return { statusCode: 500, body: JSON.stringify(_error) };
    }
  },
}