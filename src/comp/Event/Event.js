import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../App";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Event.css";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Event = ({ currentEvent }) => {
	const { userInfo } = useContext(DataContext);
	const history = useHistory();

	const handleRedirectToAdmin = () => {
		if (userInfo.userType === "admin") {
			history.push("/admin");
		}
	};

	const handleLogout = () => {
		window.location.href = "/logout";
	};

	const handleProfile = () =>{
		history.push('/profile')
	}

	const iconButtonStyles = {
		 color: "white", height: "fit-content" 
	}

	return (
		<div className="event">
			<IconButton style={iconButtonStyles} onClick={handleLogout}>
				<ExitToAppIcon  className="logoutButton" />
			</IconButton>
			<div className="eventName" onClick={handleRedirectToAdmin}>
				<h2>{currentEvent?.name}</h2>
			</div>
			<div style={{ width: "48px" }} className="logoutButton">
				<IconButton style={iconButtonStyles} onClick={handleProfile}>
					<AccountCircleIcon  />
				</IconButton>
			</div>
		</div>
	);
};

export default Event;
