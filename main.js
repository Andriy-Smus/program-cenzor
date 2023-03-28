// Завдання 5. 
let addWords = document.querySelector('.add-words');
let btAdd = document.querySelector('.bt-add');
let btReset = document.querySelector('.bt-reset');
let textarea = document.querySelector('.some-text');
let btCenzor = document.querySelector('.bt-cenzor');
let badWords = ['java', 'tottenham'];
let someWords = document.querySelector('.some-words');
badWords.forEach((elem, ind) => {
    if (ind === badWords.length - 1)
        someWords.textContent += `${elem}`;
    else
        someWords.textContent += `${elem},`;
});
btAdd.onclick = () => {
    if (addWords.value !== '') {
        badWords.push(addWords.value);
        someWords.textContent = '';
        badWords.forEach((elem, ind) => {
            if (ind === badWords.length - 1)
                someWords.textContent += `${elem}`;
            else
                someWords.textContent += `${elem},`;
            addWords.value = '';
            addWords.placeholder = 'word here..';
            addWords.style.border = '1px solid rgb(0, 191, 216)';
        });
    }
    else {
        addWords.style.border = '1px solid rgb(216, 0, 0)';
        addWords.placeholder = 'Please write a word!';
    }
};
btReset.onclick = () => {
    someWords.textContent = '';
    badWords = [];
};
btCenzor.onclick = () => {
    if (textarea.value !== '') {
        textarea.style.border = '1px solid rgb(0, 165, 49)';
        let text = textarea.value;
        let textArr = text.split(' ');
        textArr.forEach((elem, ind) => {
            if (badWords.includes(elem)) {
                textarea.value = '';
                let newElem = '';
                for (let i = 0; i < elem.length; i++) {
                    newElem = `${newElem}*`;
                }
                elem = newElem;
                textArr[ind] = newElem;
                textArr.forEach((elem) => {
                    textarea.value += `${elem} `;
                });
            }
        });
    }
    else {
        textarea.style.border = '1px solid rgb(216, 0, 0)';
        textarea.placeholder = 'Please write a text!';
    }
};
