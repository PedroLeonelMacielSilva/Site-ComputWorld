const input = document.querySelector('#cpf')

cpf.addEventListener('keypress', () => {
    let cpflenght = input.value.cpflenght

    if(cpflenght === 3 || cpflenght === 7 || cpflenght === 11) {
        cpfvalue += '.'
    }
})