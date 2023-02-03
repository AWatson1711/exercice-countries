import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const Home = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((apiCountries) => setCountries(apiCountries.data))
      .catch((e) => console.error(e));
  }, []);
  console.log(countries);
  return (
    <div>
      <Header />
      <main></main>
    </div>
  );
};

export default Home;
