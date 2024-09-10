import { Link } from "react-router-dom"

const Confirm = ({date}) =>{
  return <div>
    <h1>Reservation confirmed:</h1>
    <h3>{`Table booked on ${date}.`}</h3>
    <Link to="/">
      <button>Accept</button>
    </Link>
  </div>
}

export default Confirm