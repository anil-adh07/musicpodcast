import BackArrow from "./BackArrow";
import Tracks from "./Tracks";
import { useLocation, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

interface ArtistData {
  artistid: string;
  imgurl: string;
  artistname: string;
  joineddate: string;
}
export default function ArtistProfile() {
  // const { artistId } = useParams<{ id: string }>();
  const location = useLocation();
  const artistData =
    (location.state as { artistData: ArtistData[] })?.artistData || [];
  return (
    <>
      <div className="h-ful bg-black p-4">
        <div className="bg-[#171717]  rounded-2xl">
          {artistData.map((artist) => (
            <>
              <div className="text-white p-5">
                <Link to="/">
                  <BackArrow />
                </Link>
              </div>

              <div className="artistProfile pb-3 pl-5 flex-row md:flex items-center">
                <div className="profileImage  ">
                  <img
                    className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover"
                    src={artist.imgurl?.toString()}
                    alt=""
                  ></img>
                </div>
                <div className="artistDetails text-white break-words md:ml-4">
                  <div className="font-bold text-4xl md:text-5xl">
                    <Markdown>{artist.artistname}</Markdown>
                  </div>
                  <div className="text-xl mt-3">
                    <span>
                      Joined <b>{artist.joineddate}</b>
                    </span>
                  </div>
                </div>
              </div>
              <Tracks artistId={artist.artistid} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
