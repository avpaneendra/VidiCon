import $ from 'jquery';
import 'bootstrap';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-50769240-1');

window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-50769240-1', 'auto');

function setMeetingInfo() {
    var new_room_name = $("#new_room_name").val().toLowerCase();
    var new_room_display_name = $("#new_room_display_name").val();

    localStorage.setItem("currentRoomName", new_room_name);
    localStorage.setItem("thisUserName", new_room_display_name);

    location.reload();
    //ga custom events
ga('send', {
    hitType: 'event',
    eventCategory: 'VidiCon - Set Meeting Info',
    eventAction: 'Room Name Defined',
    eventLabel: 'Room Name = '+ new_room_name
  });
  ga('send', {
    hitType: 'event',
    eventCategory: 'VidiCon - Set Meeting Info',
    eventAction: 'User Name Defined',
    eventLabel: 'User Name = '+ new_room_display_name
  });
  
//ga custom events

}

$(function () {
    //checks if meeting info set and redirect
    if (localStorage.currentRoomName || localStorage.thisUserName) { window.location.assign("./meeting.html"); console.log("Meeting Info Set"); }
    else { console.log("Meeting Info Not Set"); }

   
    //eleminating spaces from room name on keyup event
    $("input#new_room_name").on({
        keydown: function (e) {
            if (e.which === 32)
                return false;
        },
        change: function () {
            this.value = this.value.replace(/\s/g, "");

        }
    });


 //setting meeting info
    document.getElementById("meeting-submit").addEventListener("click", setMeetingInfo);
    console.log("Your display name is: "+ localStorage.thisUserName);
    

})
console.log('VidiCon app version = '+ process.env.npm_package_version);