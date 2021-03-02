import { DataContext } from "../App";
import { useContext, useEffect, useState } from "react";

const ProfileQR = () => {

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
			setQRCodeUrl(null)
		};
	}, [socket, userInfo]);

    return ( 
        <div>
            {QRCodeUrl && <img src={QRCodeUrl} alt="QRCode"/>} 
        </div>
     );
}
 
export default ProfileQR;