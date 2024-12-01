"use client";
import { ImSpinner8 } from "react-icons/im";
import { FaImage } from "react-icons/fa";
import { ImageDisplayProps } from './types'

export default function ImageDisplay({ isLoading, url }: ImageDisplayProps) {
  return (
    <div className="mt-6 aspect-square w-full bg-white bg-opacity-20 rounded-lg flex items-center justify-center border-2 border-dashed border-white border-opacity-30">
      {isLoading ? (
        <ImSpinner8 className="text-white text-4xl animate-spin" />
      ) : url ? (
        <img src={url} alt="Generated" className="rounded-lg object-cover" />
      ) : (
        <div className="text-white text-opacity-50 text-center">
          <FaImage className="text-4xl mb-2 mx-auto" />
          <p>Your generated image will appear here</p>
        </div>
      )}
    </div>
  );
}
