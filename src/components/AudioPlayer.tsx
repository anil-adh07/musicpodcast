import { useState, useRef, useEffect } from "react";
import {
  FaCirclePlay,
  FaCirclePause,
  FaVolumeHigh,
  FaVolumeXmark,
} from "react-icons/fa6";
import { IoPlaySkipForward, IoPlaySkipBackSharp } from "react-icons/io5";

interface Track {
  name: string;
  album: string;
  album_image: string;
  audioUrl: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

const MusicPlayer = ({ tracks }: MusicPlayerProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

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

  return (
    <div className="m-auto p-5  rounded-lg h-screen  bg-gradient-to-br from-red-200 via-blue-50 to-slate-600">
      <div className="mt-36">
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-48 h-48 object-cover rounded-md"
            src={tracks[currentTrackIndex].album_image}
            alt=""
          />
        </div>

        <div className="text-center mb-2">
          <h3 className="text-xl font-bold">
            {tracks[currentTrackIndex].name}
          </h3>
          <p className="text-gray-600">{tracks[currentTrackIndex].album}</p>
        </div>

        <audio
          ref={audioRef}
          src={tracks[currentTrackIndex].audioUrl}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className="flex items-center justify-center mt-4">
          <span className="mr-4">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={currentTime / duration || 0}
            min={0}
            max={1}
            step={0.001}
            onChange={(e) => handleSeek(parseFloat(e.target.value))}
            className="w-60 h-1"
          />
          <span className="ml-4">{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-5">
          <button
            onClick={prevTrack}
            className="text-2xl  text-blue-500 focus:outline-none"
          >
            <IoPlaySkipBackSharp />
          </button>

          <button
            onClick={playPauseToggle}
            className="text-4xl text-blue-500 focus:outline-none"
          >
            {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
          </button>

          <button
            onClick={nextTrack}
            className="text-2xl  text-blue-500 focus:outline-none "
          >
            <IoPlaySkipForward />
          </button>
          <div className=" flex justify-center text-2xl space-x-4  text-blue-500">
            <div onClick={toggleMute} className="cursor-pointer">
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
  );
};

export default MusicPlayer;
