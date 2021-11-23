import React from 'react';


// Set the date we're counting down to
var countDownDate = new Date("Nov 26, 2021 17:00:00").getTime();
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const Countdown = props => {
    return (
            
          <div className="bg-black w-3/4">

          </div>
     
    );
};

export default Countdown;
