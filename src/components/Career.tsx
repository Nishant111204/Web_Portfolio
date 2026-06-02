import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer</h4>
                <h5>Wohlig Transformations</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Leading development of AI-powered applications using Google ADK and Generative AI frameworks, integrated into enterprise client workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Wohlig Transformations</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an AI-powered chatbot for Emeritus and developed a Document Management System showcasing full-stack capabilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>R&D Intern</h4>
                <h5>Robokart</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Trained in robotics systems, sensor integration, and control algorithms; delivered technical workshops to students on automation concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
