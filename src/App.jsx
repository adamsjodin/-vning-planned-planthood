import { useEffect, useState } from "react";
import "./App.css";
import AddPlants from "./Components/AddPlants";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import PlannedPlants from "./Components/PlannedPlants";


function App() {
  let plannedPlantsContainer = [
    {
      id: 1,
      seed: "Tomat",
      date: "1 april 2023",
      url: "https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      user: "Emma på 4an",
    },
    {
      id:2,
      seed: "Gurka",
      date: "5 april 2023",
      url: "https://images.unsplash.com/photo-1628444756705-9244dc6d4dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      user: "Majvor och P-Å",
    },
    {
      id:3,
      seed: "Tomat",
      date: "7 april 2023",
      url: "https://images.unsplash.com/photo-1591857177593-aec16c2d8f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      user: "Rico Coolio",
    },
  ];

  const [plant, setPlant] = useState(plannedPlantsContainer) ;


  useEffect(() => {
    console.log("Loading plants from localStorage");
    const itemsInLocalStorage = JSON.parse(localStorage.getItem('plants'));
    console.log(itemsInLocalStorage);
    if (itemsInLocalStorage) {
     setPlant(itemsInLocalStorage);
    }
  }, []);


  useEffect(() => {
    console.log("Saving plants to localStorage");
 localStorage.setItem('plants', JSON.stringify(plant))
    console.log(plant);
  }, [plant])


  const addPlant = (newPlant) => {
    setPlant([newPlant, ...plant]);
  };

  function removePlant(id) {
    setPlant(plant.filter((plant) => plant.id !== id));
  }

  return (
    <div className="App">
      <Nav />
      <section className="app-info">
        <Header />
        <AddPlants addPlant={addPlant}/>
        <PlannedPlants data={plant} removePlant={removePlant}/>
      </section>
    </div>
  );
}

export default App;
