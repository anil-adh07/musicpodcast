import { useState } from "react";
import { Link } from "react-router-dom";

interface ArtistBoxProps {
  imgUrl: string;
  artistName: string;
}

export default function ArtistBox({ imgUrl, artistName }: ArtistBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseleave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="artistbox">
        <div
          className="hover:cursor-pointer text-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        >
          <Link to="/artistProfile">
            <div className="relative mr-5 mb-5">
              <span className="absolute top-8 left-8 font-bold uppercase text-lg text-cyan-400 tracking-wide">
                Artist
              </span>
              <img
                className={`rounded-2xl w-full h-96 ${
                  isHovered ? "opacity-50" : "opacity-100"
                }`}
                src={imgUrl}
                alt=""
              ></img>
              <div
                className={`absolute top-72 left-8 ${
                  isHovered ? "" : "hidden"
                }`}
              >
                <span className=" text-2xl font-bold z-20">{artistName}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
