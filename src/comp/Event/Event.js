import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../App";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Event.css";
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
			<ExitToAppIcon onClick={handleLogout} className="logoutButton" />
			<div className="eventName" onClick={handleRedirectToAdmin}>
				<h2>{currentEvent?.name}</h2>
			</div>
			<div style={{ marginLeft: 0 }} className="logoutButton"></div>
		</div>
	);
};

export default Event;
