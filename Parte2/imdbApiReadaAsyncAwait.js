import fs from "node:fs/promises";
import fetch from "node-fetch";

const key = "k_iw34bd1e";
const outPutFileName = "outPut1";
const inPutFileName = "moviesId";

async function main() {
  const data = await fs.readFile(inPutFileName + ".json");
  try {
    const obj = JSON.parse(data);
    console.log();
    const list = [];
    obj["movie-ids"].forEach((elem) => list.push(readAPI(elem)));
    writeFileJSON(list);
  } catch (error) {
    console.log(error);
  }
}

main();

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

async function writeFileJSON(list) {
  let finalSJONobj = { "total-duration": 0, movies: [] };

  const data = await Promise.all(list);
  try {
    finalSJONobj.movies = data;
    data.forEach((elem) => (finalSJONobj["total-duration"] += elem.duration));
    fs.writeFile(
      outPutFileName + ".json",
      JSON.stringify(finalSJONobj, null, 2)
    );
    try {
      console.log("SUCCESS");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
