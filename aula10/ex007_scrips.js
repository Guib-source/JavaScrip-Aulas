function somar(){
    let tn1 = document.getElementById('txtn1')
    let tn2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    n1 = Number(tn1.value)
    n2 = Number(tn2.value)
    let s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
    
}