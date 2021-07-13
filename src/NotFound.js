import { Link } from "react-router-dom"
import error from "./error.svg"

const NotFound = () => {
    return ( 
       <div className="not-found">
           <h2>Page Not Found</h2>
           <img src={error} alt="" />
           <Link to="/">Home</Link>
       </div>
     );
}
 
export default NotFound;