var i = 0,text;
text = 'My name is <Borislav Panov/>'

function typing() {
    if (i < text.length) {
        document.getElementById('line-anim-typewriter').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60)
    }
}
typing();