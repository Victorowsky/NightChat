import { useRef, useEffect, useContext } from "react";
import "./Message.css";
import { DataContext } from "../../App";

const Message = ({ name, date, message, userType, userImage, wroteBy }) => {
  const messageRef = useRef(null);

  const { userInfo } = useContext(DataContext);
  const isAdmin = userType === "admin";

  useEffect(() => {
    messageRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  const dateRef = useRef(null);
  
  const isMyMessage = userInfo._id === wroteBy

  const myMessageStyles = {
      alignSelf: "flex-end",
      marginRight: "2px",
      borderRadius: "5px 5px 0 5px",
  }

  const myMessageDateStyle = {
        left: '100%',
        transform: 'translateX(-100%)'
  }

  const handleShowDate = () => {
    dateRef.current.classList.toggle("dateShown");
  };


  return (
    <>
      <div
        onClick={handleShowDate}
        className="message"
        ref={messageRef}
        style={isMyMessage ? myMessageStyles : {}}
        title={date}
      >
        <img src={userImage} alt="user" />
        <div className="messageContent">
          <span
            style={isAdmin ? { color: "#f94144", fontWeight: 500 } : {}}
            className="userName"
          >
            {name}
          </span>
          :<span className="text"> {message}</span>
        </div>
        <span ref={dateRef} style={isMyMessage ? myMessageDateStyle :{}} className="date">
          {date}
        </span>
      </div>
    </>
  );
};

export default Message;
