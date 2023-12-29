import { useState, useRef, useEffect } from "react";
import {
  FaCirclePlay,
  FaCirclePause,
  FaVolumeHigh,
  FaVolumeXmark,
} from "react-icons/fa6";
import { IoPlaySkipForward, IoPlaySkipBackSharp } from "react-icons/io5";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";

interface Track {
  album_id: string;
  album_name: string;
  id: string;
  name: string;
  duration: string;
  releasedate: string;
  license_ccurl: string;
  album_image: string;
  image: string;
  audio: string;
  audiodownload: string;
  audiodownload_allowed: boolean;
}

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const tracks = (location.state as { tracks: Track[] })?.tracks || [];
  const [currentTrackIndex, setCurrentTrackIndex] =
    useState(findAlbumIndex(tracks, id)) || 0;
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current?.addEventListener("ended", () => {
      nextTrack();
    });
  }, [currentTrackIndex]);

  const handleBackpage = () => {
    navigate(-1);
  };

  function findAlbumIndex(tracks: Track[], albumId?: string): number {
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].album_id === albumId) {
        return i; // Return the index if a match is found
      }
    }
    return -1;
  }
  const playPauseToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const nextTrack = () => {
    if (audioRef.current) {
      // If audio is currently playing, pause and reset it
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      // Set event listener to play after the audio is loaded
      audioRef.current.addEventListener("loadeddata", () => {
        setIsPlaying(true); // Autoplay the next track
        audioRef.current?.play(); // Optional chaining to handle null
      });
    }
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const prevTrack = () => {
    if (audioRef.current) {
      // If audio is currently playing, pause and reset it
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      // Set event listener to play after the audio is loaded
      audioRef.current.addEventListener("loadeddata", () => {
        setIsPlaying(true); // Autoplay the previous track
        audioRef.current?.play(); // Optional chaining to handle null
      });
    }

    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      const newTime = value * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };
  const calculateTimeFromCursor = (e: React.MouseEvent<HTMLInputElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = offsetX / rect.width;
    const time = percentage * duration;
    return time;
  };

  return (
    <>
      <div className="m-auto p-5  rounded-lg h-screen  bg-gradient-to-br from-gray-800 via-slate-700 to-zinc-800">
        <div
          onClick={handleBackpage}
          className=" rounded-full  hover:cursor-pointer hover absolute hover:bg-neutral-400 text-white ml-4 mt-4 hover:text-black"
        >
          <div className="">
            <BackArrow />
          </div>
        </div>
        <div className="mt-36">
          <div className="flex items-center justify-center mb-4">
            <img
              className="w-48 h-48 object-cover rounded-md "
              src={tracks[currentTrackIndex].album_image}
              alt=""
            />
          </div>

          <div className="text-center mb-2">
            <h3 className="text-xl font-bold text-white">
              {tracks[currentTrackIndex].album_name}
            </h3>
            <p className="text-white">{tracks[currentTrackIndex].name}</p>
          </div>

          <audio
            ref={audioRef}
            src={tracks[currentTrackIndex].audio}
            onTimeUpdate={handleTimeUpdate}
          >
            Your browser does not support the audio element.
          </audio>

          <div className="flex items-center justify-center mt-6">
            <span className="mr-4 text-white">{formatTime(currentTime)}</span>
            <input
              type="range"
              value={currentTime / duration || 0}
              min={0}
              max={1}
              step={0.001}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              onMouseMove={(e) => {
                const time = calculateTimeFromCursor(e);
                setTooltipContent(formatTime(time));
              }}
              onMouseOut={() => {
                setTooltipContent("");
              }}
              className="w-60 h-1 cursor-pointer"
            />
            {tooltipContent && (
              <div className="tooltip absolute -mt-12 p-1 text-white">
                {tooltipContent}
              </div>
            )}
            <span className="ml-4 text-white">{formatTime(duration)}</span>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-5 text-2xl">
            <button
              onClick={prevTrack}
              className="text-2xl  focus:outline-none text-white"
            >
              <IoPlaySkipBackSharp />
            </button>

            <button
              onClick={playPauseToggle}
              className="text-4xl text-white focus:outline-none"
            >
              {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
            </button>

            <button
              onClick={nextTrack}
              className="text-2xl  text-white focus:outline-none "
            >
              <IoPlaySkipForward />
            </button>
            <div className=" flex justify-center  space-x-4  text-white">
              <div onClick={toggleMute} className="cursor-pointer ">
                <span>{isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}</span>
              </div>

              <input
                type="range"
                value={volume}
                min={0}
                max={1}
                step={0.1}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-20 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
