import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDodJUEr0HXp7DlxRjOc_D6vUCfD-nGf1M",
  authDomain: "dts2022-553b5.firebaseapp.com",
  projectId: "dts2022-553b5",
  storageBucket: "dts2022-553b5.appspot.com",
  messagingSenderId: "893334728791",
  appId: "1:893334728791:web:6fc0e736d318459e373312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const registerDenganEmaildanPassword = async (email, password) =>{
    try{

        const UseryangDidapatkan =await createUserWithEmailAndPassword(auth, email, password)
        console.log('user berhasil login adalah ',UseryangDidapatkan.user)
    } catch(e){
        console.log(e)
        console.log('error dari auth', e.code)
        console.log('error msg auth', e.message)
    }
}

const loginDenganEmailPassword = async (email, password) =>{
    try{

        const UseryangLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log("User yang berhasil login adalah ",UseryangLogin )
    } catch(e){
        console.log("error yang code auth ", e.code)
        console.log("error msg auth", e.message)
    }

}
const resetPasswordKarenaLupa = async (email)=>{
    try{
      await  sendPasswordResetEmail(auth, email)
    }
    catch(e){
        console.log(e)
    }
}
const keluarDariAplikasi = async () =>{
    try{
        await signOut(auth)
    } catch(e){
        console.log(e)
    }
}

export {
    auth, 
    registerDenganEmaildanPassword,
    loginDenganEmailPassword,
    resetPasswordKarenaLupa,
    keluarDariAplikasi
}