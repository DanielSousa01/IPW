import fs from "node:fs";
import fetch from "node-fetch";

const key = "k_iw34bd1e";
const outPutFileName = "outPut1";
const inPutFileName = "moviesId";

fs.readFile(inPutFileName + ".json", readJSON);

async function readAPI(id) {
  try {
    const data = await fetch(`https://imdb-api.com/en/API/Title/${key}/${id}`);
    const data_1 = await data.json();
    return {
      id: data_1.id,
      title: data_1.title,
      duration: parseInt(data_1.runtimeMins),
    };
  } catch (error) {
    return console.log(error);
  }
}

async function processData(list) {
  let finalSJONobj = { "total-duration": 0, movies: [] };

  const data = await Promise.all(list);
  try {
    finalSJONobj.movies = data;
    data.forEach((elem) => (finalSJONobj["total-duration"] += elem.duration));
    fs.writeFile(
      outPutFileName + ".json",
      JSON.stringify(finalSJONobj),
      writeFileJSON
    );
  } catch (error) {
    console.log(error);
  }
}

async function writeFileJSON(error) {
  if (error) console.log("Error ", error);
  else console.log("Success");
}

async function readJSON(error, data) {
  if (error) console.log(error);
  const obj = JSON.parse(data);
  const list = [];
  obj["movie-ids"].forEach((elem) => list.push(readAPI(elem)));
  processData(list);
}