import { useEffect, useState } from "react";
import ArtistBox from "./ArtistBox";
import SearchBox from "./SearchBox";
import MessageBox from "./MessageBox";

const clientId = import.meta.env.VITE_APP_JAMANDO_CLIENT_ID;
const baseUrl = import.meta.env.VITE_APP_JAMANDO_BASE_URL;
interface results {
  id: string;
  name: string;
  website: string;
  joindate: string;
  image: string;
  shorturl: string;
  shareurl: string;
}
const MainBody = () => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const url: string = `${baseUrl}?client_id=${clientId}&format=jsonpretty&hasimage=true&order=popularity_total_desc&offset=38&limit=40`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setArtists(parsedData.results);
    setFilteredArtists(parsedData.results);
    setIsLoading(false);
    console.log(parsedData.results[0].id);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearchChange = (searchTerm: string) => {
    // Filter artists based on the search term
    const filtered = artists.filter((artist: results) =>
      artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtists(filtered);
  };
  return (
    <>
      <div className="h-ful bg-black p-4">
        <div className="bg-[#171717]  rounded-2xl">
          <SearchBox onSearchChange={handleSearchChange} />
          <div className="flex flex-wrap pl-6 pb-3 h-full">
            {!isLoading && filteredArtists.length === 0 ? (
              <div className="text-white p-4 rounded-lg mr-5 text-center text-3xl">
                No Artist found!
              </div>
            ) : (
              filteredArtists.map((element: results) => {
                return (
                  <div
                    className="w-full sm:w-1/2 md:w-1/4 xl:1/5"
                    key={element.id}
                  >
                    <ArtistBox
                      id={element.id}
                      imgUrl={
                        element.image.length
                          ? element.image
                          : `https://source.unsplash.com/600x600?${element.name}+music`
                      }
                      artistName={element.name}
                      joinedDate={element.joindate}
                    />
                  </div>
                );
              })
            )}
          </div>
          <MessageBox />
        </div>
      </div>
    </>
  );
};
export default MainBody;
