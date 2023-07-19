import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseService";


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


export async function logOut(){
    return signOut(auth);
}

export function onAuthChanged(callback:(user: User | null)=> void){
 return onAuthStateChanged(auth, callback);
}