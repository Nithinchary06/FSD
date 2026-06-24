import { useLocation } from "react-router-dom"
function Contactus() {
  const location = useLocation()

  return (
    <div>
      <h2>Contact Us Component</h2>

      <p>User : {location.state?.user || "No User Found"}</p>
    </div>
  )
}

export default Contactus
