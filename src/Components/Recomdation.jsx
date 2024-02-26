/* eslint-disable react/prop-types */
import "./recomdation.css";
const Recomdation = (props) => {
const data = props.data.recomdation;
console.log(data)
  return (
    <>
      <section className="Recomdation" id="r">
        <div className="heading2">Recommendations</div>
        <div className="recomdation_part">
          {
          data.map((value)=>{
            return(
           <>
              <div className="recmadion1" key={value}>{value.p}</div>
              <div className="recmadion1" key={value}>{value.p}</div>
              <div className="recmadion1" key={value}>{value.p}</div>
           </>
            )
          })
          }
        </div>
      </section>

      <div className="lower">
        <div className="heading3">Leave a Recommendation</div>
        <input type="text" name=" name" id="name" placeholder="Name" />
        <input type="text" placeholder="Message" id="message" />
        <button>Sumbit</button>
      </div>
    </>
  );
};

export default Recomdation;


