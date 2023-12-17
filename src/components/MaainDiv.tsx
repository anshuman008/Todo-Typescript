import AllTodos from "./AllTodos"
import InputComp from "./InputComp"
import Navbar from "./Navbar"

const MainDiv = () => {
  return (
    <main>
      <h2>TODO REACT + TYPESCRIPT</h2>
      <Navbar/>
      <InputComp/>
      <AllTodos/>
    </main>
  )
}

export default MainDiv
