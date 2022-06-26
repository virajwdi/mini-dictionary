const Definations = (props)=>{
    return (
        <ul  className="alert alert-info">
          {props.definitions.map((element,index) => (
             <li>
                  <div>{element.definition}</div>
                  {element.example && <div><b>"</b>{element.example}<b>"</b></div>}
             </li>
          ))}
        </ul>
      );
}

export default Definations;