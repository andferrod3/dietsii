import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import UserContext from '../../context/userContext';
import Chat from './Chat';
import RegistronsInsertSocket from '../paciente/RegistronsInsertSocket';
import io from 'socket.io-client';
import TextEdit from './TextEdit';
import RegistronsInsertSo from '../paciente/RegistronsInsertSo'
import RegistroesInsertSo from '../entrenador/RegistroesInsertSo'
import './SesionHome.css';
import UserContext from '../../context/userContext';

const SesionHome = ({ location }) => {
    const {userData} = useContext(UserContext);
    /*
  var uid = new String((new Date().getTime()) + (new Date().getUTCMilliseconds())).substr(8, 13);
  var rid = window.location.pathname.substring(7);
  
  
  
  console.log("yai!");
  
  var exercise = {
      problem: "Write a JavaScript code that returns the sum of the multiples of 3 and 5 under 1000",
      solution: 233168,
      code: "var sum = 0;\nfor (var x = 0; x < 1000; x++)\n{\n    if (x % 3 === 0 || x % 5 === 0)\n    {\n       sum += x;\n    }\n}\nreturn sum;"
  }
  
  var flask;
  var socket;
  
  function toJSON(obj) {
      return JSON.stringify(obj, null, 2);
  }
  
  function pack(data) {
      return {
          rid: rid,
          uid: uid,
          data: data
      }
  }
  
  function setup() {
      var server = 'http://localhost:5000';
      socket = io.connect();
      console.log("Connected with websocket to server " + server);
  
      flask = new CodeFlask('#text', {
          language: 'js',
          lineNumbers: true
      });
  
      var lastReceived = "";
  
      
  
      socket.on('text', (pack) => {
          console.log("text event triggered with data <" + toJSON(pack) + "> ");
          if ((pack.uid != uid) && (pack.rid == rid)) {
              lastReceived = pack.data;
              flask.updateCode(pack.data);
              console.log("  --> Updating code!");
          } else {
              console.log("  --> Ignored!");
  
          }
      });
  
      socket.on('msg', (pack) => {
  
          console.log("msg event triggered with data <" + toJSON(pack) + "> in room <" + pack.rid + "> ");
  
          if ((pack.uid != uid) && (pack.rid == rid)) {
              console.log("  --> Adding msg to chat!");
              newMsg("grey", pack.uid, pack.data);
          } else {
              console.log("  --> ignored");
          }
      });
  
  
      flask.onUpdate((data) => {
          clearResult("none");
          console.log("Code updated:");
          if (data != lastReceived) {
              socket.emit('text', pack(data));
              console.log("  --> Emitting text event with data <" + toJSON(pack(data)) + "> ");
          } else {
              console.log("  --> Text updated from external source: no event to be emitted");
          }
      });
  
  
      socket.on('userRegistered', (pack) => {
          console.log("userRegistered event triggered with data <" +
              toJSON(pack) + "> in room <" + pack.rid + "> ");
  
          if (pack.rid == rid) {
  
              if (pack.uid == uid) {
                  console.log("  --> Updating code");
                  lastReceived = pack.data;
                  flask.updateCode(pack.data);
              } else {
                  console.log("--> Show message of new peer <" + pack.uid + ">");
                  alert("New peer: " + uid);
              }
  
          } else {
              console.log("  --> ignored");
          }
  
      });
  
      socket.on('newMsg', (pack) => {
          console.log("newMsg event triggered with data <" + toJSON(pack) + "> ");
      });
  
  
  }
  
  function ready() {
  
      var roomprefix = window.location.pathname.substring(1, 6);
      if ((roomprefix != "rooms") || (rid == undefined) || (rid == "")) {
          $("body").text("Invalid URL!");
          return 0;
      }
  
      setup();
      console.log("JQuery ready!");
  
      $(window).bind('keydown', function (event) {
          if (event.ctrlKey || event.metaKey) {
              switch (String.fromCharCode(event.which).toLowerCase()) {
                  case 's':
                      event.preventDefault();
                      validate();
                      break;
                  case 'l':
                      event.preventDefault();
                      flask.updateCode(exercise.code);
                      break;
              }
          }
      });
  
  
      $('#input-msg').keydown(function (e) {
  
          if (e.ctrlKey && e.keyCode == 13) {
              var msg = $('#input-msg').val();
  
              newMsg("red", uid, msg);
  
              $('#input-msg').val("");
              console.log("Submiting chat message!");
  
              socket.emit('msg', pack(msg));
  
          }
      });
  };
  
  function newMsg(color, name, msg) {
      var liFragment = '<li class="collection-item avatar small" style="min-height: 60px;">\
                          <i class="material-icons circle ' + color + '">face</i> \
                          <span class="chat-name">' + name + '</span> \
                          <div class="chat-msg">' + msg + '</div> \
                      </li>';
  
      $('#chat').append(liFragment);
  
      // Scroll to the end
      document.getElementById('rightArea').scrollTop = document.getElementById('help-submit-chat').offsetTop;
  
  }
  
  function moveHelp() {
      currentMsg = $('#input-msg').val();
      if (currentMsg == "Write message here and press CTRL+ENTER") {
          $('#input-msg').val("");
          $("#help-submit-chat").css("display", "block");
      }
  
  }


const editor = React.createRef();
editor.addEventListener("keyup", (evt) => {
    const text = editor.value
    socket.send(text)
})
socket.on('write', (data) => {
    editor.value = data
})
     

  
  function clearResult(display) {
      $("#return").text("");
      $("#return").css("display", display);
      $("#result").text("");
      $("#result").css("display", display);
  }
  
  function validate() {
  
      clearResult("block");
  
      var code = flask.getCode();
      var fullcode = "function test(){" + code + "}; var ret=test();";
      try {
          eval(fullcode);
          if (ret) {
              $("#return").text(ret);
              if (valid(ret)) {
                  $("#result").text("CORRECT");
                  $("#result").css({
                      'color': 'green',
                      'font-size': '150%'
                  });
              } else {
                  $("#result").text("INCORRECT");
                  $("#result").css({
                      'color': 'red',
                      'font-size': '100%'
                  });
              }
          } else {
              $("#return").text("NO DATA RETURNED");
          }
      } catch (e) {
          $("#return").text(e);
      }
  
  }
  
  function valid(v) {
      return v === exercise.solution;
  }
    */
    return (
    /*
    <div className="homesesion">
      <Chat location={location}></Chat>
   <div>
   <div id="problem">{exercise.problem}
            </div>
   <div id="editor">
                <div id="text"></div>
            </div>
            <button id="submitBtn" class="btn waves-effect waves-light" onClick="validate();">Validate
                (CTRL-S)</button>
            <div id="return"></div>
            <div id="result"></div>
        </div>
        </div>

    */
      
        <div>
            <Chat location={location} class="chatsesion"></Chat>
        <div>
        </div>
        <RegistronsInsertSo class="registronsesion" idEdit="edi1" idEdit2="edi2" idEdit3="edi3" idEdit4="edi4"
        idEdit5="edi5" idEdit6="edi6" idEdit7="edi7" idEdit8="edi8" idEdit9="edi9"
        idEdit10="edi10" idEdit11="edi11" idEdit12="edi12" idEdit13="edi13" idEdit14="edi14"
        idEdit15="edi15" idEdit16="edi16" idEdit17="edi17" idEdit18="edi18" idEdit19="edi19"
        idEdit20="edi20" idEdit21="edi21" idEdit22="edi22" idEdit23="edi23" idEdit24="edi24"
        idEdit25="edi25" idEdit26="edi26" idEdit27="edi27" idEdit28="edi28" idEdit29="edi29"
        idEdit30="edi30" idEdit31="edi31" idEdit32="edi32" idEdit33="edi33" idEdit34="edi34"
        idEdit35="edi35" idEdit36="edi36" idEdit37="edi37" idEdit38="edi38" idEdit39="edi39"
        idEditCal="editCal" idEditHidr="editHidr" idEditProt="editProt" idEditGras="editGras"
        ></RegistronsInsertSo>

      <div class="sesionentrenof">
        <RegistroesInsertSo  idEdit01="edi01" idEdit02="edi02" idEdit03="edi03" idEdit04="edi04"
                idEdit05="edi05" idEdit06="edi06" idEdit07="edi07" idEdit08="edi08" idEdit09="edi09"
                idEdit010="edi010" idEdit011="edi011" 
                idEditCal0="editCal0" userData={userData} ></RegistroesInsertSo>
        </div>
        </div>
        );
    }
    export default SesionHome;