function Inputs(props) {
  return (

    <form className="header-input">
      <label htmlFor="seed">{props.label}</label>
      <input type={props.type} name="seed" id="seed" onChange={(e) => props.action(e.target.value)} />
    </form>
  );
}

export default Inputs;
