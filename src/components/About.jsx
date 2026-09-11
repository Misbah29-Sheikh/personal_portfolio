import React from 'react'

function About() {
  return (
    <section id="about" className="px-6 pt-12 pb-6 md:pt-16 md:pb-8">
      <div>

        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          About Me
        </h2>

        <div className="mt-5">
          <p className="text-base leading-7 text-gray-300 md:text-lg">
            I’m a BSc Information Technology graduate with a strong interest
            in web development. I work with JavaScript and the MERN stack,
            building projects that help me turn what I learn into practical
            applications.
          </p>

          <p className="mt-6 text-base leading-7 text-gray-300 md:text-lg">
            I enjoy understanding how things work, solving problems, and
            continuously improving my development skills. From creating
            responsive interfaces with React to building backend APIs with
            Node.js and Express, I’ve been exploring different areas of
            full-stack development through hands-on projects.
          </p>

          <p className="mt-6 text-base leading-7 text-gray-300 md:text-lg">
            I’m looking for an opportunity where I can apply my skills, learn
            from experienced developers, and continue growing as a software
            professional.
          </p>
        </div>

      </div>
    </section >
  )
}

export default About