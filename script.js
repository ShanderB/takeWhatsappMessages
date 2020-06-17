




function download(data, filename, type) {
    var textbox = document.getElementsByClassName('_3Whw5 selectable-text invisible-space copyable-text').textContent;
    var file = new Blob([data ], {type: type});
    var a = document.createElement("a"),
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





download('file text', 'myfilename.txt', 'text/plain')