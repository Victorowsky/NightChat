import "./LoginPage.css";
import GooglePng from "../img/google.png";
import { DataContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
const LoginPage = () => {
	const { userInfo, socket } = useContext(DataContext);
	const [QRCodeUrl, setQRCodeUrl] = useState(null);

	useEffect(() => {
		if (userInfo) {
			socket.emit("createUserQRCode", userInfo._id);

			socket.on("createUserQRCodeAnswer", (url) => {
				setQRCodeUrl(url);
			});
		}

		return () => {
			socket.removeAllListeners("createUserQRCodeAnswer");
		};
	}, [socket, userInfo]);

	const buttonStyle = {
		color: "white",
		border: "2px solid white",
		justifySelf: "flex-end",
	};

	const handleLogout = () => {
		window.location.href = "/logout";
	};

	return (
		<div className="loginContainer">
			{!userInfo ? (
				<>
					<h1>Warsaw Night Racing</h1>
					<a href={`/auth/google`}>
						<div className="loginGoogle">
							<img src={GooglePng} alt="Google" />
							Login with Google
						</div>
					</a>
				</>
			) : (
				<>
					{!userInfo.isVerified && (
						<>
							{QRCodeUrl ? (
								<>
									<img className="QRCode" src={QRCodeUrl} alt="QRCode" />
									<h3 style={{ textAlign: "center" }}>
										Potwiedz swoje konto na następnym zlocie
									</h3>
								</>
							) : (
								<CircularProgress />
							)}
							<Button onClick={handleLogout} style={buttonStyle}>
								Logout
							</Button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default LoginPage;
