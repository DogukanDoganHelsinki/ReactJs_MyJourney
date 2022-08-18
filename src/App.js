import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "../src/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
