import { Col } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <h2>Education</h2>
        <div>
          <h4>Master of Science (M.Sc) in Computer Science</h4>
          <h6 id="newslatterp">Soban Singh Jeena University, 2024</h6>
        </div>
        <div>
          <h4>Bachelor of Science (B.Sc) in Computer Science</h4>
          <h6 id="newslatterp">Soban Singh Jeena University, 2022</h6>
        </div>
        <div>
          <h4>Self-Learning and Development</h4>
          <h6 id="newslatterp">
            Acquired a significant portion of skills through self-study,
            leveraging prominent educational resources on YouTube.
          </h6>
        </div>
      </div>
    </Col>
  );
};
