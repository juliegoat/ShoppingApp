let url, token, isCurrentlyScreenSharing;

function showEvent(e) {
  console.log("video call event -->", e);
}

async function joinedCall(e) {
  showEvent(e);
  document.getElementById("leave-call-label").innerHTML = "Leave call";
  document.getElementById("leave-call-div").onclick = () => callFrame.leave();
}

async function leftCall(e) {
  showEvent(e);
  document.getElementById("leave-call-label").innerHTML = "Join call";
  document.getElementById("leave-call-div").onclick = () => callFrame.join();
}

async function updateEvent(e) {
  showEvent(e);
  let ps = callFrame.participants();
  if (Object.keys(ps).length < 2) {
    document.getElementById("ui-local").style.display = "none";
    document.getElementById("ui-alone").style.display = "block";
    let wrapper = document.getElementById("ui-participant");
    wrapper.innerHTML = "";
  } else {
    document.getElementById("ui-local").style.display = "none";
    document.getElementById("ui-alone").style.display = "none";
    let wrapper = document.getElementById("ui-participant");
    wrapper.innerHTML = "";

    async function run() {
      // create a short-lived demo room and a join token with
      // is_owner set to true. if you just want to
      // hard-code a meeting link for testing you could do
      // something like this:
      //
      //   room = { url: 'https://your-domain.daily.co/hello' }
      //   ownerLink = room.url;
      //
      room = await createMtgRoom();
      ownerLink = await createMtgLinkWithToken(room, {
        is_owner: true
      });

      callFrame = window.DailyIframe.wrap(
        document.getElementById("call-frame"),
        { customLayout: true }
      );
      callFrame
        .on("joining-meeting", showEvent)
        .on("joined-meeting", joinedCall)
        .on("left-meeting", leftCall)
        .on("participant-joined", updateEvent)
        .on("participant-updated", updateEvent)
        .on("participant-left", updateEvent)
        .on("error", showEvent);
      await callFrame.join({
        url: ownerLink,
        cssFile: "demo-css-grid.css"
      });

      console.log(
        " You are connected to",
        room.url,
        "\n",
        "Join from another tab or machine, or use the",
        "\n",
        "`callFrame.addFakeParticipant()` method to test",
        "\n",
        "this layout."
      );
    }

  }
}