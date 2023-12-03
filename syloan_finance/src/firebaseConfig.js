// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAUuqgn-t9k2UH__DvxHehT8Mko-Qvvm9g",
//   authDomain: "fir-frontend-88035.firebaseapp.com",
//   projectId: "fir-frontend-88035",
//   storageBucket: "fir-frontend-88035.appspot.com",
//   messagingSenderId: "394225719522",
//   appId: "1:394225719522:web:5e2c5a875e67a83a0e66bb",
//   measurementId: "G-S8X4HPKDBQ"
// };


// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUuqgn-t9k2UH__DvxHehT8Mko-Qvvm9g",
  authDomain: "fir-frontend-88035.firebaseapp.com",
  projectId: "fir-frontend-88035",
  storageBucket: "fir-frontend-88035.appspot.com",
  messagingSenderId: "394225719522",
  appId: "1:394225719522:web:5e2c5a875e67a83a0e66bb",
  measurementId: "G-S8X4HPKDBQ"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);