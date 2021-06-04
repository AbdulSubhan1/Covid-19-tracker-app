import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import Charts from "./components/charts/Charts";
import CounteryPicker from "./components/countryPicker/CountryPicker";
import { fetchData } from "./api";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");

  const handleCountryChange = async (country) => {
    const newData = await fetchData(country);
    setCountry(country);
    setData(newData);
  };

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const res = await fetchData();
    setData(res);
  };
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CounteryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;
