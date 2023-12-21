import { useState } from "react";
import PropTypes from 'prop-types'

export default function ArtistBox(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseleave = () => {
    setIsHovered(false);
  }
  let { imgUrl } = props;
  return (
    <>
      <div className="artistbox">
        <div className="columns-1 sm:columns-2 md:columns-3">
          <div className=" ml-10 mr-10 mb-5 hover:cursor-pointer text-white " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>
            <a href="">
              <div className="relative">
                <img className={`rounded-2xl w-auto h-auto ${isHovered ? 'opacity-50' : 'opacity-100'}`} src={imgUrl} alt=""></img>
                <div className={`absolute top-3/4 left-1/4 ${isHovered ? "" : 'hidden'}`}>
                  <span className=" text-3xl font-bold z-20">Artist Name</span>
                </div>
              </div>
            </a>
          </div>
        </div >
      </div >
    </>
  );
}
ArtistBox.propTypes = {
  imgUrl: PropTypes.string.isRequired,
}

ArtistBox.defaultProps = {
  imgUrl: "images/img2.webp",
}