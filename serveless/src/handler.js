module.exports.main = async (event) => {
  const [method, route] = event.routeKey.split(" ");

  let response = { statusCode: 404 };

  if (route === "/assets" && method === "GET") {
    const { getAssets } = require("./functions/assets");
    response = await getAssets();
  }

  if (route === "/assets" && method === "POST") {
    const { postAssets } = require("./functions/assets");
    response = await postAssets(event);
  }

  if (route.includes("/assets") && method === "DELETE") {
    const { deleteAssets } = require("./functions/assets");
    response = await deleteAssets(event);
  }

  if (RegExp(/sensors$/).test(route) && method === "GET") {
    const { getSensors } = require("./functions/sensors");
    response = await getSensors(event);
  }

  if (RegExp(/sensors$/).test(route) && method === "POST") {
    const { postSensors } = require("./functions/sensors");
    response = await postSensors(event);
  }

  if (RegExp(/sensors\/.{0,}/).test(route) && method === "DELETE") {
    const { deleteSensors } = require("./functions/sensors");
    response = await deleteSensors(event);
  }

  if (RegExp(/sensors\/.{0,}/).test(route) && method === "GET") {
    const { getCollets } = require("./functions/collets");
    response = await getCollets(event);
  }

  if (RegExp(/sensors\/.{0,}/).test(route) && method === "POST") {
    const { postCollets } = require("./functions/collets");
    response = await postCollets(event);
  }

  return response;
};
