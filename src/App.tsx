import ArtistProfile from "./components/ArtistProfile";
import MainBody from "./components/MainBody";
import AudioPlayer from "./components/AudioPlayer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/artistProfile/:id" element={<ArtistProfile />} />
        <Route path="/musicplayer/:id" element={<AudioPlayer />} />
      </Routes>
    </>
  );
}
