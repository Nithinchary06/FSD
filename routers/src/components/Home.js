import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/Contactus", {
      state: {
        user: "cvr",
      },
    })
  }

  return (
    <div>
      <h2>Home Component</h2>

      <button onClick={handleClick}>Click</button>
    </div>
  )
}
export default Home
