import BackArrow from "./BackArrow";
import Tracks from "./Tracks";
import { useLocation, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

export default function ArtistProfile() {
  //const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const name = queryParams.get("name") || "Unknown";
  const imageUrl = queryParams.get("imageUrl");
  const joinedDate = queryParams.get("joinedDate");
  return (
    <>
      <div className="h-ful bg-black p-4">
        <div className="bg-[#171717]  rounded-2xl">
          <div className="text-white p-5">
            <Link to="/">
              <BackArrow />
            </Link>
          </div>

          <div className="artistProfile pb-3 pl-5 flex-row md:flex items-center">
            <div className="profileImage  ">
              <img
                className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover"
                src={imageUrl?.toString()}
                alt=""
              ></img>
            </div>
            <div className="artistDetails text-white break-words md:ml-4">
              <div className="font-bold text-4xl md:text-5xl">
                <Markdown>{name}</Markdown>
              </div>
              <div className="text-xl mt-3">
                <span>
                  Joined <b>{joinedDate}</b>
                </span>
              </div>
            </div>
          </div>
          <Tracks artistName={name} />
        </div>
      </div>
    </>
  );
}
