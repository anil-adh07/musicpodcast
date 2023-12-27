import { useState, useEffect } from "react";
import { FaShuffle } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface TracksProps {
  artistName: string;
}
export default function Tracks({ artistName }: TracksProps) {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    const url: string = `https://api.jamendo.com/v3.0/artists/tracks/?client_id=d79377aa&format=jsonpretty&order=track_name_desc&name=${artistName}&album_datebetween=0000-00-00_2012-01-01`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setTracks(parsedData.results[0].tracks);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <>
      <div className="artistTracks  text-white p-5 md:p-12 sticky top-0 flex flex-row">
        <div className="">
          <div className="font-bold text-3xl  tracking-wide">
            <span> Tracks</span>
          </div>
          <div className="mt-7 p-4 mr-10 text-2xl hover:bg-neutral-700 hover:cursor-pointer rounded-full">
            <span className="">
              <FaShuffle />
            </span>
          </div>
        </div>
      </div>
      <div className="tracksConatinerHeight overflow-y-auto">
        {tracks.map((element, index) => {
          return (
            <>
              <div
                className="songsAll text-white ml-5 mt-5 md:ml-12 mr-12 pb-5 md:mt-0 "
                key={index}
              >
                <div>
                  <Link to={"/musiclpayer"}>
                    <ul className=" hover:bg-neutral-700 hover:cursor-pointer rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <li>
                            <div className="opacity-50">
                              <img
                                className="w-16 h-16 object-cover rounded-2xl p-2"
                                src={element["album_image"]}
                                alt=""
                              ></img>
                            </div>
                          </li>
                          <li>
                            <div className="ml-3 text-2xl">
                              <span>{element["album_name"]}</span>
                            </div>
                            <div className="ml-3 text-sm">
                              <span>{element["name"]}</span>
                            </div>
                          </li>
                        </div>
                        <li>
                          <div className="mr-5">
                            <span>
                              {Math.floor(element["duration"] / 60)}:
                              {String(
                                element["duration"] -
                                  Math.floor(element["duration"] / 60) * 60
                              ).padStart(2, "0")}
                            </span>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
