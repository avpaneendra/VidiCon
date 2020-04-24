
$(function () {
  
    if (localStorage.currentRoomName &&  localStorage.thisUserName ) {

        var domain = 'meet.jit.si';
        var options = {
            roomName: localStorage.currentRoomName,
            parentNode: document.querySelector('#vidicon_window'),
            userInfo: {
                displayName: localStorage.thisUserName
            }

        };

        var api = new JitsiMeetExternalAPI(domain, options);
        //setting video window hegiht to full window height
        $("iframe").css("height", "92vh");
        $(".username").text(localStorage.thisUserName);
        $(".email").text(localStorage.thisUserEmail);
        $(".current_room").text(options['roomName']);



        var setPass = document.getElementById("setPass");
document.getElementById("myButton").addEventListener("click", function() {
    console.log( setPass.value );
    api.executeCommand('password', document.getElementById("setPass").value );

});


    }


    else{
        window.location.assign("./index.html")
    
    }

    mixpanel.track("Meeting Initiated", {"page": "meeting.html", "room":options['roomName']});

})
