function changeFont() {
    var fontFamily = document.getElementById('fontfamily').value;
    document.getElementById("editor").style.fontFamily = fontFamily;
}

function changeSize() {
    var fontSize = document.getElementById('fontsize').value;
    document.getElementById("editor").style.fontSize = fontSize;
}

function bold() {
    document.getElementById("editor").style.fontWeight = 'bold' ;
}

function italic() {
    document.getElementById("editor").style.fontStyle = 'italic' ;
}

function underline() {
    document.getElementById("editor").style.textDecoration = 'underline' ;
}