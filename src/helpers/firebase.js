import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { successAlert, errorAlert, warningAlert } from "../helpers/AlertHelper";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);

export const register = async (email, password, name, surname) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, {
                displayName: `${name} ${surname}`
            }).then(() => {
                successAlert("Profil kaydı başarıyla oluşturuldu.")
            }).catch((error) => {
                warningAlert("Giriş bilgileriniz kaydedildi. Ancak isim soyisim bilginiz kaydedilemedi.");
            });
            return user;
    } catch (error) {
        console.log(error.code);
        errorAlert(error.message);
        return false
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        successAlert("Profilinize giriş başarılı.");
        return user;

    } catch (error) {
        console.log(error.code);
        errorAlert(error.message);
        return false;
    }
}

export const logout = async () => {
    await signOut(auth).then(() => {
        successAlert("Profilinizden çıkış başarılı.")
    }).catch((error) => {
        console.log(error.code);
        errorAlert(error.message);
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("logged in.");
    } else {
        console.log("logged out");
    }
});

export default app