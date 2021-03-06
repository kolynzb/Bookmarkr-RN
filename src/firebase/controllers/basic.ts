import {
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";

const stuff = () => {
  // Storing User Data
  const [userDoc, setUserDoc] = useState<null | DocumentData>(null);
  // Update Text
  const [text, setText] = useState("");

  // MARK: CRUD Functions
  const Create = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const myDoc = doc(db, "MyCollection", "MyDocument");

    // Your Document Goes Here
    const docData = {
      name: "iJustine",
      bio: "YouTuber",
    };

    setDoc(myDoc, docData)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Document Created!");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  const Read = () => {
    // MARK: Reading Doc
    // You can read what ever document by changing the collection and document path here
    const myDoc = doc(db, "MyCollection", "MyDocument");

    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists()) {
          setUserDoc(snapshot.data());
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  const Update = (value: any, merge: any) => {
    // MARK: Updating Doc
    const myDoc = doc(db, "MyCollection", "MyDocument");

    // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
    setDoc(myDoc, value, { merge: merge })
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Updated Successfully!");
        setText("");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  const destroy = () => {
    // MARK: Deleting Doc
    const myDoc = doc(db, "MyCollection", "MyDocument");

    deleteDoc(myDoc)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Deleted Successfully!");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };
};
