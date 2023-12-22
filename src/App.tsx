import ArtistProfile from "./components/ArtistProfile";
import MainBody from "./components/MainBody";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="h-ful bg-black p-4">
        <div className="bg-[#171717]  rounded-2xl">
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/artistProfile" element={<ArtistProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
