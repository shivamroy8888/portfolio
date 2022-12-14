/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "MYNTRA",
      img: "/myntrapic.png",
      gLink: "https://github.com/PrabhatAcharya/Myntra",
      lLink: "https://myntra-masai.netlify.app/index.html",
      des: "Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. This is a collaborative project, built in 4 days by a team of 4 developers."
    },
    {
      title: "PHARMEASY",
      img: "/pharm.png",
      gLink: "https://github.com/Md-Irshad-Alam/pharmEasy_clone",
      lLink: "https://fascinating-squirrel-599b77.netlify.app",
      des: "PharmEasy offers 1 lakh+ medicines and health products across various categories through its retail partners which are spread across the country. You can simply place an order on our website/app and we will deliver your online medicine order in as low as 4 hours, with a guaranteed delivery to you in 24-48* hrs! You can either pay online or opt for COD cash on delivery for your orders. This is a collaborative project, built in 4 days by a team of 3 developers."
    },
    {
      title: "YOUTUBE",
      img: "/yt.png",
      gLink: "https://github.com/shivamroy8888",
      lLink: "https://gorgeous-youtube-03cd4f.netlify.app",
      des: "This YouTube is created by me i have used google API."
    },
    {
      title: "FOOD SEARCH MINI PROJECT",
      img: "/food.png",
      gLink: "https://github.com/shivamroy8888",
      lLink: "https://foodapp-created-by-shivam.netlify.app",
      des: "This food app search app is created by me as a mini project"
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/shivamroy8888"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
