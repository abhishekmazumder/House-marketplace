import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnzSpf7wVX93I4Z1Ttg4K1ElmWy4BFMGQ',
  authDomain: 'house-marketplace-app-79655.firebaseapp.com',
  projectId: 'house-marketplace-app-79655',
  storageBucket: 'house-marketplace-app-79655.appspot.com',
  messagingSenderId: '714230225404',
  appId: '1:714230225404:web:b30d6fd8417f9092c03a79',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
