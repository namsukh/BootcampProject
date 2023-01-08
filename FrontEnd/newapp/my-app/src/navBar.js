import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";

function NavBar()
{

  const [userBtn,setUserBtn]=useState()
  const [btnLink,setbtnLink]=useState()
  useEffect(()=>{
    if(localStorage.getItem("type")=="User")
    {
      setUserBtn("Post a Task");
      setbtnLink("/postTask")
    }
    else
    {
      setUserBtn("Find a Task");
    
    }
  },[])
   
  
    let navigate = useNavigate();

    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        
        <div className="containe">
            
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href='/home'>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={btnLink}>
                {userBtn
                }
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/myTask">
                My Task
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => {
          navigate('/Login');
          localStorage.removeItem("token");
          localStorage.removeItem("type");


        }}>
                Logout
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
        </>
    )
}
export default NavBar;