const Input1 = (props) => {
  return(
    <div>
      <div style={{display: 'flex', flexDirection: "column"}} className="inputField">
      <label htmlFor={props.label} style={{color: '#274C5B', fontSize: '20px', fontWeight: '700'}}>{props.label}
      </label>
      <input type="text" style={{ borderRadius: '8px', border: '3px solid #9A9A9A', width: '100%', height:'50px', padding: '0 10px', textAlign: 'center'}} placeholder={props.placeholder}/>
      </div>
    </div>
  )
}

const Input2 = (props) => {
  return(
    <div>
      <div style={{display: 'flex', flexDirection: 'column'}} className="inputField">
      <label style={{color: '#274C5B', fontSize: '20px', fontWeight: '700'}} htmlFor={props.label}>{props.label}</label>
      <input type="text" style={{borderRadius: '8px', border: '3px solid #9A9A9A', width: '100%', height:'50px', padding: '0 10px'}} placeholder={props.placeholder}/>
      </div>
    </div>
  )
}


const Input3 = (props) => {
  return(
    <div>
      <div style={{display: 'flex', flexDirection: "column"}} className="inputField">
      <input type="text" style={{ borderRadius: '8px', border: '3px solid #9A9A9A', width: '100%', height:'36px', padding: '0 10px', textAlign: 'center'}} placeholder={props.placeholder}/>
      </div>
    </div>
  )
}


// export {Input1}
export {Input1, Input2, Input3}