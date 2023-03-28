
// Завдання 5. 

let addWords = document.querySelector('.add-words') as HTMLInputElement;
let btAdd = document.querySelector('.bt-add') as HTMLInputElement;
let btReset = document.querySelector('.bt-reset') as HTMLInputElement;
let textarea = document.querySelector('.some-text') as HTMLTextAreaElement;
let btCenzor = document.querySelector('.bt-cenzor') as HTMLInputElement;

let badWords: string[] = ['java', 'tottenham'];
let someWords = document.querySelector('.some-words') as HTMLElement;
badWords.forEach((elem, ind) => {
    if(ind === badWords.length - 1) someWords.textContent += `${elem}`
    else someWords.textContent += `${elem},`
})

btAdd.onclick = () => {
    if(addWords.value !== ''){
        badWords.push(addWords.value)
        someWords.textContent = '';
        badWords.forEach((elem, ind) => {
            if(ind === badWords.length - 1) someWords.textContent += `${elem}`
            else someWords.textContent += `${elem},`
            addWords.value = '';        
            addWords.placeholder = 'word here..';
            addWords.style.border = '1px solid rgb(0, 191, 216)';
        })
    }
    else {
        addWords.style.border = '1px solid rgb(216, 0, 0)';
        addWords.placeholder = 'Please write a word!';
    }
}

btReset.onclick = () => {
    someWords.textContent = '';
    badWords = [];
}

btCenzor.onclick = () => {
    if(textarea.value !== ''){
        textarea.style.border = '1px solid rgb(0, 165, 49)';
        let text: string = textarea.value;
        let textArr: string[] = text.split(' ');
        textArr.forEach((elem: any, ind) => {
            if(badWords.includes(elem)){
                textarea.value = '';
                let newElem: any = '';
                for(let i=0; i<elem.length; i++){
                    newElem = `${newElem}*`
                }
                elem = newElem;
                textArr[ind] = newElem;
                textArr.forEach((elem) => {
                    textarea.value += `${elem} `;
                })
            }
        })
    }
    else {
        textarea.style.border = '1px solid rgb(216, 0, 0)';
        textarea.placeholder = 'Please write a text!';
    }
}



