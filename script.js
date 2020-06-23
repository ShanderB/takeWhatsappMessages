var title = document.querySelector(".DP7CM") //Pegará a class DP7CM, que é a que indica a página atualmente aberta;
var textBoxUpdated = []; //Receberá o textBox;
var textBox = document.getElementsByClassName('_3Whw5 selectable-text invisible-space copyable-text'); // Pegará todos os textos da mensagem;

function download(data, filename, type) {
    for (let i = 0; i < textBox.length; i++) {
        textBoxUpdated[i] = textBox[i].textContent + "\n"; //Get all text element and textBoxUpdated will receive.
    }                                                    

    var file = new Blob([data], { type: type });
    var a = document.createElement("a")
    url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

// Function to print
// https://stackoverflow.com/questions/13405129/javascript-create-and-save-file

//Insert to download page. Scroll all the way up.
download(textBoxUpdated, title.textContent, 'text/plain')