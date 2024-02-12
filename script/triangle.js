function triangleArea(){
    const baseArea = document.getElementById('base');
    const baseText = baseArea.value;
    const base = parseFloat(baseText);
    // console.log(base)

    const heightArea = document.getElementById('height');
    const heightText = heightArea.value;
    const height = parseFloat(heightText);
    // console.log(height)
    const areas = (1/2) * base * height;
    // console.log(area)
    const triangleAreaSpan = document.getElementById('areaName');
    triangleAreaSpan.innerText = areas;

    
}

const div = document.getElementsByClassName('div');

for(let i of div){
    i.style.textAlign = 'left';
}