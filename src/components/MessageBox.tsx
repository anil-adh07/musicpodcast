import { MdOutlineMessage } from "react-icons/md";

export default function MessageBox() {
  return (
    <div className="messageBox">
      <div className="fixed bottom-3 right-2 h-16 w-16 flex bg-[#447991]  rounded-full hover:cursor-pointer">
        <span className="p-4 text-white text-[2rem]">
          <MdOutlineMessage />
        </span>
      </div>
    </div>
  );
}
