import { createContext, useState } from "react";
import { useContext } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
const Gifcontext = createContext();

const Gifprovider = ({ children }) => {
  const [gifs, setgifs] = useState([]);
  const [filter, setfilter] = useState("gifs");
  const [favorites, setfavorites] = useState([]);

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  const addToFavorites = (id) => {
    console.log(id);
    if (favorites.includes(id)) {
      // If the item is already in favorites, remove it
      const updatedFavorites = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setfavorites(updatedFavorites);
    } else {
      // If the item is not in favorites, add it
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
      setfavorites(updatedFavorites);
    }
  };

  return (
    <Gifcontext.Provider
      value={{
        gf,
        gifs,
        setgifs,
        addToFavorites,
        filter,
        setfilter,
        favorites,
      }}
    >
      {children}
    </Gifcontext.Provider>
  );
};

export const Gifstate = () => {
  return useContext(Gifcontext);
};

export default Gifprovider;
