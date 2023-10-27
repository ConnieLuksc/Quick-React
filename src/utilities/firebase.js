import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { initializeApp } from "firebase/app";

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
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

// export const useDbData = (path) => {
//   const [data, setData] = useState();
//   const [error, setError] = useState(null);

//   useEffect(() => (
//     onValue(ref(database, path), (snapshot) => {
//      setData( snapshot.val() );
//     }, (error) => {
//       setError(error);
//     })
//   ), [ path ]);

//   return [ data, error ];
// };
export const useDbData = (path) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      onValue(ref(database, path), (snapshot) => {
        setData(snapshot.val());
        setIsLoading(false);
      }, (error) => {
        setError(error);
        setIsLoading(false);
      });
    }, [path]);
  
    return [data, isLoading, error];
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
