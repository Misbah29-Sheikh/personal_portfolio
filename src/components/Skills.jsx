import React from 'react'

function Skills() {
  return (
    <section id="skills" className="px-6 pt-6 pb-6 md:pt-8 md:pb-8">
      
      <h2 className="text-2xl font-bold md:text-3xl">
        Skills
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="border border-white/10 bg-white/[0.03] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Frontend</h3>
          <p className="mt-4 text-gray-400 leading-7">
            HTML • CSS • JavaScript • React.js • Tailwind CSS
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Backend</h3>
          <p className="mt-4 text-gray-400 leading-7">
            Node.js • Express.js
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Database</h3>
          <p className="mt-4 text-gray-400 leading-7">
            MongoDB • MySQL
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Libraries & Tools</h3>
          <p className="mt-4 text-gray-400 leading-7">
            Mongoose • Git • GitHub • Postman
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Other Skills</h3>
          <p className="mt-4 text-gray-400 leading-7">
            Problem Solving • Debugging • Responsive Design
          </p>
        </div>

        <div className="border border-white/10 bg-white/[0.03] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Languages</h3>
          <p className="mt-4 text-gray-400 leading-7">
            English • Hindi
          </p>
        </div>

      </div>

    </section>
  )
}

export default Skills