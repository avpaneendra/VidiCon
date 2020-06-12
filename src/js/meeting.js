import $ from 'jquery';
import 'bootstrap';

$(function () {

    if (localStorage.currentRoomName && localStorage.thisUserName) {

        var domain = 'meet.jit.si';
        var options = {
            roomName: localStorage.currentRoomName,
            parentNode: document.querySelector('#vidicon_window'),
            userInfo: {displayName: localStorage.thisUserName}

        };

        var api = new JitsiMeetExternalAPI(domain, options);
        //setting video window hegiht to full window height
        $("iframe").css("height", "92vh");
        $(".username").text(localStorage.thisUserName);
        $(".email").text(localStorage.thisUserEmail);
        $(".current_room").text(options['roomName']);



        var setPass = document.getElementById("setPass");
        document.getElementById("myButton").addEventListener("click", function () {
            console.log(setPass.value);
            api.executeCommand('password', document.getElementById("setPass").value);

        });


    }


    else {
        window.location.assign("./index.html")

    }

    //checking desktop mode
window.mobilecheck = (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,'./no-mobile.html');

console.log("mobilecheck == " + window.mobilecheck);

    //loading mix panel
    (function (c, a) {
        if (!a.__SV) {
            var b = window; try { var d, m, j, k = b.location, f = k.hash; d = function (a, b) { return (m = a.match(RegExp(b + "=([^&]*)"))) ? m[1] : null }; f && d(f, "state") && (j = JSON.parse(decodeURIComponent(d(f, "state"))), "mpeditor" === j.action && (b.sessionStorage.setItem("_mpcehash", f), history.replaceState(j.desiredHash || "", c.title, k.pathname + k.search))) } catch (n) { } var l, h; window.mixpanel = a; a._i = []; a.init = function (b, d, g) {
                function c(b, i) {
                    var a = i.split("."); 2 == a.length && (b = b[a[0]], i = a[1]); b[i] = function () {
                        b.push([i].concat(Array.prototype.slice.call(arguments,
                            0)))
                    }
                } var e = a; "undefined" !== typeof g ? e = a[g] = [] : g = "mixpanel"; e.people = e.people || []; e.toString = function (b) { var a = "mixpanel"; "mixpanel" !== g && (a += "." + g); b || (a += " (stub)"); return a }; e.people.toString = function () { return e.toString(1) + ".people (stub)" }; l = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                for (h = 0; h < l.length; h++)c(e, l[h]); var f = "set set_once union unset remove delete".split(" "); e.get_group = function () { function a(c) { b[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); e.push([d, call2]) } } for (var b = {}, d = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < f.length; c++)a(f[c]); return b }; a._i.push([b, d, g])
            }; a.__SV = 1.2; b = c.createElement("script"); b.type = "text/javascript"; b.async = !0; b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
                MIXPANEL_CUSTOM_LIB_URL : "file:" === c.location.protocol && "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"; d = c.getElementsByTagName("script")[0]; d.parentNode.insertBefore(b, d)
        }
    })(document, window.mixpanel || []);
    mixpanel.init("6fb887846965423747b74b89fee22989")

    mixpanel.track("Meeting Initiated", { "page": "meeting.html", "room": options['roomName'], "userDisplayName": localStorage.thisUserName });

})
console.log('VidiCon app version = '+ process.env.npm_package_version);