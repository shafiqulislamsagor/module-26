function checkName(name) {
    if (typeof name !== 'string') {
    return 'Invalid'
    }
    let arry = name.toLowerCase().split('');
    let check = arry.length - 1;
    if(arry[check] == 'a' ){
    return 'Good name'
    }
    else if(arry[check] == 'y'){
    return 'Good name'
    }
    else if(arry[check] == 'i'){
    return 'Good name'
    }
    else if(arry[check] == 'e'){
    return 'Good name'
    }
    else if(arry[check] == 'o'){
    return 'Good name'
    }
    else if(arry[check] == 'u'){
    return 'Good name'
    }
    else if(arry[check] == 'w'){
    return 'Good name'
    }
    else{
    return 'Bad Name'
    }
    }

    console.log(checkName("RAFEE"))