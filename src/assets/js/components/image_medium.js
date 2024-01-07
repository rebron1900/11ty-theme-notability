import mediumZoom from 'medium-zoom';

// Medium Zoom.u-rich-text img,figure img
export default function initMediumZoom() {
  const images = document.querySelectorAll('.u-rich-text img');
  mediumZoom(images, {
    background: 'rgba(0,0,0,0.75)',
  });
}



