import css from "../assets/img/css.png"
import express from "../assets/img/express.png"
import firebase from "../assets/img/firebase.png"
import github from "../assets/img/github.png"
import html from "../assets/img/html.jpg"
import javascript from "../assets/img/javascript.jpg"
import material from "../assets/img/material.png"
import mongodb from "../assets/img/mongodb.jpg"
import next from "../assets/img/next.png"
import node from "../assets/img/node.png"
import python from "../assets/img/python.png"
import react from "../assets/img/react.png"
import tailwind from "../assets/img/tailwind.jpg"
import redux from "../assets/img/redux.png"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills =[
    {
        title:"React",
        imageUrl:react,
        skill_percentage:"90%"
    },
    {
        title:"Express",
        imageUrl:express,
        skill_percentage:"80%"
    },
    {
        title:"Firebase",
        imageUrl:firebase,
        skill_percentage:"80%"
    },
    {
        title:"Material UI",
        imageUrl:material,
        skill_percentage:"90%"
    },
    {
        title:"Git",
        imageUrl:github,
        skill_percentage:"80%"
    },
    {
        title:"JavaScript",
        imageUrl:javascript,
        skill_percentage:"90%"
    },
    {
        title:"Next",
        imageUrl:next,
        skill_percentage:"80%"
    },
    {
        title:`Mongodb`,
        imageUrl:mongodb,
        skill_percentage:"80%"
    },
    {
        title:"CSS",
        imageUrl:css,
        skill_percentage:"80%"
    },
    {
        title:"Python",
        imageUrl:python,
        skill_percentage:"85%"
    },
    {
        title:"Redux",
        imageUrl:redux,
        skill_percentage:"80%"
    },
    {
        title:"node Js",
        imageUrl:node,
        skill_percentage:"80%"
    },
    {
        title:"Tailwind",
        imageUrl:tailwind,
        skill_percentage:"85%"
    },
    {
        title:"HTML",
        imageUrl:html,
        skill_percentage:"90%"
    }


  ]
  return (

    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p style={{textAlign:"left"}}>As a web developer with 2 years of learning, I specialize in React, Next.js, and core web technologies. Proficient in Node.js, Express.js, and MongoDB for backend development. Skilled in state management (Redux) and version control (GitHub). A collaborative team player, I actively contribute to projects. Committed to continuous learning, recently adding Python to my skill set.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                        {  
                          skills.map((skill,index) => {
                            return (
                                <div className="item skill-imgbx" key={index}>
                                <img src={skill.imageUrl} alt={skill.title} />
                                <div className="skill-txtx">
                                    <span>{skill.skill_percentage}</span>
                                </div>
                                <h5>{skill.title}</h5>
                            </div>
                            )
                            })
                        }
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}