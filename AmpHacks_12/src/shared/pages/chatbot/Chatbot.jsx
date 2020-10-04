import React from 'react';
import '../../components/style.css';
import $ from 'jquery';

function Chatbot(){
    function getBotResponse() {
        var rawText = $("#textInput").val();
        var userHtml = '<p class="userText"><span>' + rawText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
        $.get("/get", { msg: rawText }).done(function(data) {
          var botHtml = '<p class="botText"><span>' + data + '</span></p>';
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
        });
      }
    
    $("#textInput").keypress(function(e) {
          if ((e.which == 13) && document.getElementById("textInput").value != "" ){
              getBotResponse();
          }
      });
    
      $("#buttonInput").click(function() {
          if (document.getElementById("textInput").value != "") {
              getBotResponse();
          }
      })

    return (
        <div>
            <h1>Flask Chatterbot Example</h1>
            <h3>A web implementation of <a href="https://github.com/gunthercox/ChatterBot">ChatterBot</a> using Flask.</h3>
            <div id="chatbox">
                <p className="botText"><span>Hi! I'm Chatterbot.</span></p>
            </div>

            <div id="userInput">
                <form action="http://localhost:5000/get" method="get">
                    <input id="textInput" type="text" name="msg" placeholder="Message" />
                    <input id="buttonInput" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}



  export default Chatbot;