import { FaShuffle } from "react-icons/fa6";
export default function Tracks() {
  return (
    <>
      <div className="artistTracks  text-white p-5 md:p-12 sticky top-0">
        <div className=" ">
          <div className="font-bold text-3xl  tracking-wide">
            <span> Tracks</span>
          </div>
          <div className="mt-8 ml-4 text-2xl">
            <span>
              <FaShuffle />
            </span>
          </div>
        </div>
      </div>
      <div className="songsAll text-white ml-5 mt-5 md:ml-12 mr-12 pb-5 md:mt-0 ">
        <div>
          <ul className=" hover:bg-neutral-700 hover:cursor-pointer rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <li>
                  <div className="opacity-50">
                    <img
                      className="w-16 h-16 object-cover rounded-2xl p-2"
                      src="images/img2.webp"
                      alt=""
                    ></img>
                  </div>
                </li>
                <li>
                  <div className="ml-3 text-2xl">
                    <span>Title</span>
                  </div>
                  <div className="ml-3 text-sm">
                    <span>Description</span>
                  </div>
                </li>
              </div>
              <li>
                <div className="mr-5">
                  <span> 0:00 </span>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
