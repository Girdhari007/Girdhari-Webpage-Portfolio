import React from "react";
import Icon from "../assets/react.svg";
import SQL from "../assets/sql-database-generic.svg";

import DB from "../assets/database-mongo-db.svg"
import Cpp from "../assets/file-type-cpp3.svg"
import Css from "../assets/file-type-css.svg"
import java from "../assets/java-original.svg"
import Node from "../assets/file-type-node.svg"



const skills = [
  { icon: Icon, name: "React" },
  { icon: java, name: "Java" },
  { icon: Cpp, name: "C++" },
  { icon: DB, name: "Mongo DB" },
  { icon: Node, name: "Node Js" },
  { icon: SQL, name: "MySQL" },
  { icon: Css, name: "CSS" },

];

const SkillsAndResume = () => {
  const handleDownload = () => {
    const downloadLink =
      "https://drive.google.com/file/d/18kWGpq3MUDGB6vxJH9KILOzE3yQGkYV6/view?usp=drive_link";
    const a = document.createElement("a");
    a.href = downloadLink;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-teal-500 to-teal-700 text-white py-16 px-8">
      <h2 className="text-5xl font-bold text-center mb-12">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-center hover:scale-105 transition-transform">
            <img src={skill.icon} alt={skill.name} className="w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-xl font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-teal-600 to-teal-800 text-white px-8 py-4 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default SkillsAndResume;
