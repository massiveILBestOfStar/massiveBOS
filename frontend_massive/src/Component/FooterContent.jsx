import "bootstrap/dist/css/bootstrap.min.css";



const SosialMediaHeading = (props) => {
  return (
    <div>
          <h4 className="heading">{props.heading}</h4>
    </div>
  );
};


const SosialMediaContent = (props) => {
  return (
    <div>
       <div className="sosialMedia">
        <div className="d-flex align-items-center content">
          <img src={props.img} alt="" style={{ width: `${props.width || '40px'}` }} />
          <p className="sosialMediaText">{props.set}</p>
        </div>
    </div>
    </div>
  )
}


export {SosialMediaHeading, SosialMediaContent}
