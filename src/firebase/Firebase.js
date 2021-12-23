/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, remove, set, update,get,onValue,on ,off,push, child} from "firebase/database";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDilkDqxacvmOa2lEDNxOl5Q_dpAA9dCh4",
  authDomain: "expensify-9c113.firebaseapp.com",
  databaseURL: "https://expensify-9c113-default-rtdb.firebaseio.com",
  projectId: "expensify-9c113",
  storageBucket: "expensify-9c113.appspot.com",
  messagingSenderId: "1044916304459",
  appId: "1:1044916304459:web:be65629762fe2a983a2bce",
  measurementId: "G-K3JCPRFP6E"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
export{db,ref, remove, set, update,get,onValue,off,push, child,auth, googleAuthProvider};
// export const auth = getAuth(app)



// get(ref(db,'expenses'),"Value")
// .then((snapShot) => {
//     const expenese = []
//     snapShot.forEach((childSnapShot) => {
//         expenese.push({
//             id:childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     })
//     console.log(expenese)
// })

// onValue(ref(db,"expenses"),("value",(snapShot) => {
//     console.log(snapShot.val())
// }),
//  (e) => {
//         console.log("The dat as been got som error",e)
//     })
// setting the array of data(when we are dealing with the array in the firebase we will use push)
// push(ref(db,"notes"),{
//     title:"Sofware Engginner",
//     city:"Inadia"
// })

// push(ref(db,"expenses"),{
//     descriptions:"RRR",
//     note:"Hello",
//     amount:"356",
//     createdAt:"34-09-09"
// })
// push(ref(db,"expenses"),{
//     descriptions:"RRR2",
//     note:"Hel",
//     amount:"356",
//     createdAt:"34-09-09"
// })
// push(ref(db,"expenses"),{
//     descriptions:"RRR3",
//     note:"Hel",
//     amount:"666",
//     createdAt:"34-09-09"
// })
//remove object from array in the firebase

// remove(ref(db,"notes/-MrMG_gx2bAa2guU7R-W"),{
//     title:"Manager"
// })
// updating the value evry time, inseat of on we are using onValue


// const onValueChange = onValue(ref(db),("Value",(snapShot) => {
//     console.log(snapShot.val())
// }), (e) => {
//     console.log("The dat as been got som error",e)
// })

// setTimeout(() => {
//   set(ref(db,"age"),40)
// },3500)
// setTimeout(() => {
//     set(ref(db,"age"),50)
//   },7000)
//   setTimeout(() => {
//     off(ref(db),onValueChange())
//   },7500)
 
// getting the data instead of once we are using get
// get(ref(db),"Value")
// .then((snapShot) => {
//     const val = snapShot.val()
//     console.log(val)
// }).catch((e) => {
//   console.log("Invalid data",e)
// })
// setting the data

//   set(ref(db), {
//     name:"naveen",
//     age:25,
//     stressLevel:3,
//     isSingle:false,
//     job:{
//       title:"Amazon",
//       location:"USA"
//     },
//     location:{
//         city:"Bangalore",
//         state:"Karnataka"
//     }
//   }).then(() => {
//     console.log("Data as Saved Successfully")
// }).catch((e) => {
//     console.log("The daa",e)
// })
// updating The data
// update(ref(db),{
//     stressLevel:9,
//     "job/title" :"Google",
//     "job/location":"India"
// })
// Addinng attribut
//   set(ref(db,"attribute"),{
//       height:5.6,
//       weight:60
//   }).then(() => {
//       console.log("Data as Saved Successfully")
//   }).catch((e) => {
//       console.log("The daa",e)
//   })

// remove(ref(db,"isSingle"))
// .then(() => {
//   console.log("Data remove success!")
// }).catch((e) => {
//     console.log("the error ",e)
// })
const analytics = getAnalytics(app);