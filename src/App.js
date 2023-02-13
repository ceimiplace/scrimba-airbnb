import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import data from "./data";
import CardsContainer from "./components/CardsContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CardsContainer>
        {data.map((elem) => {
          return <Card item={elem} />;
        })}
      </CardsContainer>
    </div>
  );
}

export default App;
