import { initializeApp } from "firebase/app";
import { useState, useEffect, useCallback } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCM-INIahKIEGFV0Cu28rwN-xOfvnZwx54",
    authDomain: "quickreact-a58e9.firebaseapp.com",
    databaseURL: "https://quickreact-a58e9-default-rtdb.firebaseio.com",
    projectId: "quickreact-a58e9",
    storageBucket: "quickreact-a58e9.appspot.com",
    messagingSenderId: "164473226496",
    appId: "1:164473226496:web:504b51b0cff8f700979fe5",
    measurementId: "G-B2HEBE3MNK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const importDataToFirebase = async () => {
    try {
      const response = await axios.get('https://courses.cs.northwestern.edu/394/data/cs-courses.php');
      const courses = response.data;
      await set(ref(database, '/courses'), courses);
      console.log('Data imported successfully.');
    } catch (error) {
      console.error('Error importing data:', error);
    }
  };

  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(app), new GoogleAuthProvider());
  };
  
  const firebaseSignOut = () => signOut(getAuth(app));
  
  export { firebaseSignOut as signOut };
  
  export const useAuthState = () => {
    const [user, setUser] = useState();
    useEffect(() => onAuthStateChanged(getAuth(app), setUser), []);
    return [user];
  };

