const select = document.querySelector('select');
const inputAll = document.querySelectorAll('input');

const myImg = document.querySelector('img');
let textArea = document.querySelector('textarea');

let urlObj = {};

const removeHashTag = (str) => {
    return str.replace("#","")
}

const addPlus = (str) => {
    return str.split(" ").join("+");
}

const createImagePath = () => {

    
    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value);
    urlObj.bgClr = removeHashTag(inputAll[1].value);
    urlObj.txtClr = removeHashTag(inputAll[2].value);
    
    let urlPath = (`http://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`)
    
    myImg.src = urlPath;
    textArea.value = urlPath;
    
    textArea.focus();
    textArea.select();

    navigator.clipboard.writeText(textArea.value)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error copying text: ', err);
    });


}


select.addEventListener('change' , createImagePath);
inputAll.forEach((curElem) => curElem.addEventListener('change', createImagePath));