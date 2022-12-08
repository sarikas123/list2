import "./styles.css";
import React, { useState } from "react";

const characterRegex = /^[a-zA-Z]+$'/;
export default function App(props) {
  const [state, setState] = useState({
    name: "",
    Address: "",
    del: "b"
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    if (name === "name") {
      if (
        (value.length <= 10 && value.match(characterRegex)) ||
        value.length === 0
      ) {
        setState({ ...state, [e.target.name]: e.target.value });
      } else {
        console.log("in else part...");
      }
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.Address) {
      console.log(state);
    } else {
      setState({ ...state, error: "Address should br present" });
    }
    console.log(state);
  };

  return (
    <form>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      <div className="input-div">
        <label>Name:</label>
        <input name="name" value={state.name} onChange={changeHandler} />
      </div>
      <div className="input-div">
        <label>Surname:</label>
        <input name="surname" value={state.Surname} onChange={changeHandler} />
      </div>

      <div className="input-div">
        <label>Address:</label>
        <textarea
          name="Address"
          value={state.Address}
          onChange={changeHandler}
        />
      </div>

      <div className="input-div">
        <label>Pincode:</label>
        <input name="pincode" value={state.Pincode} onChange={changeHandler} />
      </div>
      <div className="input-div">
        <label>Delivery type:</label>
        <select name="del" onChange={changeHandler}>
          {props.options.map((el) => (
            <option selected={state.del === el} value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onSubmit}>Save</button>
    </form>
  );
}
