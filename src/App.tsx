import ArtistBox from "./components/ArtistBox";
import MainBody from "./components/MainBody";
import SearchBox from "./components/SearchBox";


export default function App() {
  return (
    <>
      <div className="h-ful bg-black p-1">
        <div className="bg-[#171717] m-2 rounded-2xl">
          <SearchBox />
          <ArtistBox />
          {/* <MainBody /> */}
        </div>
      </div>

    </>
  );
}
