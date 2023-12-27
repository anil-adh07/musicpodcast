import { useEffect, useState } from "react";
import ArtistBox from "./ArtistBox";
import SearchBox from "./SearchBox";
import MessageBox from "./MessageBox";

const MainBody = () => {
  const [artists, setArtists] = useState([]);

  const getData = async () => {
    const url: string =
      "https://api.jamendo.com/v3.0/users/artists/?client_id=d79377aa&fullcount=true&format=jsonpretty&limit=200&name=claudod";
    const data = await fetch(url);
    const parsedData = await data.json();
    setArtists(parsedData.results[0].artists);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SearchBox />
      <div className="flex flex-wrap pl-6 pb-3">
        {artists.map((element, index) => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/4 xl:1/5" key={index}>
              <ArtistBox
                imgUrl={element["image"]}
                artistName={element["name"]}
                joinedDate={element["joindate"]}
              />
            </div>
          );
        })}
      </div>
      <MessageBox />
    </>
  );
};
export default MainBody;
