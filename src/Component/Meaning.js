import Definations from "./Definations";

const Meaning = (props)=>{
    return (
        <ul className="alert alert-primary">
          {props.mList.map((element,index) => (
             <li>
                <div>{element.partOfSpeech.toUpperCase()}</div>
                <Definations definitions={element.definitions} key={index} /> 
             </li>
          ))}
        </ul>
      );
}

export default Meaning;