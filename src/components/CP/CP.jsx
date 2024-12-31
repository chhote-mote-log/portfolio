// import React from 'react'
import AchieveCard from "../../AchieveCard";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

const CP = () => {

  const contents = [
    {
      content: "I have consistently honed my problem-solving skills, solving 300+ questions on LeetCode.",
      label: "LeetCode Profile",
      imgSrc: "../../../public/images/person-7.png"
    },
    {
      content: "Achieving a 3-star rating on CodeChef reflects my ability to excel in competitive programming.",
      label: "Competitive Programming",
      imgSrc: "../../../public/images/person-1.png"
    },
    {
      content: "Possess strong knowledge of GitHub for version control and collaborative development.",
      label: "GitHub Expertise",
      imgSrc: "../../../public/images/person-6.png"
    },
    {
      content: "I am currently an apprentice on Codeforces, steadily improving my skills in algorithmic challenges.",
      label: "Codeforces Progress",
      imgSrc: "../../../public/images/person-2.png"
    },
    {
      content: "Contributed to open-source projects as part of GirlScript Summer of Code (GSSoC).",
      label: "GSSoC Contribution",
      imgSrc: "../../../public/images/person-3.jpg"
    },
    {
      content: "Actively participated in Hacktoberfest, contributing to open-source repositories worldwide.",
      label: "Hacktoberfest",
      imgSrc: "../../../public/images/person-5.png"
    },
    {
      content: "Completed a comprehensive Python course on Udemy, strengthening my programming foundation.",
      label: "Python Course",
      imgSrc: "../../../public/images/person-4.jpg"
    },
  ];    
      useGSAP(()=>{
        gsap.to('.scrub-slide',{
          scrollTrigger:{
            trigger:'.scrub-slide',
            start:'280% 80%',
            end:'600% 80%',
            scrub:true,
          
          },
          x:'-1000'
        })
      })
  
  return (
    <div>
      <section className="section-cp overflow-hidden" id="achievement">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Achievements
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
              {contents.map(({content,label,imgSrc},key)=>(
                <AchieveCard key={key} content={content} label={label} imgSrc={imgSrc}/>
              ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default CP
