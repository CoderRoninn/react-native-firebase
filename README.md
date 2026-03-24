# 🔥 Firebase Learning App

📱 A simple React Native (Expo) app built to learn the basics of Firebase Authentication and Firestore Database.

❓ **What is This?**

🚀 This is a beginner-friendly project with three main screens (**Login, Register, Home**) powered by Firebase. 🎯 The main goal is to understand how Firebase services integrate into a React Native application.

📚 **What I Learned**

🧩 **Firebase Authentication**

🔐 **getAuth** — Centralized authentication instance management

👤 **Registration** — Creating new users with `createUserWithEmailAndPassword`

🔑 **Login** — Authenticating existing users with `signInWithEmailAndPassword`

🌐 **Google Sign-In** — Integrating `GoogleSignin` with Firebase `GoogleAuthProvider` to allow one-tap login

🔥 **Firestore Database (Real-time CRUD)**

🏪 **onSnapshot** — Setting up real-time listeners for live data updates without manual refresh

📄 **add()** — Sending new documents to Firestore collections (e.g., adding a food item)

🔄 **update()** — Modifying existing documents by their unique ID

🗑️ **delete()** — Removing documents from the database

🧩 **Firebase Cloud Messaging (Push Notifications)**

🔔 **requestPermission** — Handling user consent for notifications (iOS & Android 13+)

🎫 **getToken** — Accessing the unique Firebase Cloud Messaging device token

🌈 **Foreground Messaging** — Receiving and logging messages while the app is actively being used

👻 **Background Handler** — Handling incoming messages when the app is closed or in the background

🛠️ **Design & UX**

📏 **Responsive Layout** — Using `utils/responsive` to ensure the app looks great on all screen sizes

🎨 **Design Tokens** — Keeping constants like `COLORS` in a central `theme.js` to ensure visual consistency

🧭 **Navigation** — Using `@react-navigation/native` to handle flow between screens

🗂 **Project Structure**

```text
src/
 ├── consts/
 │    ├── design/theme.js → Global styles & colors
 │    └── screens.js      → Centralized screen name constants
 ├── screens/
 │    ├── Home/         → Firestore CRUD operations & Real-time list
 │    ├── Login/        → Email/Password & Google Sign-In logic
 │    └── Register/     → New user account creation
 ├── services/
 │    └── notifications/ → Push Notification service with FCM
 ├── utils/
 │    └── responsive.js  → Pixel-perfect design utilities across devices
```

🛠 **Tech Stack**

⚛ **React Native + Expo**

🔥 **Firebase (Auth, Firestore, Messaging)**

🌐 **Google Sign-In SDK**

🧭 **React Navigation**

✨ **Vanilla CSS (StyleSheet)**

▶ **How to Run**

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the project:
   ```bash
   npx expo start
   ```
