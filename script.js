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


function dbsBgHover() {
    document.body.style.backgroundImage = "url(dbsbackground.png)";

        document.getElementById('dbsIcon').addEventListener("mouseleave", () => {
            document.body.style.backgroundImage = "none";
        })
}

function dbsBackground() {
    document.body.style.backgroundImage = "url(dbsbackground.png)";
    document.body.style.color = "whitesmoke";

    document.getElementById('dbsLink').addEventListener("mouseleave", () => {
        document.body.style.backgroundImage = "none";
        document.body.style.color = "black";
    })


}

function dbsBackgroundTwo() {
    document.body.style.backgroundImage = "url(dbsabouthero.jpg)";
    document.body.style.color = "whitesmoke";

    document.getElementById('dbsLinkTwo').addEventListener("mouseleave", () => {
        document.body.style.backgroundImage = "none";
        document.body.style.color = "black";
    })

}

function casavBackground() {
    document.body.style.backgroundImage = "url(casavbackground.png)";
    document.body.style.color = "whitesmoke";

    document.getElementById('casavLink').addEventListener("mouseleave", () => {
        document.body.style.backgroundImage = "none";
        document.body.style.color = "black";
    })

}
