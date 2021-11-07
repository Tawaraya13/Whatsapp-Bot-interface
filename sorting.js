const file =  "contact.txt";


function insertcontact(file){
    let fs = require("fs");
    let text = fs.readFileSync(file).toString('utf-8');
    let textByLine = text.split("\n");
    return textByLine;
}

function readFile(file){
    let contact;
    let finalcontact;
    for (let j=0; j< file.length; j++ )
    {   
       contact = insertcontact(file[j]);  
        for(let i =0; i< contact.length; i++ ){
            finalcontact += contact[i];   
            console.log(finalcontact);
        }
    }
    return finalcontact;
}

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

function sort(file){
    let contact = insertcontact(file);
    let finalcontact = contact.filter((item, index) => contact.indexOf(item) == index);
    let fs = require("fs");
   // console.log("ada "+counter+" contact duplikat")
    fs.appendFile('2nnonduplicatecontact.txt', finalcontact, (err) => {
        if (err) throw err;
        console.log("file contact sudah dibuat nonduplicatecontact.txt")
    });
}

sort(file);


//18 + 29 + 62 +30 +33 + 38 + 69 +111 +148 +182 +212 +241 + 262 +303 +  330 + 33 + 355
/*
    for(let i =0; i< contact.length; i++ ){
        for(let k =0; k<contact.length; k++){
            if(contact[i] == contact[k]){
                counter =+ 1;
                finalcontact += contact[i];
                console.log(contact[i])
              }
            }
        }
        */