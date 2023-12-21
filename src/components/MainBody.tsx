import { useEffect, useState } from "react";
import ArtistBox from "./ArtistBox";

const MainBody = () => {
  const [artists, setArtists] = useState([]);

  const getData = async () => {
    let url = 'https://api.jamendo.com/v3.0/users/artists/?client_id=d79377aa&format=jsonpretty&limit=200&name=claudod'
    let data = await fetch(url);
    let parsedData = await data.json();
    setArtists(parsedData.results[0].artists);
    console.log("Parsed Data:");
    console.log(parsedData);
    console.log("Only artists")
    console.log(artists);
  }

  useEffect(() => {
    getData();

  }, []);

  return (
    <>
      {artists.map((element, index) => {
        return (<div className="artistbox ">
          <div className="columns-1 sm:columns-2 md:columns-3 flex" key={index}>

            <ArtistBox imgUrl={element['image']} />

          </div>
        </div >
        )
      })}

    </>
  );

};
export default MainBody;