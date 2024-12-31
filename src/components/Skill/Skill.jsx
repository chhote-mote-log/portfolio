// import React from 'react'
import SkillCard from "../SkillCard";
const Skill = () => {
    const skillItem = [
        {
          imgSrc: '../../../public/images/figma.svg',
          label: 'Figma',
          desc: 'Design tool'
        },
        {
          imgSrc: '../../../public/images/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '../../../public/images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '../../../public/images/nodejs.svg',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: '../../../public/images/expressjs.svg',
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc: '../../../public/images/mongodb.svg',
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc: '../../../public/images/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '../../../public/images/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '../../../public/images/nextjs.svg',
          label: 'Next',
          desc: 'Framework'
        },
        {
          imgSrc: '../../../public/images/postgresql.svg',
          label: 'PostgreSQL',
          desc: 'Database'
        },
        {
          imgSrc: '../../../public/images/typescript.svg',
          label: 'Typescript',
          desc: 'Programming Language'
        },
        {
          imgSrc: '../../../public/images/docker.svg',
          label: 'Docker',
          desc: 'Containerization'
        },
        {
          imgSrc: '../../../public/images/mysql.svg',
          label: 'MySQL',
          desc: 'Database'
        },
        {
          imgSrc: '../../../public/images/firebase.svg',
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
