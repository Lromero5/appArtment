import React, {Component} from 'react';
import Card from './cardUI';

import img1 from '../assets/cleaning.jpg'
import img2 from '../assets/livinghappily.jpg'
import img3 from '../assets/Bills.jpg'


class Cards extends Component{

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <Card imgsrc={img1} title="List chores" text="Have the ability list chores that need to be completed."/>
                   </div>
                   <div className="col-md-4">
                   <Card imgsrc={img3} title="Manage finances" text= "Manage finances by keeping track of all bills that are due."/>
                   </div>
                   <div className="col-md-4">
                   <Card imgsrc={img2} title="Live happily" text= "Best of all, enjoy living together!"/>
                   </div>
                </div> 
            </div>
       
       )
    }
}
export default Cards;