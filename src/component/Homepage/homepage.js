import React, { Component } from 'react'
import './homepage.css';
import AllCard from '../cards/allCards'
import FeaturedBooks from '../Featured_Books/fetauredBooks'
import UserCollection from '../../container/User_Collection/userCollection'
import Authentication from '../../container/Authentication/authentication';
export class Homepage extends Component {
  
  render() {
    return (
      <div>
    <Authentication></Authentication>
     <AllCard></AllCard>
     <FeaturedBooks></FeaturedBooks>
     <UserCollection></UserCollection>
    
     </div>
    )
  }
}

export default Homepage
