//Supports ES6

const venom = require('venom-bot');
const XLSX = require('xlsx');
const spin = require('string-content-spinner');
var Spinner = require('cli-spinner').Spinner;


const message = "paling !5 !!! Joget Corona"; //user isi sendiri nanti
const filetosent = __dirname+"/public/userimage/jogetcorona.jpg"; //nama file public\userimage\jogetcorona.jpg
const caption = "PALING VIRAL!!!! JOGET CORONA GAMPANG DAN SERU!"+"\n"+" Ga nonton pasti nyesel"; // user isi sendiri nanti
const url= "https://www.youtube.com/watch?v=P2ruxWKa9xA";
//const fileExcel ="Contacts Grub WA tata.xlsx";
const fileExcel ="contacttocvtest.xlsx";

const gambar1 = __dirname+"/public/userimage/aigner.jpg";
const gambar2 = __dirname+"/public/userimage/coach.jpg";
const gambar3 = __dirname+"/public/userimage/vuittion.jpg";

const linkgambar1= 'https://shopee.co.id/Tas-Aigner-i.76131724.5332903177';
const linkgambar2= 'https://shopee.co.id/Tas-Coach-i.76131724.6032902265';
const linkgambar3= 'https://shopee.co.id/Tas-Louis-Vuitton-i.76131724.5232903881';

const caption1 = "Tas Aigner Rp250.000"+"\n"+"https://shopee.co.id/Tas-Aigner-i.76131724.5332903177";
const caption2 = "Tas Coach Rp300.000"+"\n"+"https://shopee.co.id/Tas-Coach-i.76131724.6032902265";
const caption3 = "Tas Louis Vuitton Rp100.000"+"\n"+"https://shopee.co.id/Tas-Louis-Vuitton-i.76131724.5232903881";


let contactkirim;

function readexcel(file){
  var workbook = XLSX.readFile(file);
  var o = { };
  var result;
  var nomorcontact= [];
  workbook.SheetNames.forEach(function(name) {
    o[name] = XLSX.utils.sheet_to_json(workbook.Sheets[name]); 
    o[name].forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
          if (key == 'nomor'){
            //console.log(`${key} ${value}`);
            nomorcontact.push(obj.nomor);
          }
      });
    });
});
  return(nomorcontact);
}

function readcontact(file){
  let fs = require("fs");
  let text = fs.readFileSync(file).toString('utf-8');
  let textByLine = text.split("\n");
  return textByLine;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


async function check(client,file){
  process.on('SIGINT', function() {
    client.close();
  });
  let validcontact =[];
  let textcontact;
  var spinner = new Spinner('processing.. %s');
  spinner.setSpinnerString('|/-\\');
  spinner.start();
  //const file = ["Sumber fakenumber dot net Campur 5 30 May 2020.txt","Sumber fakenumber dot net Campur 6 30 May 2020.txt","Sumber fakenumber dot net Campur 7 30 May 2020.txt","Sumber fakenumber dot net Campur 8 30 May 2020.txt","Sumber fakenumber dot net Campur 9 30 May 2020.txt","Sumber fakenumber dot net Campur 10 30 May 2020.txt","Sumber fakenumber dot net Campur 12 30 May 2020.txt","Sumber fakenumber dot net Campur 13 30 May 2020.txt","Sumber fakenumber dot net campur 14 30 May 2020.txt","Sumber fakenumber dot net Campur 15 30 May 2020.txt","Sumber fakenumber dot net Campur 16 30 May 2020.txt"];
  const contactbook = await readexcel(file);
  // console.log(contaactbook[name]);
  
  for (let i=0; i< contactbook.length; i++ )
  {
      const profile = await client.getNumberProfile(contactbook[i]+'@c.us');
      if (profile.status == 200){
        validcontact.push(contactbook[i]);
        textcontact += contactbook[i] + "\n ";
        //console.log(contactbook[i]);
        //console.log('contact ok');
      }
      else console.log("contact not foun "+contactbook[i])
      if (i==contactbook.length){
        spinner.stop();
      }
  }
  let fs = require("fs");
  await fs.appendFile(__dirname+"/contactsent/"+file+" valid .txt", textcontact, function (err) {
    if (err) throw err;
    console.log('contact Verified!');
  });
  return validcontact;
}


async function start(client) {
  process.on('SIGINT', function() {
    client.close();
  });
  
  //let contact = await check(client,fileExcel);
  //let contact = readcontact(__dirname+"/contactsent/"+"contacttocvtest.xlsx valid .txt");
  //let contact = readcontact(__dirname+"/contactsent/contact.txt")
  let contact = [6282310001996,6287888999910,6288802345317,
6281385661634,
6281386420311,
6281392132432,
6281398190507,
6281398455618,
6281398831651,
6281398948854,
6281511003537,
6281514325917,
6281567799110,
6281578305974,
6281585332814,
6281585409095,
628159352348,
628159550612,
628175462199,
62817787683,
6281807930800,
6281808003201,
6281809358558,
62818301956,
62818829471,
62818870287,
6281934111983,
6282110599588,
6282111370410,
6282111473339,
6282111817685,
6282111878499,
6282112999620,
6282113630127,
6282114228567,
6282119633963,
6282122977477,
6282125415824,
6282125898591,
6282126001672,
6282127968887,
6282133998602,
6282165978188,
6282170340575,
6282178217980,
6282185690062,
6282211178873,
6282299462732,
6285210205622,
6285210378406,
6285212454367,
6285213027170,
6285217287810
  ]
  //console.log(contact);


  let j =0 ;
  var spinner = new Spinner('processing.. %s');
  spinner.setSpinnerString('|/-\\');
  spinner.start();
  for (const i of contact) {
    //const result = spin("{Hi|Hai|Haloo|Halo...} {Bro|Sis} Ada {yg|yang} sedang Virall!!"+"\n"+"JOGET CORONA GAMPANG DAN SERU!"+"\n"+" Ga nonton pasti nyesel");
    const pesantas = spin("{Hi|Hai|Haloo|Halo...} {Bro|Sis} Ada {yg|yang} Tas Murah nih!!");
    sleep((Math.random() * 2000)+1000);

      //console.log(contact[j].toString());
      // Start typing...
   // await client.startTyping(contact[j]);
      // Stop typing
    //console.log("trying to sen"+contact[j]);
   // delay(5000);
   // await client.stopTyping(contact[j]);

    console.log("timeout time");
  // await client.sendText(contact[j]+'@c.us',result);
  //  await client.sendText(contact[j]+'@c.us', url);
  //  await client.sendImage(contact[j].toString()+'@c.us',filetosent,filetosent,caption);
  //  console.log("sen message to "+contact[j]);
  await client.sendText(contact[j]+'@c.us',pesantas);
  await client.sendImage(contact[j].toString()+'@c.us',gambar1,gambar1,caption1);
  sleep((Math.random() * 2000)+1000);
  await client.sendImage(contact[j].toString()+'@c.us',gambar2,gambar2,caption2);
  sleep((Math.random() * 2000)+1000);
  await client.sendImage(contact[j].toString()+'@c.us',gambar3,gambar3,caption3);
  sleep((Math.random() * 2000)+1000);


    sleep((Math.random() * 10000)+5000);
   j++;
   if (j == 57 ){
    spinner.stop();
    console.log("finish")
   }
  }

  spinner.stop();

  console.log("finish")
}
venom.create().then((client) => start(client));
//start();
//venom.create().then((client) =>check(client,fileExcel));

// alaamat untuk session D:\work folder\pijar-web-control-tower-master\whatsapp wrapper\whats app spam\session\Default\Service Worker\Database










/////   UI wont look until finish sen automatic an spin text


module.exports.initialize =function() {
  const fs = require('fs');

  process.on('SIGINT', function() {
    client.close();
    fs.unlink('public/marketing-qr.png',(err) => {
      if (err) throw err;
      console.log('path/file.txt was deleted');
    });
    fs.rmdir('/session-marketing', { recursive: true });
  });

// Second create() parameter is the QR callback
venom.create('session-marketing', (base64Qr, asciiQR) => {
  // To log the QR in the terminal
  console.log(asciiQR);

  // To write it somewhere else in a file
  exportQR(base64Qr, 'public/marketing-qr.png');
  console.log("system wait for user to input")
});

// Writes QR in specified path
async function exportQR(qrCode, path) {
  qrCode = qrCode.replace('data:image/png;base64,', '');
  const imageBuffer = Buffer.from(qrCode, 'base64');

  // Creates 'marketing-qr.png' file
  await fs.writeFileSync(path, imageBuffer);
}
}

