import Message from "./Message";
import "./Chat.css";
import React, { useState, useContext, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
import { DataContext } from "../../App";
import moment from "moment";

moment().format("HH:mm:ss");

const Chat = () => {
  const { socket, userInfo } = useContext(DataContext);
  const { name, userType, image, _id } = userInfo;
  const [text, setText] = useState("");

  useEffect(() => {
    socket.emit("getMessages");
    socket.on("getMessagesAnswer", ({ docs }) => {
      setMessages(docs);
    });
    socket.on("newMessageAnswer", ({ docs }) => {
      setMessages((prev) => [...prev, docs]);
    });

    socket.on('eventMessageAnswer',()=>({docs})=>{
      setMessages(prev=> [...prev,{text:docs}])
    })

    
    return () => {
      socket.removeAllListeners("getMessagesAnswer");
      socket.removeAllListeners("newMessageAnswer");
    };
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(text){
          const date = String(moment().format("HH:mm:ss"));
      // console.log(date);
    socket.emit("sendMessage", { text, name, userType, date, image, _id });
    setText("");
    }

  };

  const [messages, setMessages] = useState([]);

  const createMessages = messages.map(
    ({ name, message, date, userType, userImage, wroteBy }, index) => {
      return (
        <Message
          key={index}
          wroteBy={wroteBy}
          name={name}
          message={message}
          date={date}
          userType={userType}
          userImage={userImage}
        />
      );
    }
  );

  return (
    <>
  <div className="chat">
      <div className="chatContainer">{createMessages}</div>
      <div className="inputContainer">
        <form>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={handleSendMessage}
            style={{ display: "none" }}
          ></button>
        </form>

        <div className="sendMessageButton" onClick={handleSendMessage}>
          <SendIcon />
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
