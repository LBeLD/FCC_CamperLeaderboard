import React, { Component } from 'react';
import Header from './Header';
import TableUpdate from './TableUpdate';
import Footer from './Footer';
import axios from 'axios';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      campers: [],
      time: 'recent',
      recentFlag: <i className="fa fa-angle-double-down "></i>,
      allTimeFlag: ''

    }

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function(response){
        this.setState({campers:response.data});
      }.bind(this))
      .catch(function(error){
        console.log(error);
      })

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    let URL = `https://fcctop100.herokuapp.com/api/fccusers/top/${e.target.id}`;
    axios.get(URL)
      .then(function(response){
        this.setState({campers:response.data});
      }.bind(this))
      .catch(function(error){
        console.log(error);
      })

      if(e.target.id === 'alltime'){
        this.setState({
          recentFlag: '',
          allTimeFlag: <i className="fa fa-angle-double-down "></i>
        })
      } else {
        this.setState({
          recentFlag: <i className="fa fa-angle-double-down "></i>,
          allTimeFlag: ''
        })
      }
  }

  render() {
    return(
      <div className='container App'>
        <Header />
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper name</th>
              <th id= 'recent' onClick={this.handleClick}>Last 30 days{this.state.recentFlag}</th>
              <th id = 'alltime' onClick={this.handleClick}>All time{this.state.allTimeFlag}</th>
            </tr>
          </thead>
            <TableUpdate campers={this.state.campers}/>
        </table>
        <Footer />
      </div>
    );
  }
}
