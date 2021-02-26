import { useContext, useEffect,useState,useCallback } from "react";
import Button from '@material-ui/core/Button';
import {DataContext} from "../../App"


const EventPlace = ({EventPlaceRef, setIsOpenEventPlace}) => {

    const {socket} = useContext(DataContext)

    const [place, setPlace] = useState('');


    const handleCloseEventPlace = useCallback((e) =>{
        
        if(!EventPlaceRef.current?.contains(e.target)){
            setIsOpenEventPlace(false)
        }
    },[EventPlaceRef,setIsOpenEventPlace])

    useEffect(()=>{
     
        document.addEventListener('click', handleCloseEventPlace)

        return ()=>{
        document.removeEventListener('click', handleCloseEventPlace)
        }
    },[handleCloseEventPlace])

    const handleSetEventPlace = (e) =>{
        e.preventDefault()
        if(place){
            socket.emit('setEventPlace', {place})
            setPlace('')
            setIsOpenEventPlace(false)

        }

    }

    return ( 

        <div ref={EventPlaceRef} className="eventPlace">
            <h1>Enter place</h1>
            <form>
            <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)}/>
            <button type="submit" style={{display:'none'}} onClick={handleSetEventPlace}></button>
            </form>
           <Button 
            color="primary"
            variant="outlined"
            onClick={handleSetEventPlace}
            >Submit
            </Button>
        </div>
     );
}
 
export default EventPlace;