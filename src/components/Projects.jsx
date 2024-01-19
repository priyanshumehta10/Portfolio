import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project12 from "../assets/img/project12.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.jpg";
import project4 from "../assets/img/project4.jpg";
import project5 from "../assets/img/project5.jpg";
import project1 from "../assets/img/project1.jpg";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flipkart Clone",
      description: "Full Stack Project",
      imgUrl: project12,
    },
    {
      title: "NoteKaro Application",
      description: "With Login and Signup Feature",
      imgUrl: project4,
    },
    {
      title: "IMDB Clone",
      description: "Fetch Movies on the Way",
      imgUrl: project5,
    },
    {
      title: "TextUtils",
      description: "Manuplate Text According to You",
      imgUrl: project1,
    },
  ];
  const projects2 = [
    
    {
      title: "Job-List-Application",
      description: "CRUD Application",
      imgUrl: project2,
    },
    {
      title: "Khabari",
      description: "Fetch News",
      imgUrl: project3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background" src={colorSharp2}></img>
    </section>
  )
}