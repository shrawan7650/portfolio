/* eslint-disable react/prop-types */
import "./header.css";
import { MdEmail,MdContactPage} from "react-icons/md";
const Header = (props) => {
  const data  = props.data.header;
  return (
    <>
      <div className="nav">
        <div className="info">
          <header id="name">{data.name}</header>
          <i><MdEmail /></i>
          {data.email}
          <br />
          <i><MdContactPage /></i>
          {data.mob}
        </div>
        <div className="myinfo">
          <ul>
            <li>
              <a href="#a">About Me</a>{" "}
            </li>
            <li>
              <a href="#s">Skills</a>
            </li>
            <li>
              <a href="#p">Project</a>{" "}
            </li>
            <li>
              <a href="#r">Recomadation</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
