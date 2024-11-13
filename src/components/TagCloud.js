import React from "react";
import TagCloud from "react-tag-cloud";
import "@fortawesome/fontawesome-free/css/all.min.css";


const TagCloudComponent = () => {
    const data = [
      { text: "React", value: 40 },
      { text: "JavaScript", value: 30 },
      { text: "CSS", value: 25 },
      { text: "HTML", value: 20 },
      { text: "Node.js", value: 35 },
      { text: "Git", value: 15 },
      { text: "Redux", value: 10 },
      { text: "TypeScript", value: 30 },
    ];
    return (
        <div style={{ width: "100%", height: "400px", margin: "auto" }}>
          <TagCloud
            style={{
              fontFamily: "sans-serif",
              fontSize: 30,
              color: () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              padding: 5,
            }}
          >
            {data.map((tag, index) => (
              <div key={index} style={{ fontSize: `${tag.value}px` }}>
                {tag.text}
              </div>
            ))}
          </TagCloud>
        </div>
      );
};

export default TagCloudComponent;

