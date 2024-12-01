'use client'
import { useState } from 'react'
import PromptInput from './PromptInput'
import GenerateButton from './GenerateButton'
import ImageDisplay from './ImageDisplay'
import { FaImage } from 'react-icons/fa'
import query from './query'

export default function ImageGenerator() {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [url, setUrl] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!text.trim()) {
      setError("Please enter a valid prompt!")
      return
    }

    setUrl('')
    setError(null)
    setIsLoading(true)

    try {
      const input = { inputs: text }
      const result = await query(input)
      setUrl(result)
    } catch (error) {
      setError("Failed to generate the image. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
          <FaImage className="mr-2" />
          AI Image Generator
        </h1>
        <div className="space-y-4">
          <PromptInput text={text} setText={setText} />
          <GenerateButton isLoading={isLoading} onClick={handleGenerate} />
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">
              {error}
            </p>
          )}
        </div>
        <ImageDisplay isLoading={isLoading} url={url} />
      </div>
    </div>
  )
}
