import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors'
const input = process.argv[2];
const langCode = franc(input);
if(langCode==='und'){
    console.log("Sorry we couldn't find that language".red)
}
else{
    try{
        const language = langs.where('3', langCode);
        console.log(`our best guess is: ${language.name}`.green);
    }catch(err){
        console.log("Oh, I can't find that language in my table".red)
    }
}    
