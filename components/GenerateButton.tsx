"use client";
import { ImSpinner8 } from "react-icons/im";
import { FaMagic } from "react-icons/fa";
import { GenerateButtonProps } from './types'

export default function GenerateButton({
  isLoading,
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
    >
      {isLoading ? (
        <>
          <ImSpinner8 className="mr-2 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <FaMagic className="mr-2" />
          Generate Image
        </>
      )}
    </button>
  );
}
