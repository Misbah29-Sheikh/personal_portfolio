import React, { useState } from 'react'

function ProjectCard({
  title,
  description,
  technologies,
  images,
  github,
  liveDemo
}) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0f1110] lg:flex-row">

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">

        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
          {description}
        </p>

        {/* Technologies */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-4 pt-8">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
          >
            GitHub
          </a>

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0f1110] transition hover:bg-gray-200"
            >
              Live Demo
            </a>
          )}
        </div>

      </div>

      {/* Image Carousel */}
      <div className="flex flex-1 flex-col justify-center border-t border-white/10 p-4 sm:p-6 lg:border-l lg:border-t-0">

        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0f1110]">
          <img
            src={images[currentImage]}
            alt={`${title} screenshot`}
            className="aspect-video w-full object-cover"
          />
        </div>

        {/* Carousel Controls */}
        <div className="mt-4 flex items-center justify-center gap-5 text-sm">
          <button
            onClick={() =>
              setCurrentImage(
                (currentImage - 1 + images.length) % images.length
              )
            }
            className="text-gray-400 transition hover:text-white"
          >
            ← Prev
          </button>

          <span className="text-gray-500">
            {currentImage + 1} / {images.length}
          </span>

          <button
            onClick={() =>
              setCurrentImage(
                (currentImage + 1) % images.length
              )
            }
            className="text-gray-400 transition hover:text-white"
          >
            Next →
          </button>
        </div>

      </div>

    </div>
  )
}

export default ProjectCard