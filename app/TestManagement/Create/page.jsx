"use client"
import { MultiSelect } from "@/components/MultiSelect";
import { FaSafari, FaChrome, FaEdge } from "react-icons/fa";


const browserIcons = {
  chromeIcon: FaChrome,
  edgeIcon: FaEdge,
  safariIcon: FaSafari,
}

const browserOptions = [
  { value: "chrome", label: "Chrome", icon: browserIcons.chromeIcon },
  { value: "edge", label: "Edge", icon: browserIcons.edgeIcon },
  { value: "safari", label: "Safari", icon: browserIcons.safariIcon },
];

const Create = () => {
  return (
    <>


      <div className="p-6 bg-black text-white rounded-xl shadow-md">
        <MultiSelect
          options={browserOptions}
          placeholder="Select browser"
          className="w-full h-5 bg-input text-white/70 hover:bg-black border-accent"
          variant="inverted"
        />
        <h2 className="text-xl font-semibold mb-4">Run Java Program</h2>
        <button
          className="bg-accent text-black px-4 py-2 rounded-md mb-4"
        >
          Run
        </button>
      </div>
    </>


  );
}

export default Create;