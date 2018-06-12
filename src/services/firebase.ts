import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import FirebaseConfig from '../config/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig)
}

export default firebase;
