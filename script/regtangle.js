const buttons = document.getElementById('RectangleName');

// buttons.addEventListener('click',function(){
//     const weidthInputArea = document.getElementById('weidth').value;
//     const weidth = parseFloat(weidthInputArea);

//     const lengthInputArea = document.getElementById('length').value;
//     const length = parseFloat(lengthInputArea);

//     const area = weidth * length;

//     document.getElementById('rectangleArea').innerText = area

// })

function similar(man) {
    const lengthInputArea = document.getElementById(man).value;
    const length = parseFloat(lengthInputArea);
    return length;
}

buttons.addEventListener('click', function (a, b) {
    a = similar('weidth');
    b = similar('length')

    const area = a * b;

    document.getElementById('rectangleArea').innerText = area

})


function triangleArea(a, b) {
    a = similar('base')
    b = similar('height')
    const areas = (1 / 2) * a * b;
    // console.log(area)
    const triangleAreaSpan = document.getElementById('areaName');
    triangleAreaSpan.innerText = areas;


}



// function buttonsReg(){
//     const weidthInputArea = document.getElementById('weidth').value;
//     const weidth = parseFloat(weidthInputArea);
//     console.log(weidth)

//     const lengthInputArea = document.getElementById('length').value;
//     const length = parseFloat(lengthInputArea);

//     const area = weidth * length;
//     console.log(area)
// }