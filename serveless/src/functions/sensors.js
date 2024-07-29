
const db = require('../db/json-db.js')
const { v4: uuidv4 } = require('uuid');

module.exports = {
  getSensors: async (event) => {
    let data = {};
    try {
      if(event?.pathParameters?.assetId){
        data = await db.getData(`/assets/${event.pathParameters.assetId}/sensors`);
      }
    } catch (_error) {
      console.log(_error);
    }
  
    return { statusCode: 200, body: JSON.stringify(data) };
  },
  postSensors: async (event) => {
    try {
      const body = JSON.parse(event.body)
      if(event?.pathParameters?.assetId){
        await db.push(`/assets/${event.pathParameters.assetId}/sensors/${uuidv4()}`, body);
        return { statusCode: 201 };
      }
    } catch (_error) {
      console.log(_error);
      return { statusCode: 500, body: JSON.stringify(_error) };
    }
  },
  deleteSensors: async (event) => {

    const deleteCollet = async () => {
      const index = await db.getIndex(`/assets/${event.pathParameters.assetId}/sensors/${event.pathParameters.sensorId}/collets`, event.queryStringParameters?.date, "date");
      if(index > -1){
        await db.delete(`/assets/${event.pathParameters.assetId}/sensors/${event.pathParameters.sensorId}/collets[${index}]`)
        deleteCollet()
        console.log('here');
      }
      else {
        console.log('fim');
        return { statusCode: 200 };
      }
    }

    try {
      if(event.queryStringParameters?.date){
        if(event?.pathParameters?.assetId && event?.pathParameters?.sensorId){
          await deleteCollet();
        }
        return { statusCode: 200 };
      }
      else if (event?.pathParameters?.assetId && event?.pathParameters?.sensorId){
        await db.delete(`/assets/${event.pathParameters.assetId}/sensors/${event.pathParameters.sensorId}`);
      }
      return { statusCode: 200 };
    } catch (_error) {
      console.log(_error);
      return { statusCode: 500, body: JSON.stringify(_error) };
    }
  }
}