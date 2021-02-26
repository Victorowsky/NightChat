import Chat from "./Chat/Chat";
import Event from "./Event/Event";
import { DataContext } from "../App";
import { useContext, useEffect, useState } from "react";
import "./Main.css";


const Main = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const { socket } = useContext(DataContext);

  useEffect(() => {
    socket.emit("getEvent");
    socket.on("getEventAnswer", ({ docs }) => {
      setCurrentEvent(docs);
    });
    socket.on("newEventAnswer", ({ docs }) => {
      setCurrentEvent(docs);
    });

    return () => {
      socket.removeAllListeners("newMessageAnswer");
    };
  }, [socket]);



  return (
    <div className="mainContainer">
      <Event currentEvent={currentEvent}  />
      <Chat />
    </div>
  );
};

export default Main;
