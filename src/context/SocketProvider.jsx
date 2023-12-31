import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

const serverUrl = "videocallwebrtcserver-production.up.railway.app";
// const serverUrl = "https://your-railway-app-url.up.railway.app:8000";
// const serverUrl = "localhost:8000";  // for local
export const SocketProvider = (props) => {
  const socket = useMemo(() => {
    const newSocket = io(serverUrl);

    // Error handling
    newSocket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    newSocket.on("connect_timeout", () => {
      console.error("Socket connection timeout");
    });

    return newSocket;
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

