import React from "react";
import Icon from "../assets/react (1).svg";
import SQL from "../assets/database-sql.svg";
import ML from "../assets/machine-learning-model.svg";
import Excell from "../assets/microsoft-excel.svg";
import BI from "../assets/powerbi.svg";
import Py from "../assets/logo-python.svg";

const skills = [
  { icon: Icon, name: "React" },
  { icon: Py, name: "Python" },
  { icon: Excell, name: "MS Excel" },
  { icon: ML, name: "Machine Learning" },
  { icon: BI, name: "Power BI" },
  { icon: SQL, name: "MySQL" },
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
