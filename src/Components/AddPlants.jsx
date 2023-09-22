import { useState } from "react";
import Inputs from "./Inputs";

function AddPlants(props) {

  const [seed, setSeed] = useState('')
  const [url, setUrl] = useState('')
  const [user, setUser] = useState('')
  const [date, setDate] = useState('')

  function addPlantContainer(e) {
    e.preventDefault()
    
    let updatePlant = {
      id: Date.now(),
      seed: seed,
      url: url,
      user: user,
      date: date
    }
    props.addPlant(updatePlant)
  }

  return (
    <>
      <header className="header">
        <article className="header-info">
          <h2>Lägg till planerade planteringar</h2>
            <section>
              <Inputs label="Frönamn" type="text" value={seed} action={setSeed}/>
              <Inputs label="URL, exempelbild" type="text" value={url} action={setUrl}/>
              <Inputs label="Planterare" type="text" value={user} action={setUser}/>
              <Inputs label="Datum" type="date" value={date} action={setDate}/>
              <button onClick={(e) => addPlantContainer(e)} className="button">Lägg till</button>
            </section>
        </article>
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1597868165956-03a6827955b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Plant image"
        />
      </header>
      <div className="border-flex">
        <div className="border"></div>
      </div>
    </>
  );
}

export default AddPlants;
