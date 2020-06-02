import React from 'react';
import Hero from '../components/Hero/Hero'
import Cards from "../components/cards/cards"
import '../App'

function Main(props){

    return(
        <div>
        <Hero backgroundImage="https://www.minuteschool.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-09-at-12.06.37-PM.png">
          <h1>AppArtment</h1>
          <h2>A place for Roommates</h2>
          <a href="/login" class="button instagram"><span class="gradient"></span>Login</a>
          <br></br>
          <a href="/signup" class="button instagram"><span class="gradient"></span>Sign Up</a>
          <br></br>
        </Hero>
        <div style={{ marginTop: 30, marginLeft: 30}}>
          <div>
            <div>
            <Cards></Cards>
            </div>
  
  
  
        </div>
        </div>        
    </div>
    )
}

export default Main;