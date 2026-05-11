import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  where,
  limit,
  startAfter,
  startAt,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref as storageRef } from "firebase/storage";

const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);
const auth = getAuth();

// Create a root reference
const storage = getStorage();

export {
  firestore,
  db,
  auth,
  storage,
  storageRef,
  doc,
  collection,
  where,
  limit,
  startAfter,
  startAt,
  getDoc,
  getDocs,
};
