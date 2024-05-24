import React, { useEffect } from "react";
import { Gifstate } from "../context/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/Filter-gif";

const Home = () => {
  const { gf, gifs, setgifs, filter } = Gifstate();

  const trendingmeme = async () => {
    const { data: gifs } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setgifs(gifs);
  };

  useEffect(() => {
    trendingmeme();
  }, [filter]);

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      <FilterGif showTrending />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
