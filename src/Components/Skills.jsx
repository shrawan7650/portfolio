/* eslint-disable react/prop-types */
import "./skills.css";

const Skills = (props) => {
  const data = props.data.skill;
  console.log(data);
  return (
  <>
    <section className="skills" id="s">
      <div className="heading1">Skills</div>
      <div className="card">
        {data.map((value) => {
          return (
            <>
              <div className="card1" key={value}>
                <div className="imag">
                  <img src={value.image} alt="" />
                </div>
                <div className="info_skill">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
                    style={{ textDecoration: "none" }}
                  >
                    {value.description}
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
    <div className="lower_project"></div>
  </>
  );
};

export default Skills;
