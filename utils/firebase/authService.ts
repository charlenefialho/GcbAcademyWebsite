import {app} from "./firebaseService"
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseService";
import {addDoc, getFirestore, collection} from "firebase/firestore";

const db = getFirestore(app);

interface IUserRegister{
    name: string,
    email:string,
    password:string
}

export async function login(email:string, pass:string) {
    return signInWithEmailAndPassword(auth,email,pass);
}

export async function userRegister(data: IUserRegister){
    const userCredential = await createUserWithEmailAndPassword(auth,data.email,data.password);

    if(userCredential.user){
        await updateDisplayName(userCredential.user, data.name)
    }

    return userCredential.user;
}

async function updateDisplayName(user: User, name:string){
    await updateProfile(user, {displayName: name})
}

/*export async function register(name: string, email: string, pass: string){
    try{
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        const user = res.user;
        await addDoc(collection(db, "users"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    }catch(error){

    }
}*/

export async function logOut(){
    return signOut(auth);
}

export function onAuthChanged(callback:(user: User | null)=> void){
 return onAuthStateChanged(auth, callback);
}