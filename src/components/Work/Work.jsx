// import React from 'react'
import ProjectCard from "../ProjectCard";
const Work = () => {
    const works = [
        {
          imgSrc: '../../../public/images/project-1.jpg',
          title: 'Full stack music app',
          tags: ['API', 'MVC', 'Development'],
          projectLink: 'https://musify-5al0.onrender.com/'
        },
        {
          imgSrc: '../../../public/images/project-2.jpg',
          title: 'Free stock photo app',
          tags: ['API', 'SPA'],
          projectLink: 'https://pixstock-official.vercel.app/'
        },
        {
          imgSrc: '../../../public/images/project-3.jpg',
          title: 'Recipe app',
          tags: ['Development', 'API'],
          projectLink: ''
        },
        {
          imgSrc: '../../../public/images/project-4.jpg',
          title: 'Real state website',
          tags: ['Web-design', 'Development'],
          projectLink: ''
        },
        {
          imgSrc: '../../../public/images/project-5.jpg',
          title: 'eCommerce website',
          tags: ['eCommerce', 'Development'],
          projectLink: ''
        },
        {
          imgSrc: '../../../public/images/project-6.jpg',
          title: 'vCard Personal portfolio',
          tags: ['Web-design', 'Development'],
          projectLink: ''
        },
      ];
  return (
    <div>
      <section className="section" id="work">
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My PortFolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} key={key} classes="reveal-up"/>
                ))
            }
            </div>
        </div>
      </section>
    </div>
  )
}

export default Work
