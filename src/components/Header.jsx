import React from 'react'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1110] border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">

          <h1 className="text-lg font-semibold">
            Sheikh Misbah
          </h1>

          {/* Mobile menu button */}
          <button
            className="text-gray-300 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>

            <li>
              <a className="text-gray-300 hover:text-white transition-colors" href="/resume.pdf" download >
                Resume
              </a>
            </li>
          </ul>


        </div>
        {/*Mobile menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>

            <li>
              <a onClick={() => setIsOpen(false)} href="/resume.pdf" download >
                Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header