import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import { api_key } from "../components/creds";
import LogoutButton from "../components/LogoutButton";

const HomePage = () => {
  const { user } = UserAuth();
  const [data, setData] = useState({});
  const [syncing, setSync] = useState(false);
  const [endpoint, setendpoint] = useState(``);

  const submitHandler = (e) => {
    e.preventDefault();
    let ingredients = e.target[0].value.trim();
    setendpoint(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=1&ranking=1&ignorePantry=true&apiKey=${api_key}`
    )
    e.target.reset()
    setSync(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(endpoint)
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setSync(false);
  }, [endpoint]);

  if (syncing) {
    return "Loading...";
  } else {
    return (
      <div className="constraint">
        <img
          className="iPhone"
          src={require("../assets/images/iphone14.png")}
          alt="iPhone"
        />
        <div className="signout-wrapper">
          <h1>Welcome {user.displayName}</h1>
          <form onSubmit={submitHandler} className="submission-form">
            <label>Ingredients</label>
            <input
              className="ingredient-input"
              type="string"
              name="ingredients"
              required
              autoComplete="off"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <LogoutButton />
          <div>{JSON.stringify(data[0])}</div>
        </div>
      </div>
    );
  }
};

export default HomePage;
