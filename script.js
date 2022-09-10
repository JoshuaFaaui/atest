
// --------------------------\/the custom alert\/-----------------------

const usermess = document.getElementById("message")
const userem = document.getElementById("email")
const modal = document.querySelector('.customalert')
const usern = document.getElementById("name")
const usernum = document.getElementById("number")
const cont = document.querySelector('.cont')
const cont1 = document.getElementById("cont1")

//---------function runs on submition\/
function submitter() {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kickem4life@gmail.com",
        Password: "4A731475388AD51380DD1D2A004904D0F050",
        To: "kickem4life@gmail.com",
        From: userem.value,
        Subject: "My Enquiry For KWS SHOES",
        Body: usermess.value
    }).then((success) => {
        console.log("message sent successfully")
    }).catch((error) => {
        console.log("message failed to send")
    })
    //--------------\/if theres no value in the inputs, the code wont run\/
    if (usermess.value.length && userem.value.length > 0) {
        if(usern.value.length && usernum.value.length > 0){
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
    cont1.innerHTML = ''
}

// underlining the about page
function aler() {
    alert("uiwhfiuwehf")
}