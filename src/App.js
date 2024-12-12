import "./App.css";
import About from "./Components/About"
import Contact from "./Components/Contact"
import WorkSample from "./Components/WorkSample"
import {Routes,Route,NavLink} from "react-router-dom"
export default function App(){
    return(
        <div >
        <div className="links" >
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    <NavLink to="/WorkSample">WorkSample</NavLink>
           
        </div>
        <Routes >
            <Route path="About" element= {<About />}></Route>
            <Route path="Contact" element= {<Contact />}></Route>
            <Route path="WorkSample" element= {<WorkSample />}></Route>
        </Routes>
        </div>
    )
}