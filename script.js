
// --------------------------\/the custom alert\/-----------------------

const usermess = document.getElementById("message")
const userem = document.getElementById("email")
const modal = document.querySelector('.customalert')
const usern = document.getElementById("name")
const cont = document.querySelector('.cont')
const cont1 = document.getElementById("cont1")
//---------function runs on submition\/
function submitter(clicked) {
    if (usermess.value.length && userem.value.length > 0) {
        if(usern.value.length > 0){
            modal.style.display = 'block';
        }  
    }
    // a for loop to get rid of unecessary symbols in the users name\/
    for (let i = 0; i < usern.value.length; i++){
        const x = usern.value[i]
        switch (x){
            case '~':
                continue;
            case '!':
                continue;
            case '@':
                continue;
            case '#':
                continue;
            case '$':
                continue;
            case '%':
                continue;
            case '^':
                continue;
            case '&':
                continue;
            case '*':
                continue;
            case '(':
                continue;
            case ')':
                continue;
            case '+':
                continue;
            default:
                cont1.innerHTML += x
                break;
            
        }
    }

    
}
//resetting form on alerts exit\/
const form = document.querySelector('form')
function exitalert(clicked) {
    modal.style.display = 'none'
    form.reset()
}

// underlining the about page
function aler() {
    alert("uiwhfiuwehf")
}