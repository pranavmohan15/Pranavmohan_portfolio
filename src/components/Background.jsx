import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
  const blobRefs = useRef([])
  const scrollRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const initialPositions = [
      { x: -4, y: 0 },
      { x: -4, y: 0 },
      { x: 20, y: -8 },
      { x: 20, y: -8 },
    ]

    // Set will-change once, not on every frame
    blobRefs.current.forEach(blob => {
      if (blob) {
        blob.style.willChange = "transform"
        blob.style.transition = "transform 1.2s ease-out"
      }
    })

    const updateBlobs = () => {
      const scroll = scrollRef.current
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return
        const pos = initialPositions[index]
        const x = pos.x + Math.sin(scroll / 120 + index * 0.5) * 60  // reduced from 340 to 60
        const y = pos.y + Math.cos(scroll / 120 + index * 0.5) * 20  // reduced from 40 to 20
        blob.style.transform = `translate(${x}px, ${y}px)`
      })
      rafRef.current = null
    }

    const handleScroll = () => {
      scrollRef.current = window.pageYOffset
      // Only schedule one RAF at a time — prevents double-firing
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateBlobs)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0">
        {/* Reduced blur from 128px to 80px, removed mix-blend-multiply (GPU heavy) */}
        <div
          ref={(r) => (blobRefs.current[0] = r)}
          className="absolute top-0 -left-4 md:w-80 md:h-80 w-64 h-64 bg-indigo-600 rounded-full filter blur-[80px] opacity-15 md:opacity-10"
        />
        <div
          ref={(r) => (blobRefs.current[1] = r)}
          className="absolute top-0 -right-4 w-80 h-80 bg-purple-500 rounded-full filter blur-[80px] opacity-15 md:opacity-10 hidden sm:block"
        />
        <div
          ref={(r) => (blobRefs.current[2] = r)}
          className="absolute -bottom-8 left-[-20%] md:left-20 w-80 h-80 bg-indigo-700 rounded-full filter blur-[80px] opacity-15 md:opacity-10"
        />
        <div
          ref={(r) => (blobRefs.current[3] = r)}
          className="absolute -bottom-10 right-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-[80px] opacity-10 md:opacity-8 hidden sm:block"
        />
      </div>
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  )
}

export default AnimatedBackground
