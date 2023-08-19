import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBXjpb1W6vmhGYX2jdc2A7IQwqjIgb3jjY',
  authDomain: 'todoprojects-9df80.firebaseapp.com',
  projectId: 'todoprojects-9df80',
  storageBucket: 'todoprojects-9df80.appspot.com',
  messagingSenderId: '168001676888',
  appId: '1:168001676888:web:36151b3be83afae924cc2d',
  databaseURL:
    'https://todoprojects-9df80-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
