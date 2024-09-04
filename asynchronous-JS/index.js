const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Bread:${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       console.log(res.body.message);

//       fs.writeFile("dog-image.txt", res.body.message, (err) => {
//         console.log("image Has Been Saved SuccessFully!");
//       });
//     });
// });

// const getDogPic = async () => {
//     await 
// };
