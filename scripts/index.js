function copyDiscordName() {
    const discordName = "Skrik#0363"
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(discordName);

    /* Alert the copied text */
    alert("Copied the text: " + discordName);
}