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
          return (
            <Card
              title={elem.title}
              rating={elem.stats.rating}
              reviewCount={elem.stats.reviewCount}
              coverImg={elem.coverImg}
              price={elem.price}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
}

export default App;
