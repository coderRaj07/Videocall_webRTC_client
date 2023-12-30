import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

const serverUrl = "https://videocallwebrtcserver-production.up.railway.app";
// const serverUrl = "localhost:8000";  // for local
export const SocketProvider = (props) => {
  const socket = useMemo(() => io( serverUrl ), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
