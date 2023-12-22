import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BackArrow() {
  return (
    <>
      <div className=" p-8">
        <Link to="/">
          <span className="text-white text-xl">
            <FaArrowLeftLong />
          </span>
        </Link>
      </div>
    </>
  );
}
