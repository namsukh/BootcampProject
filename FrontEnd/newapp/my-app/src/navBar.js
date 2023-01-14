import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
function NavBar()
{
  let navigate = useNavigate();
  useEffect(()=>{
    if((localStorage.getItem("token"))==null)
    {
      navigate('/Login')

    }
  },[])
 

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
      setbtnLink("/findTask")
    }
  },[])
   
  
    //let navigate = useNavigate();

    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark " >
        
        <div className="containe">
            
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href='/home'>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/user'>
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={btnLink}>
                {userBtn
                }
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={(localStorage.getItem("type")=="User")?("/myTask"):("/myBucket")}>
                My Task
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => {
          navigate('/Login');
          localStorage.removeItem("token");
          localStorage.removeItem("type");
          localStorage.removeItem("category");


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