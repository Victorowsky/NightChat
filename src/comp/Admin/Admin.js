import "./Admin.css"
import {useState,useRef, useEffect} from 'react'
import Button from '@material-ui/core/Button';

import EventPlace from "./EventPlace";
import { useHistory } from "react-router-dom";
const Admin = () => {

    const history = useHistory()
    const [isOpenEventPlace, setIsOpenEventPlace] = useState(false);

    const buttonStyle = {
        width: '300px',
        height:'45px',
        color:'white',
        borderColor:'white'
    }

    const EventPlaceRef = useRef(null)


    const handleOpenSetEventPlace = ()=>{
        setIsOpenEventPlace(prev=> !prev)
    }

    useEffect(()=>{

    },[])

    const handleGoToVerifyUsers = () =>{
        history.push('/verify')
    }


    return ( 
        <div className="admin">
            
            <Button 
            style={buttonStyle} 
            color="primary"
            onClick={handleOpenSetEventPlace}
            variant="outlined">Set event place
            </Button>
            <Button 
            onClick={handleGoToVerifyUsers}
            style={buttonStyle} 
            color="primary" 
            variant="outlined">Verify Users
            </Button>

        {isOpenEventPlace && <EventPlace setIsOpenEventPlace={setIsOpenEventPlace} EventPlaceRef={EventPlaceRef} />}

        </div>
     );
}
 
export default Admin;