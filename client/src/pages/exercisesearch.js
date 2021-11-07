import ReactDOM from 'react-dom';
import JSONDATA from '../2011_Compendium_of_Physical_Activities.json';
import React, {useState} from 'react'
import styled from "styled-components";


const Styles = styled.div`
  text-align: center;
  margin-top: 5%;
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  Button {
    margin-top: 15px;
  }`;


function MyForm() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    
    <Styles>
      <div className="App">
        <input type="text" placeholder="Search your Exercise"  
        onChange={event => {
        setSearchTerm(event.target.value)}}
        /> <button onclick="myFunction()">Search</button>
        {JSONDATA.filter((val)=> {
          if (searchTerm == "") {
            return val
          } else if (val.Activity.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) 
          || val.Description.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
          }
        }).map((val, key)=> {
          return (
          <div className = "user" key={key}>  
            <p>{val.Activity} </p> 
            <p>{val.Description}</p>
          </div>
          );
        })}
        </div>
</Styles>
  );
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
