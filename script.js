const usermess = document.getElementById("message")
const userem = document.getElementById("email")
const modal = document.querySelector('.customalert')

function submitter(clicked) {
    if (usermess.value.length && userem.value.length > 0) {
        modal.style.display = 'block';
    }
}
function exitalert(clicked) {
    modal.style.display = 'none'
}
// underlining the about page
function aler() {
    alert("uiwhfiuwehf")
}