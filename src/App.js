import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./comp/LoginPage";
import Main from "./comp/Main";
import io from "socket.io-client";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./comp/Admin/Admin";
import Verify from "./comp/Admin/Verify";
import ProfileQR from "./comp/ProfileQR";

export const DataContext = React.createContext(null);

const socket = io("/");

const App = () => {
	// const [userInfo, setUserInfo] = useState({
	// 	_id: "60364824ced6885b5c790991",
	// 	name: "Victorowsky",
	// 	image:
	// 		"https://lh3.googleusercontent.com/a-/AOh14GiwkoB8yrjJrfotKxCu4P7W8IlUz9OicoSbU6HO=s96-c",
	// 	userType: "admin",
	// 	isVerified: true,
	// });

	const [userInfo, setUserInfo] = useState(false);

	useEffect(() => {
		fetch("/getProfile", { credentials: "include" })
			.then((res) => res.json())
			.then((res) => {
				if (res.profile) {
					setUserInfo(res.profile);
				}
			});
	}, []);

	return (
		<div className="app">
			<DataContext.Provider value={{ userInfo, socket }}>
				<Switch>
					<Route path="/" exact>
						{userInfo?.isVerified ? <Main /> : <LoginPage />}
					</Route>
					<Route path="/admin">
						{userInfo.userType !== "admin" && <Redirect to="/" />}
						<Admin />
					</Route>
					<Route path="/verify">
						{userInfo.userType !== "admin" && <Redirect to="/" />}
						<Verify />
					</Route>
					<Route path="/profile">
						<ProfileQR />
					</Route>
				</Switch>
			</DataContext.Provider>
		</div>
	);
};

export default App;
