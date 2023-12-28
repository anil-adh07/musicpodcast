import { useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

interface ArtistBoxProps {
  imgUrl: string;
  artistName: string;
  joinedDate: string;
}
export default function ArtistBox({
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

  const id: number = 1;
  return (
    <>
      <div className="artistbox">
        <div
          className="hover:cursor-pointer text-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        >
          <div>
            <Link
              to={`/artistProfile/${id}?name=${artistName}&imageUrl=${imgUrl}&joinedDate=${joinedDate}`}
            >
              <div className="relative mr-5 mb-5">
                <span className="absolute top-8 left-8 font-bold uppercase text-lg text-cyan-400 tracking-wide">
                  Artist
                </span>
                <img
                  className={`rounded-2xl w-full h-96 object-cover ${
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
                  <Markdown className=" text-2xl font-bold z-20">
                    {artistName}
                  </Markdown>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
