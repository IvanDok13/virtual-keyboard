const keyboard = [
    // 192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
    // 9, 81,

    113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

// document.onkeypress = function (event) {
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }   


/* <input onkeypress="javascript:return false;" id="txtChar" onkeydown="javascript:return displayKeyCode(event)" type="text" name="txtChar"></input> */

/* <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea> */

// let textarea = document.createElement('textarea');
// textarea.type = 'text';
// textarea.rows = 5;
// textarea.cols = 50;
// document.body.appendChild(textarea);

document.body.onload = addElement;
let my_div = newDiv = null;
function addElement() {

    // Создаём новый элемент div
    // и добавляем в него немного контента

    let newDiv = document.createElement("div");
        newDiv.innerHTML = '<textarea class="body__textarea textarea" id="textarea" rows="5" cols="50"></textarea>';

    // Добавляем только что созданный элемент в дерево DOM

    my_div = document.getElementById("key-char-code");
    document.body.insertBefore(newDiv, my_div);
  }

// document.querySelector('body').innerHTML = '<h1>Hello!</h1>';

function initKey() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i === 12 || i == 24) {
            out += '<div class="clearFix"></div>'
        }
        out += '<div id="key-char-code" class="key-char-code" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('body').innerHTML = out;
}

initKey();



document.onkeypress = function (event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.key-char-code').forEach(function (element) {
        element.classList.remove('active');
    });
    document.querySelector('.key-char-code[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('.key-char-code').forEach(function (element) {
    element.onclick = function(event) {
        document.querySelectorAll('.key-char-code').forEach(function (element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
    }
});