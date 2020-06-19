
// var textBox = document.getElementsByClassName(
//     '_3Whw5 selectable-text invisible-space copyable-text')[0]
// .textContent;





    //Pegar o nome do chat aberto e jogar no nome do arquivo.(How to);
    //

var textBoxUpdated=[];
var textBox = document.getElementsByClassName('_3Whw5 selectable-text invisible-space copyable-text');
// get all elements


function download(data, filename, type) {
 
    for(let i = 0; i < textBox.length; i++){
        textBoxUpdated[i] = textBox[i].textContent + "\n"; //Get all text element and textBoxUpdated will receive.
    }

    var file = new Blob([data], {type: type});
    var a = document.createElement("a")
    url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);                     
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }

    // Function from
    // https://stackoverflow.com/questions/13405129/javascript-create-and-save-file



download(textBoxUpdated, "myFile.txt", 'text/plain')