import { Link } from "react-router-dom"
import "./styles.css"

const Confirm = ({date}) =>{
  return <div id="confirmation">
    <h1>Reservation confirmed:</h1>
    <h3>{`Table booked on ${date}.`}</h3>
    <Link to="/">
      <button id="button" aria-label="On Click">Accept</button>
    </Link>
  </div>
}

export default Confirm;