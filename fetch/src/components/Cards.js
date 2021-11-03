import React from "react";
import  { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useEffect } from "react";

const Cards=()=>{
  const history=useHistory();

const [tower,SetCards]=useState ([]);



useEffect(() => {
    getPokemon();
  }, []);
​
  const getPokemon = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    SetCards(response.data.data);
  };
​




const change=(id)=>{
          history.push(`/card/${id}`);
          SetCards();
  }
return  (
<div className="cards">
      {pokemon.length ? (
        <ul>
          {pokemon.map((poke, i) => (
            <div key={i}>
              <li>{poke.name}</li>
              <img
                src={poke.images.large}
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        const Searchbar = () => {
            const [search, setSearchInput] = useState("");
            const handleChange = (e) => {
                e.preventDefault();
                setSearchInput(e.target.value);
          }}
              if (search.length > 0) {
                tower.filter((item) => {
                  return tower.name.match(searchInput);
              })
              
      )
  
</div>
)}



/*
const Searchbar = () => {
  const [search, setSearchInput] = useState("");
  const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
}};
    if (search.length > 0) {
      tower.filter((item) => {
        return tower.name.match(searchInput);
    });
    }
*/

export default Cards;