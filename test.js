const sulla = require('sulla');

const file ="neo banung.txt";
let pesan ="PALING VIRAL!!!! JOGET CORONA GAMPANG DAN SERU!"+"\n"+"Ga nonton pasti nyesel"+"\n"+"Copy Paste Link ini";
let url= "https://www.youtube.com/watch?v=P2ruxWKa9xA";
const filetosent = "\jogetcorona.jpg"; //nama file

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function readcontact(file){
  let fs = require("fs");
  let text = fs.readFileSync(file).toString('utf-8');
  let textByLine = text.split("\n");
  return textByLine;
}

async function start(client) {
  validcontact = readcontact(file);
  let i =0;
  console.log("proses kontak "+ validcontact[i]);
  sleep(Math.floor(Math.random() * 5000)+3000);
   await client.sendMessageToId("6282310001996"+'@c.us',pesan);
 await client.sendMessageToId("6282310001996"+'@c.us', url);
 await client.sendFile("6282310001996"+'@c.us',filetosent);
 sleep(Math.floor(Math.random() * 5000)+3000);
 i++;
 console.log("proses kontak "+ "6281537446703 ");
 sleep(Math.floor(Math.random() * 5000)+3000);
 await client.sendMessageToId("6281537446703@c.us",pesan);
 await client.sendMessageToId("6281537446703@c.us",url);
 await client.sendFile("6281537446703@c.us",filetosent);
 sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281548103592");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281548103592@c.us",pesan);
await client.sendMessageToId("6281548103592@c.us",url);
await client.sendFile("6281548103592@c.us",filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "628157104571")
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("628157104571@c.us",pesan);
await client.sendMessageToId("628157104571@c.us",url);
await client.sendFile("628157104571"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281572280186")
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281572280186@c.us",pesan);
await client.sendMessageToId("6281572280186@c.us",url);
await client.sendFile("6281572280186"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281573207227");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281573207227@c.us",pesan);
await client.sendMessageToId("6281573207227@c.us",url);
await client.sendFile("6281573207227"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281809125767");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281809125767@c.us",pesan);
await client.sendMessageToId("6281809125767@c.us",url);
await client.sendFile("6281809125767"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281910693332");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281910693332@c.us",pesan);
await client.sendMessageToId("6281910693332@c.us",url);
await client.sendFile("6281910693332"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281378601431");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281378601431@c.us",pesan);
await client.sendMessageToId("6281378601431@c.us",url);
await client.sendFile("6281378601431"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281927645937");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281927645937@c.us",pesan);
await client.sendMessageToId("6281927645937@c.us",url);
await client.sendFile("6281927645937"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
console.log("proses kontak "+ "6281931339088");
sleep(Math.floor(Math.random() * 5000)+3000);
await client.sendMessageToId("6281931339088@c.us",pesan);
await client.sendMessageToId("6281931339088@c.us",url);
await client.sendFile("6281931339088"+'@c.us',filetosent);
sleep(Math.floor(Math.random() * 5000)+3000);
i++;
}
sulla.create('testbaru').then((client) => start(client));
