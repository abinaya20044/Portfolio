import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iPhone from "../../Assets/Projects/iPhone.png";
import landingpage from "../../Assets/Projects/landingpage.png";
import chatroom from "../../Assets/Projects/chatroom.png";
import bgremover from "../../Assets/Projects/bgremover.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import convertor from "../../Assets/Projects/convertor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iPhone}
              isBlog={false}
              title="Apple-Clone-website"
              description="An Apple clone built with React and styled with Tailwind CSS.🎨This endeavor is a testament to the power of innovation and the endless possibilities within the tech world. Leveraging the robust capabilities of React, I crafted a seamless user experience, while Tailwind CSS added a touch of sleek design. "
              ghLink="https://github.com/abinaya20044/Apple-clone-website"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgremover}
              isBlog={false}
              title="Background Remover"
              description="Background Remover! React, Tailwind CSS, and JavaScript converge to redefine design simplicity.💡Effortlessly transform cluttered backgrounds into polished masterpieces. Streamline your workflow, unleash your imagination, and elevate your designs to new heights. "
              ghLink="https://github.com/abinaya20044/backgroundremover"
              demoLink="https://backgroundremover-hi6k58t8p-abinaya.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingpage}
              isBlog={false}
              title="My landing page"
              description="A captivating landing page brought to life with the power of React and the sleek styles of Tailwind CSS!.🔧 Built from scratch, this project was a journey of learning and creativity. Shoutout to the incredible React and Tailwind communities for the inspiration and support!"
              ghLink="https://github.com/abinaya20044/landingpage"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatroom}
              isBlog={false}
              title="Chatroom"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/abinaya20044/quizapp"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce-website"
              description="Passionate e-commerce🛒 website which helped me to learn the depth of web development🛒.Proudly launching my latest venture – an innovative e-commerce website powered by cutting-edge technologies such as responsive design❇️, secure payment gateways, and robust inventory management systems. This website is very responsive for both mobile and pc and also user friendly👣..."
              ghLink="https://github.com/abinaya20044/ecommerce"
              demoLink="https://ecommerce-ridn4rfmv-abinaya.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convertor}
              isBlog={false}
              title="Image-convertor"
              description="my Next.js and Tailwind CSS-powered Image Converter project. Convert between PNG, JPG, BMP, JPEG, SVG, and more with a breeze.🔄 Seamlessly switch formats while preserving quality. 💻User-friendly interface for effortless navigation. 🚀Boost your workflow with batch processing capabilities. hashtag#Converter hashtag#NextJS hashtag#TailwindCSS"
              ghLink="https://github.com/abinaya20044/converterr"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
