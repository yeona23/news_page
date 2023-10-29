import "./App.css";
import FilterNews from "./components/FilterNews";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="App">
      <FilterNews />
      <NewsList />
    </div>
  );
}

export default App;
