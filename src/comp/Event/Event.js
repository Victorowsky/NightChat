import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../App";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Event.css";
import { IconButton } from "@material-ui/core";
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

	return (
		<div className="event">
			<IconButton style={{color:'white', height:'fit-content'}}>
				<ExitToAppIcon onClick={handleLogout} className="logoutButton" />
			</IconButton>
			<div className="eventName" onClick={handleRedirectToAdmin}>
				<h2>{currentEvent?.name}</h2>
			</div>
			<div style={{ width: '48px' }} className="logoutButton"></div>
		</div>
	);
};

export default Event;
