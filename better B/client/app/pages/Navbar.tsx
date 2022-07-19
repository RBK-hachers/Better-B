import Link from "next/link"
import Aboutus from "./Aboutus"
import Diet from "./Diet"
import Workout from "./Workout"
import User from "./User"
Aboutus
function Navbar(){
    return(
        <div>
           <nav className="navbar navbar-expand-sm bg-light">
<ul className="navbar-nav">
  <li className="nav-item">
  <Link href="/User">user</Link>
  </li>
  <li className="nav-item">
  <Link href="/Diet">Diet</Link>
  </li>
  <li className="nav-item">
  <Link href="/Workout">workout</Link>
  </li>
  <li className="nav-item">
   <Link href="/Aboutus">about</Link>
  </li>
</ul>

</nav>
     </div>
    )
}
export default Navbar