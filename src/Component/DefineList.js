import Meaning from "./Meaning";

const DefineList = (props) => {
    return (
      <ul  >
        {props.dataList.map((dl,index) => (
           <li>
                <Meaning mList={dl.meanings} key={index} /> 
           </li>
        ))}
      </ul>
    );
  };
  
  export default DefineList;