import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Adobe Photoshop",
      icon: backend,
    },
    {
      title: "Adobe InDesign",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // 3d Loptice koje treba skinuti sa neta vjrv samo sliku i dodati
    {
      name: "Adobe Photoshop",
      icon: git,
    },
    {
      name: "Adobe InDesign",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Graphic Design",
      company_name: "Vibes Automobile AG",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2022 - April 2024",
      points: [
        "Designing and maintaining web posts using Adobe Photoshop and Adobe InDesign and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend hiring Nikola. I was thrilled I found him as I was struggling with other freelancers. Nikola always understood what needed to be done, he always provided on time and was precise. I am sure he can do complex projects. Nikola is responsible and proactive.",
      name: "Polona Kopac",
      designation: "CTO",
      company: "Vibes Automobile AG",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Apple Iphone",
      description:
        "A completely identical copy of the original website for presentation purposes. The point of this page is to show my current knowledge. Feel free to look and examine the page.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://nikola0502.github.io/apple_website/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
