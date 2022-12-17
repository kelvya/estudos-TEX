console.log('Testando arquivo JS 5')

let t1Txt, t2Txt, st1Txt, st2Txt, btnConfTurno, btnConfSetor, t1, t2, st1, st2, temp

t1 = 8
t2 = 4

t1Txt = document.querySelector('#func01-turno')
t2Txt = document.querySelector('#func02-turno')
st1Txt = document.querySelector('#func01-setor')
st2Txt = document.querySelector('#func02-setor')

t1Txt.value = `${t1}hs`
t2Txt.value = `${t2}hs`

document.querySelector('#btnConfTurno').addEventListener('click', function () {
    // OPÇÃO COM VARIÁVEL TEMP (TEMPORÁRIA)
    // temp = t1
    // t1 = t2
    // t2 = temp

    // -OPÇÃO COM CÁLCULO MATEMÁTICO
    t1 = t1 + t2
    t2 = t1 - t2
    t1 = t1 - t2

    t1Txt.value = `${t1}hs`
    t2Txt.value = `${t2}hs`
})

st1Txt.value = 'Atendimento'
st2Txt.value = 'Entrega'
document.querySelector('#btnConfSetor').addEventListener('click', function () {
    temp = st1Txt.value
    st1Txt.value = st2Txt.value
    st2Txt.value = temp
})


