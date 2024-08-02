module.exports.main = async (event) => {
  const [method, route] = event.routeKey.split(" ");

  let response = { statusCode: 404 };

  if (RegExp(/assets$/).test(route)) {
    switch (method) {
      case 'GET':
        const { getAssets } = require("./functions/assets");
        response = await getAssets();
        break;
      case 'POST':
        const { postAssets } = require("./functions/assets");
    response = await postAssets(event);
        break;
      default:
        break;
    }
  }

  if (RegExp(/assets\/[0-9A-Za-z-]{0,}$/).test(route)) {
    switch (method) {
      case 'DELETE':
        const { deleteAssets } = require("./functions/assets");
        response = await deleteAssets(event);
        break;
    
      default:
        break;
    }
  }
  if (RegExp(/sensors$/).test(route)) {
    switch (method) {
      case 'GET':
        const { getSensors } = require("./functions/sensors");
        response = await getSensors(event);
        break;
      case 'POST':
        const { postSensors } = require("./functions/sensors");
        response = await postSensors(event);
        break;
      default:
        break;
    }
  }

  if (RegExp(/sensors\/[0-9A-Za-z-]{0,}/).test(route)) {
    switch (method) {
      case 'GET':
        const { getCollets } = require("./functions/collets");
    response = await getCollets(event);
        break;
      case 'POST':
        const { postCollets } = require("./functions/collets");
    response = await postCollets(event);
        break;
      case 'DELETE':
        const { deleteSensors } = require("./functions/sensors");
        response = await deleteSensors(event);
        break;
      default:
        break;
    }
  }
  return response;
};
