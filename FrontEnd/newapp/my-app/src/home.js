import "./home.css"
import Login from "./Login";
import NavBar from "./navBar";
import homepic from './hompic.png'
function Home() {
    console.log("Home the token is "+localStorage.getItem("token"))
  return (
    <div >
      Hi
      <NavBar></NavBar>
     <div>
     <img src={""}></img>
     </div>
    </div>
  );
}
export default Home;
