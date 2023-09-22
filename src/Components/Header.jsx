function Header() {
  return (
    <>
    <header className="hero">
      <img className="hero-img" src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="hero" />
      <section className="hero-info">
        <h2>Säsong att så</h2>
        <p>
          Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
          consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus
          amet eu elit.
        </p>
        <span className="hero-button-flex">
            <button className="button">SÅ TIPS</button>
        </span>
      </section>
    </header>
    <div className="border-flex">
        <div className="border"></div>
    </div>  
    </>
  );
}

export default Header;
