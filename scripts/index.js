function copyDiscordName() {
    const discordName = "skrik"
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(discordName);

    /* Alert the copied text */
    alert("Copied the text: " + discordName);
}