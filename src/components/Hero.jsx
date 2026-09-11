import React from 'react'

function Hero() {
  return (
    <section className="flex items-center px-6 pt-16">
      <div className="w-full md:w-3/5 lg:w-3/5">

        <p className="text-xl leading-tight tracking-tight md:text-2xl">
          BSc Information Technology Graduate
        </p>

        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Building modern web experiences, one project at a time.
        </h1>

        <p className="mt-6  text-base leading-7 text-gray-400 md:text-lg">
          I create responsive, user-focused web applications with modern web technologies.
        </p>

        <a
          href="#projects"
          className="inline-block mt-8 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0f1110] transition hover:bg-gray-200"
        >
          View Projects
        </a>

      </div>
    </section>
  )
}

export default Hero