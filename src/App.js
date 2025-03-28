import './App.css';
import React from "react";
import BusinessList from './BusinessList';
import SearchBar from "./SearchBar";


function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
