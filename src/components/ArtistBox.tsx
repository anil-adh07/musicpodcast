import { useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

interface ArtistBoxProps {
  id: string;
  imgUrl: string;
  artistName: string;
  joinedDate: string;
}
interface ArtistData {
  artistid: string;
  imgurl: string;
  artistname: string;
  joineddate: string;
}
export default function ArtistBox({
  id,
  imgUrl,
  artistName,
  joinedDate,
}: ArtistBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseleave = () => {
    setIsHovered(false);
  };

  const artistData: ArtistData[] = [
    {
      artistid: id,
      imgurl: imgUrl,
      artistname: artistName,
      joineddate: joinedDate,
    },
  ];
  return (
    <>
      <div className="artistbox">
        <div
          className="hover:cursor-pointer text-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        >
          {artistData.map((artist) => (
            <div key={artist.artistid}>
              <Link
                to={`/artistProfile/${artist.artistid}`}
                state={{ artistData }}
              >
                <div className="relative mr-5 mb-5">
                  <span className="absolute top-8 left-8 font-bold uppercase text-lg text-cyan-400 tracking-wide">
                    Artist
                  </span>
                  <img
                    className={`rounded-2xl w-full h-80 object-cover ${
                      isHovered ? "opacity-50" : "opacity-100"
                    }`}
                    src={imgUrl}
                    alt=""
                  ></img>
                  <div
                    className={`absolute bottom-0 left-9 w-full overflow-hidden transition-all duration-500 ${
                      isHovered ? "h-24" : "h-0"
                    }`}
                  >
                    <Markdown className=" text-2xl font-bold z-20 ">
                      {artistName}
                    </Markdown>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
