import React, {Component} from 'react';

const Todos = (props) => {

  console.log('------->', props)

  return (
        <div className="Todos">
          <h1>{props.title}</h1>
        <ul>
          {props.items.map((item, index) => {
            return <li key={"s1"+index}><input type='checkbox' checked={item.complated}/> {item.name}</li>
          })}
        </ul>
      </div>
    );
}

export default Todos;
