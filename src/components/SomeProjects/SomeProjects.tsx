import { CurrentlyWorkData } from "../../data/SomeProjects.mock";
import "./SomeProjects.scss";

export function SomeProjects() {
  return (
    <div className="SomeProjects">
      <div className="SomeProjectsTittle">
        <h5>Works and Projects</h5>
      </div>

      <div className="SomeProjectsContent">
        {CurrentlyWorkData.map((project, index) => (
          <a
            href={project.url}
            key={index}
            className="SomeProjectsContentContenetorLink"
            target="_blank"
          >
            <div className="SomeProjectsContentContenetor">
              <div className="SomeProjectsContentContenetorImage">
                <img src={project.image} alt={project.tittle} />
              </div>

              <div className="SomeProjectsContentContenetorText">
                <div className="projectTitle">
                  <h6>{project.tittle}</h6>{" "}
                  <p
                    className={`${
                      project.id === "Project"
                        ? "Project"
                        : project.id === "Work"
                        ? "Work"
                        : ""
                    }`}
                  >
                    {project.id}
                  </p>
                </div>
                <div>
                  <p>{project.text}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
