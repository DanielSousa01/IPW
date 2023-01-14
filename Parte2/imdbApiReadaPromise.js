import fs from "node:fs/promises";
import fetch from "node-fetch";

const key = "k_iw34bd1e";
const outPutFileName = "outPut1"
const inPutFileName = "moviesId"

function main() {
  fs.readFile(inPutFileName + ".json")
.then((data) => {
  const obj = JSON.parse(data);
  const list = [];
    obj["movie-ids"].forEach((elem) => list.push(readAPI(elem)));
    writeFileJSON(list)
})
.catch((error) => console.log(error));
}

main()

function readAPI(id) {
  return fetch(`https://imdb-api.com/en/API/Title/${key}/${id}`)
    .then((data) => data.json())
    .then((data) => {
      return {id: data.id, title: data.title, duration: parseInt(data.runtimeMins), };
    })
    .catch((error) => console.log(error));
}

  function writeFileJSON(list) {
    
    let finalSJONobj = { "total-duration": 0, movies: [] };

  Promise.all(list)
    .then((data) => {
      finalSJONobj.movies = data;
      data.forEach((elem) => (finalSJONobj["total-duration"] += elem.duration));
      fs.writeFile(outPutFileName + ".json", JSON.stringify(finalSJONobj,null,2))
        .then(console.log("SUCCESS"))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

