function tabuada() {
    let number = document.getElementById('numtxt')
    let tab = document.getElementById('seltab')
    
    if(number.value.length == 0) {
        alert('Insira um número')
    }
    
    else {
        tab.innerHTML = ''
        let num = Number(number.value)
        for(let c = 1; c <= 10; c++) {
            let produto = document.createElement('option')
            produto.text = `${num} * ${c} = ${num * c}`
            produto.value = 'tab${c}'
            tab.appendChild(produto)
        }
    }
}