import React from 'react';

function Calendar(){
    return(
    <div>
        <div className="calendar">
            Add Calendar Component
        </div>
    </div>
    )
}

export default Calendar;




// I commented it out in the meantime while we figure out the 'Chore list first'

// import React, { Component } from 'react'
// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'
// import 'react-big-calendar/lib/css/react-big-calendar.css';


// const localizer = BigCalendar.momentLocalizer(moment);



// export default class BookingCalendar extends Component {
//     setDates = () => {
//         const events = []
//         this.props.events.map(event => {
//             return events.push({
//                 start: new Date(event.start),
//                 end: new Date(event.end),
//                 title: `${event.roommie_name} Your chore is ${event.yourChore})`,
//                 allDay: true
//             })
//         })
//         return events
//     };



//     render() {
//         return (
//             <div className="calendar-container">
//                 <BigCalendar
//                     localizer={localizer}
//                     events={this.setDates()}
//                     startAccessor="start"
//                     endAccessor="end"
//                 />
//             </div>
//         )
//     }
// };


