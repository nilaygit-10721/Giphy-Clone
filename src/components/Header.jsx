import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMiniEllipsisVertical,
  HiMiniBars3BottomRight,
} from "react-icons/hi2";
import { Gifstate } from "../context/gif-context";
import GifSearch from "./Gif-Search";

const Header = () => {
  const [categories, setcategories] = useState([]);
  const [showcategories, setshowcategories] = useState(false);

  const { gf, gifs, setgifs, addToFavorites, filter, setfilter, favorites } =
    Gifstate();

  const fetchGifCategories = async () => {
    try {
      const { data } = await gf.categories();
      setcategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img className="w-8" src="/logo.svg" alt="logo" />
          <h1 className=" text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>
        <div className="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5)?.map((category) => (
            <Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
            >
              {category.name}
            </Link>
          ))}

          <button onClick={() => setshowcategories(!showcategories)}>
            <HiMiniEllipsisVertical
              size={35}
              className={`py-0.5 transition ease-in-out hover:gradient ${
                showcategories ? "gradient" : ""
              } border-b-4 cursor-pointer hidden lg:block`}
            />
          </button>

          {favorites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favorites">Favorite GIFs</Link>
            </div>
          )}

          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>
        {showcategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return (
                  <Link
                    className="font-bold"
                    to={`/${category.name_encoded}`}
                    key={category.name}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <GifSearch />
    </nav>
  );
};

export default Header;
