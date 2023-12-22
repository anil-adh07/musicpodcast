import BackArrow from "./BackArrow";
import Tracks from "./Tracks";

export default function ArtistProfile() {
  return (
    <>
      <BackArrow />
      <div className="artistProfile pb-3 pl-5 flex-row md:flex items-center">
        <div className="profileImage  ">
          <img
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover"
            src="images/img1.webp"
            alt=""
          ></img>
        </div>
        <div className="artistDetails text-white break-words md:ml-4">
          <div className="font-bold text-4xl md:text-5xl">
            <span>Artist Name</span>
          </div>
          <div className="text-xl mt-3">
            <span>
              Joined <b>Date</b>
            </span>
          </div>
        </div>
      </div>
      <Tracks />
    </>
  );
}
