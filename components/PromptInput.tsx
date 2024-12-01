"use client";
import { FaMagic } from "react-icons/fa";
import {PromptInputProps} from './types'

export default function PromptInput({ text, setText }: PromptInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your prompt here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
      <FaMagic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white opacity-50" />
    </div>
  );
}
