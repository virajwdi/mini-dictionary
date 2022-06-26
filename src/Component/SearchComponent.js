import React,{ useRef, useState } from "react"
import DefineList from "./DefineList";

 
const  SearchComponent = ()=>{ 
    const searchInputRef = useRef();
    const APIURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    const [formState , setFormState] = useState({value:"",isValid:false,isSubmit:false, errMsg:"" });
    const [wordDefination , setWordDefination] = useState('');
    const [apiError , setApiError] = useState('');

    const formSubmitHandler  = (event)=>{ 
        event.preventDefault(); 
        setApiError('');
        setWordDefination('')
        if(searchInputRef.current.value.trim()){
            setFormState({
                value:searchInputRef.current.value,
                isValid:true,
                isSubmit:false,
                errMsg:"" 
            });
            fetchWord(searchInputRef.current.value);
        }else{
            setFormState({
                value:"",
                isValid:false,
                isSubmit:true,
                errMsg:"Please Enter Word for Search" 
            });
        } 
    }

    const fetchWord = async (wordString) =>{
        try { 
            const response = await fetch( APIURL+wordString);
            if (!response.ok) {  
              throw new Error(`Something Went Wrong. No Defination FOund For ${wordString}`);
            } 
            const data = await response.json(); 
            setWordDefination(data)
            
        }catch (error) {  
             setApiError(error.message);
          }
    } 
    let content = <p className="alert alert-primary">Search Result Will Display Here</p>;
    if (wordDefination.length > 0) {
        content = <DefineList dataList={wordDefination} />;
    }
    if (apiError) {
        content = <p className="alert alert-danger">{apiError}</p>;;
    }

    return ( 
        <React.Fragment>
            <form onSubmit={formSubmitHandler}>
                <div className="position-relative input-group mb-3 p-4" >  
                    <input ref={searchInputRef} type="text" className="form-control" placeholder="Type here to search" aria-label="Type here to search" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button> 
                { (!formState.isValid &&  formState.isSubmit ) &&<div className="mb-3" role="alert">{formState.errMsg}</div>}
                </div>
            </form>
            <div>{content}</div>
        </React.Fragment>
    )
}

export default SearchComponent;