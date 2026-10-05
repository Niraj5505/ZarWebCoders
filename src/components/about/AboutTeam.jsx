import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function AboutTeam({ onJoinClick }) {
  const team = [
    {
      name: 'Abuzar Munshi',
      role: 'Founder & CEO',
      image: '/assets/portrait-abuzar.png',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Tufail Ahmed',
      role: 'Blockchain Developer',
      image: '/assets/portrait-tufail.png',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Rizwana Khan',
      role: 'Frontend Developer',
      image: '/assets/portrait-rizwana.png',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Sameer Shaikh',
      role: 'Smart Contract Developer',
      image: '/assets/portrait-sameer.png',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com',
        github: 'https://github.com',
      },
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Paragraph & Join Team Button */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-3">
              OUR TEAM
            </span>

            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Meet the People <br />
              <span className="text-slate-900">Behind ZarWebCoders</span>
            </h2>

            <p className="text-slate-600 text-[14px] leading-relaxed mb-6 max-w-sm">
              A diverse team of developers, designers and blockchain experts working together to build the future of Web3.
            </p>

            <button
              onClick={onJoinClick}
              className="group inline-flex items-center gap-2 bg-[#eaf6ee] hover:bg-[#d9efe0] text-[#1e874c] font-semibold text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right Column: 4 Team Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white border border-slate-200/80 hover:border-emerald-300 rounded-[16px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Portrait */}
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={720}
                    height={600}
                  />
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-4 text-left flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-900 tracking-tight group-hover:text-emerald-900 transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-2 text-slate-400 mt-3 pt-2 border-t border-slate-100">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28m-1.4 9.74h2.8v-8.37h-2.8v8.37Z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name} X`}
                    >
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
