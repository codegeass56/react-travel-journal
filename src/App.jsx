import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map((card) => {
    return <Card
      key={card.id}
      title={card.title}
      location={card.location}
      googleMapsUrl={card.googleMapsUrl}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      imageUrl={card.imageUrl}
    />;
  });
  return (
    <div className="App">
      <Navbar />
      <div className="cards-container">
        {cards}
      </div>
    </div>
  )
}

export default App
