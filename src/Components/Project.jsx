/* eslint-disable react/prop-types */
import './project.css';

const Project = (props) => {
  // console.log(data)
  const data = props.data.project;
  // console.log(data)
  return (
    <section className="Project" id="p">
      <div className="heading">Project</div>
      <div className="amzone">
        <div className="hea">Amazon Clone</div><br/>
        <p  id="mpara">{data.p1}</p>
      </div>
   
      <div className="amzone">
        <div className="hea">Online Cloud enabled Book Store</div><br/>
        <p  id="mpara">{data.p2}</p>
      </div>
    
      <div className="amzone">
        <div className="hea">Contact Manager App - MERN Stack</div><br/>
        <p  className='para' id="mpara">{data.p3}</p>
      </div>
   
      <div className="amzone">
        <div className="hea">Virtual Voice Assistant using Python</div>
        <p  id="mpara">{data.p4}</p>
      </div>
    </section>
  );
}

export default Project;
