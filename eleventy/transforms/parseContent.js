/* ***** ----------------------------------------------- ***** **
/* ***** Parse Content Transform
/* ***** ----------------------------------------------- ***** */

const {JSDOM} = require('jsdom')
const imageSrcset = require('./../shortcodes/imageSrcset')
const dom = new JSDOM();
const { window } = dom;
const { document, Node, DocumentFragment, XPathResult } = window;
const pangu = require('pangu/src/browser/pangu');
const hljs  = require("highlight.js")
global.Node = Node;
global.DocumentFragment = DocumentFragment;
global.XPathResult = XPathResult;

module.exports = (content, outputPath) => {
  global.document = document;
  // add pangu space and hilghight code block
  document.body.innerHTML = content;

  if (outputPath.endsWith('.html')) {
    // Add lazyload to all article images
    const articleImages = [...document.querySelectorAll('.u-rich-text img,figure > img,article img')]
    if (articleImages.length) {
      articleImages.forEach((image) => {
        // Set image src to data-src
        const imageSrc = image.getAttribute('src')
        image.setAttribute('srcset', imageSrcset(imageSrc))
        image.setAttribute('data-sizes','auto')
        image.removeAttribute('src')

        // Add lazyload class for lazysizes plugin
        image.classList.add('lazyload')
      })
    }

    // Wrap video player with container to make size responsive and add lazyload
    const articleVideos = [...document.querySelectorAll('.u-rich-text iframe')]
    if (articleVideos.length) {
      articleVideos.forEach((video) => {
        const videoSrc = video.getAttribute('src')
        if (videoSrc.includes('youtube') || videoSrc.includes('vimeo') || videoSrc.includes('bilibili')) {
          // If YouTube, add lazyload attributes
          // Lazyloading with Vimeo will disable fullscreen so we don't include it here
          if (videoSrc.includes('youtube')) {
            // Set video src to data-src
            video.setAttribute('data-src', videoSrc)
            video.removeAttribute('src')

            // Add lazyload class for lazysizes plugin
            video.classList.add('lazyload')
          }

          // Add fullscreen attributes
          video.setAttribute('allowfullscreen', '')

          // Wrap video player with proportional container
          const embedWrapper = document.createElement('div')
          embedWrapper.classList =
            'u-aspect-w-16 u-aspect-h-9 u-my-30 sm:u-my-40'
          video.parentNode.insertBefore(embedWrapper, video)
          embedWrapper.appendChild(video)
        }
      })
    }


    pangu.spacingPageBody();
    hljs.highlightAll();

    return document.body.innerHTML
  }

  return content
}
