# 🎥 Video Call WebRTC App

Welcome to the Video Call WebRTC App! This application allows you to establish video calls between two users using WebRTC and Socket.IO.

## Table of Contents

- [🚀 Production](#production)
  - [📹 Demo](#demo)
  - [📝 Instructions](#instructions)
- [🏡 Local Usage](#local-usage)
  - [🔧 Installation](#installation)
  - [▶️ Running the App](#running-the-app)
  - [⚙️ Configuration](#configuration)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## 🚀 Production

### 📹 Demo

To experience the app in production, visit the deployed [Video Call WebRTC App](https://videocall-web-rtc-client.vercel.app/).

### 📝 Instructions

1. Open the production app link (https://videocall-web-rtc-client.vercel.app/) in two tabs, either in the same browser, different browsers, or two different devices.
2. In the first tab, enter a random email ID and choose any room ID.
3. In the second tab, enter another random email ID with the same room ID used in the first tab.
4. Click "Join" on both tabs.
5. In the first tab, you will see an option to initiate a call. Click on it.
6. After clicking "Call," you will be able to see the video. Click on "Send Stream" to see the other person's video.

## 🏡 Local Usage

### 🔧 Installation

Make sure you have Node.js and npm installed on your local machine.

1. Clone the [client repository](https://github.com/coderRaj07/Videocall_webRTC_client):

   ```bash
   git clone https://github.com/coderRaj07/Videocall_webRTC_client.git
   ```

2. Clone the [server repository](https://github.com/coderRaj07/Videocall_webRTC_Server):

   ```bash
   git clone https://github.com/coderRaj07/Videocall_webRTC_Server.git
   ```

3. Install dependencies for both the client and server:

   ```bash
   cd Videocall_webRTC_client
   npm install

   cd ../Videocall_webRTC_Server
   npm install
   ```

### ▶️ Running the App

1. Start the server:

   ```bash
   cd Videocall_webRTC_Server
   npm start
   ```

   The server will run on `http://localhost:8000`.

2. Start the client:

   ```bash
   cd Videocall_webRTC_client
   npm start
   ```

   The client will run on `http://localhost:3000`.

### ⚙️ Configuration

Update the `serverUrl` in `socketProvider.jsx` within the client app to use the local server:

```javascript
// In Videocall_webRTC_client/src/contexts/socketProvider.jsx
const socket = io("http://localhost:8000"); // Update the URL to match your local server
```

## 🤖 Contribution

Feel free to contribute and enhance this video chat client app. Create issues, submit pull requests, and let's make this project even more awesome together!

Happy coding! 🚀👩‍💻👨‍

