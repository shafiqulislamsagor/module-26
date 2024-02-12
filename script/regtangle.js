const buttons = document.getElementById('RectangleName');

buttons.addEventListener('click',function(){
    const weidthInputArea = document.getElementById('weidth').value;
    const weidth = parseFloat(weidthInputArea);

    const lengthInputArea = document.getElementById('length').value;
    const length = parseFloat(lengthInputArea);

    const area = weidth * length;

    document.getElementById('rectangleArea').innerText = area
    
})

// function buttonsReg(){
//     const weidthInputArea = document.getElementById('weidth').value;
//     const weidth = parseFloat(weidthInputArea);
//     console.log(weidth)

//     const lengthInputArea = document.getElementById('length').value;
//     const length = parseFloat(lengthInputArea);

//     const area = weidth * length;
//     console.log(area)
// }