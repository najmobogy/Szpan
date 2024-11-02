import fs from 'fs'







fs.watch("./testfolder", (eventType, filename)=>{
    if(filename){
        try {
        fs.appendFileSync('logs.txt', `wykryto zdarzenie ${eventType}, w pliku ${filename} \n`);
        console.log('Zapisano do pliku!');
            } catch (error) {
        console.error('Błąd podczas zapisu do pliku:', error);
        }
    } else{
        try {
    fs.appendFileSync('logs.txt', `zdarzenie${eventType} \n`);
            console.log('Zapisano do pliku!');
    } catch (error) {
    console.error('Błąd podczas zapisu do pliku:', error);
    }
    }
})

console.log("nasluchiwanie zmian")