          
import React, { useEffect } from "react";
import "./TagCloud.css";
import TagCloud from "TagCloud";

const TagCloudComponent = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "NodeJS",
        "Jquery",
        "Git",
        "GitHub",
        "PostgreSQL",
        "Python",
        "MongoDB",
        "C#",
        "PowerApps",


      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TagCloudComponent;