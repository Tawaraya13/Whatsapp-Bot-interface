const express = require('express');
const app = express();
const multer = require('multer')
const venom = require('venom-bot');
const fs = require('fs-extra');
const spin = require('string-content-spinner');
const router = express.Router()


var message; //user isi sendiri nanti
var filetosent = __dirname+"/public/userimage/"+gambar;
var gambar;
var caption;
//var sulla = require("./sulla");

const multerConfig = {
    
  storage: multer.diskStorage({
   //Setup where the user's file will go
   destination: function(req, file, next){
     next(null, './public/photo-storage');
     },   
      
      //Then give the file a unique name
      filename: function(req, file, next){
          console.log(file);
          const ext = file.mimetype.split('/')[1];
          const picture = file.fieldname + '-' + Date.now() + '.'+ext;
          gambar = picture;
          next(null, picture);
        }
      }),   
      
      //A means of ensuring only images are uploaded. 
      fileFilter: function(req, file, next){
            if(!file){
              next();
            }
          const image = file.mimetype.startsWith('image/');
          if(image){
            console.log('photo uploaded');
            next(null, true);
          }else{
            console.log("file not supported");
            
            //TODO:  A better message response to user on failure.
            return next();
          }
      }
    };

//sulla.initialize();



app.set('view engine', 'pug'); 

app.use(express.static(__dirname + '/public'));

  const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
 });
 

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.post('/upload',multer(multerConfig).single('photo'),function(req,res){
    res.send('Complete!');
 });


 const startBot = async (name, attempt) => {
  serverName = name;

  const cacheExists = await fs.pathExists(`./${name}`);
  if (cacheExists) {
      fs.remove(`./${name}/Default/Service Worker/Database/MANIFEST-000001`);
  }

  let counter = 1;
  let authPassed = false;
  let qrSended = false;
  attempt = attempt ? attempt : 3;
  setTimeout(() => {
      if (!authPassed && !qrSended) console.log('error', 'Starting Bot Timeout');
  }, (30000 * attempt) + 5000);

  venom.create(name,
  (base64Qr) => {
      if (counter <= attempt) {
          qrSended = true;
          console.log('auth', `Sending QR [${counter}]`);
          router.get('/qr/:text', function(req,res){
          //var code = {qr: base64Qr};
          const qrCode = base64Qr.replace('data:image/png;base64,', '');
          const imageBuffer = Buffer.from(qrCode, 'base64');
            res.setHeader('Content-type', 'image/png');
            qrCode.pipe(res);
         });
          counter++;
      } else {
          console.log('error', 'QR Auth Not Scanned');
      }
  }, (logInStatus) => { console.log(logInStatus);
  }, {logQR: false}).then(
      (wa) => {
          authPassed = true;
          server = wa;
          send('auth', 'Whatsapp Authenticated!', { connected: true });
          server.onMessage((serverMessage) => {
              messageHandler(serverMessage);
          });
          server.onStateChange((state) => {
              send('log', `Session: ${state}`);
              const conflits = [
                  venom.SocketState.CONFLICT,
                  venom.SocketState.UNPAIRED,
                  venom.SocketState.UNLAUNCHED,
              ];
              if (conflits.includes(state)) {
                  server.useHere();
              }
          });
      },
      (err) => {
          console.log('VENOM ERROR: ', err);
          send('error', err);
      }
  );
}
const restartServer = (from) => {
  if (from) { server.sendText(from, 'Merestart ulang server...')};
  send('log', `Restarting ${serverName}...`);
  server.close().catch((err) => console.log(err));
  startBot(serverName);
}


startBot("test", "1");
