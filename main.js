const keyboard = [
    // 192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
    // 9, 81,

    113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

// document.onkeypress = function (event) {
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }   

let body = document.querySelector('body');

//Создаем область для текста start

const textArea = document.createElement('input');
textArea.className = 'text-area';
textArea.type = 'text';
body.appendChild(textArea);
//Создаем область для текста end

//Создаю клавиатуру start

let keys = document.createElement('div'); //Wrapper
keys.className = 'keys'; 

let initKey = () => {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i === 13 || i == 27 || i === 40 || i === 52 || i === 64) {
            out += '<div class="row"></div>'
        }
        out += '<div id="key-char-code" class="key-char-code" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    keys.innerHTML = out;
}

initKey();

body.appendChild(keys);

//Создаю клавиатуру end


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

