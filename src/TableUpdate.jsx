import React, { Component } from 'react';

export default class TableUpdate extends Component {
  render() {
    return(
      <tbody>
        {this.props.campers.map((campers,index) => {
          let BASE_URL = `https://www.freecodecamp.com/${campers.username}`;
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td><img src={campers.img} alt="Camper's logo"/><a href={BASE_URL} target='_blanck'>{campers.username}</a></td>
              <td>{campers.recent}</td>
              <td>{campers.alltime}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
