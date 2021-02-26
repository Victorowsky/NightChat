import React, { useContext, useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import Error from "./Error";
import Success from "./Success";
import { DataContext } from "../../App";
const Verify = () => {
	const { socket } = useContext(DataContext);
	const [isError, setIsError] = useState(false);
	const [message, setMessage] = useState("Error");
	const [isSuccess, setIsSuccess] = useState(false);
	const handleScan = (data) => {
		if (data) {
			socket.emit("QRVerify", data);
		}
	};
	const handleError = (err) => {
		// console.log(err.message);
		setMessage(err.message);
		setIsError(true);
	};

	const previewStyle = {
		height: 240,
		width: 320,
	};

	useEffect(() => {
		socket.on("QRVerifyAnswer", ({ success, message }) => {
			setIsSuccess(success);
			setMessage(message);
		});

		return () => {
			socket.removeAllListeners("QRVerifyAnswer");
		};
	}, [socket]);

	return (
		<>
			<div>
				<QrReader
					style={previewStyle}
					delay={500}
					onError={handleError}
					onScan={handleScan}
					facingMode="environment"
				/>
				<Error isError={isError} setIsError={setIsError} message={message} />
				<Success
					isSuccess={isSuccess}
					setIsSucess={setIsSuccess}
					message={message}
				/>
			</div>

			{/* <input type="file" accept="image/*" capture></in	put> */}
		</>
	);
};

export default Verify;
