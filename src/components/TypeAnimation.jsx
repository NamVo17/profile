"use client"

import { useState, useEffect } from "react"

export default function TypeAnimation({ words = [], typingSpeed = 150, deletingSpeed = 100, delayBetween = 2000 }) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        // If waiting, do nothing until wait time is over
        if (isWaiting) {
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        // If deleting
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1))

          // If all text is deleted, move to next word
          if (text.length === 1) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
        // If typing
        else {
          setText(currentWord.substring(0, text.length + 1))

          // If word is complete, wait before deleting
          if (text.length === currentWord.length - 1) {
            setIsWaiting(true)
          }
        }
      },
      isWaiting ? delayBetween : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, isWaiting, words, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className="text-cyan-400 font-semibold">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}

