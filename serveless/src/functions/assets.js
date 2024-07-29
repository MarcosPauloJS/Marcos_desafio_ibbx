
const db = require('../db/json-db.js')
const { v4: uuidv4 } = require('uuid');

module.exports =  {
  getAssets:  async (event) => {
    let data = {};
    try {
      data = await db.getData("/assets");
    } catch (_error) {
      console.log(_error);
    }
  
    return { statusCode: 200, body: JSON.stringify(data) };
  },
  postAssets: async (event) => {
    try {
      const body = JSON.parse(event.body)
      await db.push(`/assets/${uuidv4()}`, body);
      return { statusCode: 201 };
    } catch (_error) {
      console.log(_error);
      return { statusCode: 500, body: JSON.stringify(_error) };
    }
  },
  deleteAssets: async (event) => {
    try {
      if(event?.pathParameters?.id){
        await db.delete(`/assets/${event?.pathParameters?.id}`);
      }
      return { statusCode: 200 };
    } catch (_error) {
      console.log(_error);
      return { statusCode: 500, body: JSON.stringify(_error) };
    }
  }
}

