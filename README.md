# How to get here
npx create-react-app my-app  
create a react app!  

 npm i firebase         

 create app/src/config/firebase_config.js
 Add firebase config in this file  
 
 go to firebase console and clik on "Add firebaase to your web app" 
 copy the varible and not the script tags
 this is your firebase secret and you don't wnat to commit this to any version control  
 then you'll have to export this const `export const db_config` . 


in root index.js add  

```
import { DB_CONFIG } from './config/firebase_config';
import firebase from 'firebase';

try {
    firebase.initializeApp(DB_CONFIG);
  } catch (e) {
    console.log("firebare init error")
}
```

add this to app.js 

`import firebase from 'firebase/app';`  
to access firebase db, ('test' is a obj in the DB I added)  
`const rootRef = firebase.database().ref('test');`


