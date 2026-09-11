import React, { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('smisbah2911@gmail.com')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="px-6 pt-6 pb-12 md:pt-8 md:pb-16"
    >
      <h2 className="text-2xl font-bold md:text-3xl">
        Let's Connect
      </h2>

      <div className="mt-6 space-y-5 text-lg leading-7 text-gray-400 md:text-xl">
        <p className="flex flex-wrap items-center gap-3">
          <span>The best way to reach me is via email:</span>

          <a
            href="mailto:smisbah2911@gmail.com"
            className="text-white transition hover:text-gray-300"
          >
            smisbah2911@gmail.com
          </a>

          <button
            onClick={copyEmail}
            className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </p>

        <p>
          You can also find me on{' '}
          <a
            href="https://github.com/misbah29-sheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-gray-300"
          >
            GitHub
          </a>{' '}
          or{' '}
          <a
            href="https://www.linkedin.com/in/misbah-sheikh-509675340/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:text-gray-300"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Contact