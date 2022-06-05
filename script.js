document.body.style.position = "fixed";

// Hovering over the logo reveals the HTML "contact-me"

function logoHover() {
    document.getElementById('logo').innerHTML = ".ks{contact-me};";

    document.getElementById('logo').addEventListener('mouseleave', () =>{
        document.getElementById('logo').innerHTML = ".ks{};";
    })
}


// Clicking on the modal message AND the X button (span) in the modal operates the modal. 

function messageModalOpen() {
    document.getElementById('messagemodal').classList.toggle('active');
}

// Hovering over homepage buttons expands text. 

function workButtonHover() {
    document.getElementById('workbutton').innerHTML = "My Work >";

    document.getElementById('workbutton').addEventListener('mouseleave', () =>{
        document.getElementById('workbutton').innerHTML = "My Work";
    })
}

function talkButtonHover() {
    document.getElementById('letstalkbutton').innerHTML = "Let's talk >";

    document.getElementById('letstalkbutton').addEventListener('mouseleave', () =>{
        document.getElementById('letstalkbutton').innerHTML = "Let's talk";
    })


}

function mobilenavbar() {
    document.getElementById('mobilenavmenu').classList.toggle('active');

}

function mobilenavbarhide() {
    document.getElementById('mobilenavmenu').classList.toggle('active');
}


function mobilenavcontact() {
    document.getElementById('mobilenavmenu').classList.toggle('active');
    setTimeout(messageModalOpen, 600);
}