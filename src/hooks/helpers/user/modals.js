
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const Click = () => Toastify({
    text: "Uploading...",
    duration: 16000,
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(90deg, rgba(50,50,50,1) 0%, rgba(118,72,255,1) 100%)",
    },
  }).showToast();

export const Finish = () => Toastify({
    text: "Uploaded!",
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "#7648ff",
    },
  }).showToast();

export const Error = (error) => Toastify({
    text: error,
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "#7648ff",
    },
  }).showToast();


  export const Personal = (message) => Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "#7648ff",
    },
  }).showToast();