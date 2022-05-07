const videoBlock = document.querySelector('.video-block');

if (videoBlock) {
  const video = document.querySelector('video');
  const playBtn = document.querySelector('.video-block__play');


  playBtn.addEventListener('click', () => {
    videoBlock.classList.add('video-block--played');
    video.play();
    video.controls = true;
    playBtn.classList.add('video-block__play--played');
  });

  video.onpause = function () {
    videoBlock.classList.remove('video-block--played');
    video.controls = false;
    playBtn.classList.remove('video-block__play--played');
  };
}
