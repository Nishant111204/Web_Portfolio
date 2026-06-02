import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { assetPath } from "../utils/assetPath";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Speech-to-Text for Lecture Notes",
    category: "Python, Whisper API, NLP, React.js",
    tools: "Architecture & Analytics",
    features: "Real-time transcription with automated note generation, keyword extraction, and learning analytics tracking."
  },
  {
    name: "Face Recognition Attendance System",
    category: "Python, OpenCV, SQLite",
    tools: "Computer Vision",
    features: "Real-time attendance system featuring liveness and anti-spoofing detection with automated logging."
  },
  {
    name: "Smart Farming using ML",
    category: "Python, Scikit-learn",
    tools: "AI Models",
    features: "Crop and fertilizer recommendation engine and yield prediction model using Random Forest classifiers."
  },
  {
    name: "Food Ordering System",
    category: "React.js, Node.js",
    tools: "Full-Stack System",
    features: "Responsive food ordering platform with JWT authentication, real-time tracking, and RESTful APIs."
  },
  {
    name: "VaaniShop AI",
    category: "Java, Spring Boot, React, PostgreSQL",
    tools: "Voice-Driven AI",
    features: "AI platform enabling shop owners to create and update business websites using voice commands with speech-to-text and dynamic site generation."
  }
];

const Work = () => {
  useGSAP(() => {
    let timeline: gsap.core.Timeline;

    function buildTimeline() {
      ScrollTrigger.getById("work")?.kill();
      if (timeline) timeline.kill();

      const boxes = document.getElementsByClassName("work-box");
      if (!boxes.length) return;

      const container = document.querySelector(".work-container");
      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      const translateX =
        rect.width * boxes.length - (rectLeft + parentWidth) + padding;

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: 1,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", { x: -translateX, ease: "none" });
    }

    buildTimeline();

    const onResize = () => {
      buildTimeline();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getById("work")?.kill();
      if (timeline) timeline.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{project.tools}</h4>
                <p>{project.features}</p>
              </div>
              <WorkImage image={assetPath("images/placeholder.webp")} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
