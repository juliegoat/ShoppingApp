import React from 'react';

const Video = () => {
  return (
    <html>
      <head>

        <script src="https://unpkg.com/@daily-co/daily-js"></script>
        <script src="../shared-assets/createroom.js"></script>

        <link rel="stylesheet" type="text/css" href="../shared-assets/video.css" />

      </head>
      <body onload="run()">
        <div onclick="callFrame.join({ url }).then((ps)=>console.log('joined and have participants', ps));">
          [ join mtg ]
        </div>
        <div onclick="console.log('PARTICIPANTS', callFrame.participants())">
          [ get participants ]
        </div>



        <iframe id="call-frame" allow="camera; microphone; autoplay"></iframe>

        <div id="ui-container">
          <div id="ui-local">
            <p>Loading your video feed…</p>
          </div>
          <div id="ui-alone"></div>
          <div id="ui-controller">
            <div
              onclick="callFrame.setLocalVideo(!callFrame.localVideo())"
              class="ui-controller-control"
            >
              <p>Toggle camera</p>
              <img
                src="../shared-assets/icon-camera.svg"
                alt="Toggle Camera On/Off"
              />
            </div>
            <div
              onclick="callFrame.setLocalAudio(!callFrame.localAudio())"
              class="ui-controller-control"
            >
              <p>Toggle microphone</p>
              <img
                src="../shared-assets/icon-microphone.svg"
                alt="Toggle Microphone On/Off"
              />
            </div>
            <hr />
            <div id="leave-call-div" class="ui-controller-control">
              <p id="leave-call-label" style="color:#ff3b30"></p>
              <img src="../shared-assets/icon-leave.svg" alt="Leave call" />
            </div>
          </div>
          <div id="ui-participant"></div>
        </div>

        <script src="videocontroller.js"></script>
      </body>
    </html>

  )
}

export default Video;