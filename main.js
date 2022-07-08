// upper case
let upperButton = document.getElementById("upper-case");

upperButton.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    text.value = text.value.toUpperCase();
});

// lower case
let lowerButton = document.getElementById("lower-case");

lowerButton.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    text.value = text.value.toLowerCase();
});

// proper case
let properButton = document.getElementById("proper-case");

properButton.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    let array = text.value.toLowerCase().split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    text.value = array.join(" ");
});

// sentence case
let sentenceButton = document.getElementById("sentence-case");

sentenceButton.addEventListener("click", function () {
    let text = document.querySelector("textarea");
    let array = text.value.toLowerCase().split(". ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    text.value = array.join(". ");
});

// save text file
let saveText = document.getElementById("save-text-file");

saveText.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let filename = "text.txt";
    download(filename, text);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
