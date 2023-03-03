import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="cards-container">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
