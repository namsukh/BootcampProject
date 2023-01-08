import { Button } from 'react-bootstrap';
import './home.css'
import HomeService from '../assets/img/HomeService.png'
function home()
{

    return(
        <>
        <img src={HomeService}></img>
        
       <div className='con1'>
       <div className='homContainer'>
        <Button className="homeBtn">fdgdf</Button>
        </div>
        </div>
        </>
    )
}
export default home;