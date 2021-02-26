import { useRef, useEffect, useContext } from "react";
import "./Message.css";
import { DataContext } from "../../App";

const Message = ({ name, date, message, userType, userImage, wroteBy }) => {
  const messageRef = useRef(null);

  const { userInfo } = useContext(DataContext);

  useEffect(() => {
    messageRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  const dateRef = useRef(null);

  const handleShowDate = () => {
    dateRef.current.classList.toggle("dateShown");
  };
  const isAdmin = userType === "admin";

  return (
    <>
      <div
        onClick={handleShowDate}
        className="message"
        ref={messageRef}
        style={
          userInfo._id === wroteBy
            ? {
                alignSelf: "flex-end",
                marginRight: "2px",
                borderRadius: "5px 5px 0 5px",
              }
            : {}
        }
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
        <span ref={dateRef} className="date">
          {date}
        </span>
      </div>
    </>
  );
};

export default Message;
