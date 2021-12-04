const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      //plays current video
      videoElement.play();
    };
  } catch (error) {
    console.log('whoops,error here:', error);
  }
}

button.addEventListener('click', async () => {
  // disable button
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});

//on load
selectMediaStream();
