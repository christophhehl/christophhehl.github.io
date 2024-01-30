function correctCSSForMobileDevices() {
    if (!isUsingMobile()) return;
    document.getElementById('myname').style.fontSize='6vh';
    const logos = document.getElementsByClassName("logo");
    for (let i = 0; i < logos.length; i++) {
        logos[i].style.height='6vh';
    }
}

function isUsingMobile() {
    return navigator.userAgent.includes("Mobile");
}

function copyDiscordName() {
    const discordName = "skrik"
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(discordName);

    /* Alert the copied text */
    alert("Copied the text: " + discordName);
}