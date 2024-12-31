// import React from 'react'
import SkillCard from "../SkillCard";
const Skill = () => {
    const skillItem = [
        {
          imgSrc: '/images/figma.svg',
          label: 'Figma',
          desc: 'Design tool'
        },
        {
          imgSrc: '/images/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/images/nodejs.svg',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: '/images/expressjs.svg',
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc: '/images/mongodb.svg',
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc: '/images/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/images/nextjs.svg',
          label: 'Next',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/postgresql.svg',
          label: 'PostgreSQL',
          desc: 'Database'
        },
        {
          imgSrc: '/images/typescript.svg',
          label: 'Typescript',
          desc: 'Programming Language'
        },
        {
          imgSrc: '/images/docker.svg',
          label: 'Docker',
          desc: 'Containerization'
        },
        {
          imgSrc: '/images/mysql.svg',
          label: 'MySQL',
          desc: 'Database'
        },
        {
          imgSrc: '/images/firebase.svg',
          label: 'Firebase',
          desc: 'Front-End Database'
        },
      ];
  return (
    <div>
      <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high performing websites & applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>(
                        <div key={key} className="">
                            <SkillCard src={imgSrc} label={label} desc ={desc} classes="reveal-up"/>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
