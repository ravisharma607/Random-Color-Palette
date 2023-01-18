let container = document.querySelector('.container')
let btn = document.querySelector('.btn')
let box = document.querySelector('.box');
let paletteBox = 32;


const genratePalette = () =>{
    container.innerHTML = '';
    for (let i = 0; i < paletteBox; i++) {        
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,'0')}`;
        let color = document.createElement('li')
        color.classList.add('color')
        color.innerHTML = `<div class="box" style ='background:${randomHex}'></div>
        <div class="hex-value">${randomHex}</div>`;
        color.addEventListener('click',()=>copyColor(color,randomHex));
        container.appendChild(color)
    }
}
genratePalette()
let copyColor = (elem,hexVal)=>{
    let colorElem = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElem.innerHTML = 'Copied'
        setTimeout(()=>colorElem.innerHTML = hexVal,1000)
    }).catch(()=>alert('OOPS!!.. Unable To Copy Color Code'))
}
btn.addEventListener('click',genratePalette);