import ArtistProfile from "./components/ArtistProfile";
import MainBody from "./components/MainBody";
import AudioPlayer from "./components/AudioPlayer";
import { Routes, Route } from "react-router-dom";

const tracks = [
  {
    album: "Kogani",
    name: "Tango Go",
    album_image:
      "https://usercontent.jamendo.com?type=album&id=5285&width=300&trackid=43904",
    audioUrl:
      "https://prod-1.storage.jamendo.com/?trackid=43904&format=mp31&from=%2BvBxhR8DmGlJLE%2BQ6MiHig%3D%3D%7CzJzxygggft12%2FLYHjXaG5A%3D%3D",
  },
  {
    album: "Kogani",
    name: "Take Off",
    album_image:
      "https://usercontent.jamendo.com?type=album&id=5285&width=300&trackid=43907",
    audioUrl:
      "https://prod-1.storage.jamendo.com/?trackid=43907&format=mp31&from=MpNzxYEsiKBIHZQfk76iHw%3D%3D%7CL29W1bxdmEoXrapAzV6loA%3D%3D",
  },
  {
    album: "Past\u00e8que",
    name: "Sieste ocho",
    album_image:
      "https://usercontent.jamendo.com?type=album&id=1069&width=300&trackid=7042",
    audioUrl:
      "https://prod-1.storage.jamendo.com/?trackid=7042&format=mp31&from=ZPGOsSk8rsRBoQb%2B%2FN9kQg%3D%3D%7CbksmsljyemT0sWyaEVk2hg%3D%3D",
  },
];

export default function App() {
  return (
    <>
      <div className="h-ful bg-black p-4">
        <div className="bg-[#171717]  rounded-2xl">
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/artistProfile/:id" element={<ArtistProfile />} />
            <Route
              path="/musiclpayer"
              element={<AudioPlayer tracks={tracks} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

//

// export default function App() {
//   //const audioUrl ="https://prod-1.storage.jamendo.com/?trackid=43904&format=mp31&from=%2BvBxhR8DmGlJLE%2BQ6MiHig%3D%3D%7CzJzxygggft12%2FLYHjXaG5A%3D%3D";
//   return (
//     <div>
//       <AudioPlayer tracks={tracks}></AudioPlayer>
//     </div>
//   );
// }
