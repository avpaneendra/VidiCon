
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
        api.executeCommand('password', localStorage.currentPassword);
        //setting video window hegiht to full window height
        $("iframe").css("height", "92vh");
        $(".username").text(localStorage.thisUserName);
        $(".email").text(localStorage.thisUserEmail);
        $(".current_room").text(options['roomName']);
    }


    else{
        window.location.assign("./index.html")
    
    }



})
