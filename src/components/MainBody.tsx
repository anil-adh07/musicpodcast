import { useEffect, useState } from "react";
import ArtistBox from "./ArtistBox";
import SearchBox from "./SearchBox";
import MessageBox from "./MessageBox";

//const clientId = process.env.JAMANDO_CLIENT_ID;
const MainBody = () => {
  const [artists, setArtists] = useState([]);

  const getData = async () => {
    const url: string =
      "https://api.jamendo.com/v3.0/artists?client_id=d79377aa&format=jsonpretty&hasimage=true&order=popularity_total_desc&offset=60&limit=40";
    const data = await fetch(url);
    const parsedData = await data.json();
    setArtists(parsedData.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-ful bg-black p-4">
        <div className="bg-[#171717]  rounded-2xl">
          <SearchBox />
          <div className="flex flex-wrap pl-6 pb-3">
            {artists.map((element, index) => {
              return (
                <div className="w-full sm:w-1/2 md:w-1/4 xl:1/5" key={index}>
                  <ArtistBox
                    id={element["id"]}
                    imgUrl={
                      (element["image"] as string[]).length
                        ? element["image"]
                        : `https://source.unsplash.com/600x600?${element["name"]}+music`
                    }
                    artistName={element["name"]}
                    joinedDate={element["joindate"]}
                  />
                </div>
              );
            })}
          </div>
          <MessageBox />
        </div>
      </div>
    </>
  );
};
export default MainBody;
