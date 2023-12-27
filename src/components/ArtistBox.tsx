import { useState } from "react";
import { Link } from "react-router-dom";

interface ArtistBoxProps {
  imgUrl: string;
  artistName: string;
  joinedDate: string;
}
interface dataArray {
  id: number;
  name: string;
  image: string;
  j_date: string;
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

  const dataArray: dataArray[] = [
    { id: 1, name: artistName, image: imgUrl, j_date: joinedDate },
  ];

  return (
    <>
      <div className="artistbox">
        <div
          className="hover:cursor-pointer text-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        >
          {dataArray.map((artist, index) => (
            <div key={index}>
              <Link
                to={`/artistProfile/${artist.id}?name=${artist.name}&imageUrl=${artist.image}&joinedDate=${artist.j_date}`}
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
                    <span className=" text-2xl font-bold z-20">
                      {artistName}
                    </span>
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
