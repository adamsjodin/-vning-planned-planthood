
function PlannedPlants(props) {

  return (
    <main className="main">
      <h2>Våra planerade planteringar:</h2>
      <article className="plant-container">
        {props.data.map((plant, index) => (
          <section className="plant-container-card" key={index}>
            <img width={200} height={250} src={plant.url} alt="Plant image" />
            <aside className="plant-container--flex">
              <h3>{plant.seed}</h3>
              <h4>{plant.date}</h4>
            </aside>
            <aside className="plant-container--flex">
              <p>{plant.user}</p>
              <button className="button button-remove" onClick={() => props.removePlant(plant.id)}>TA BORT</button>
            </aside>
          </section>
        ))}
      </article>
    </main>
  );
}

export default PlannedPlants;
