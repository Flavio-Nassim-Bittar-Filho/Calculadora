// captura da pagina toda
const body = document.querySelector('body')

// Nome do tema
const nick = document.querySelector('h1')

// captura todos os botões da calculadora
const keyboard = document.querySelectorAll('button')

// captura a tela 
const screen = document.querySelector('.screen')

// captura o botão de tema
const theme = document.querySelector('.theme')


// logica para troca de Tema
theme.addEventListener('change', () => {

    switch (theme.value) {
        case '1':
            keyboard.forEach(button => button.classList.add('t1'))
            body.classList.add('t1')
            screen.classList.add('t1')
            theme.classList.add('t1')
            nick.textContent = 'Love'
            nick.classList.add('t1')
            break;
    
        default:
            keyboard.forEach(button => button.classList.remove('t1'))
            body.classList.remove('t1')
            screen.classList.remove('t1')
            theme.classList.remove('t1')
            nick.textContent = 'Default'
            nick.classList.remove('t1')
            break;

    }

})





// logica de calculo 
const special = ['=', 'ca', 'c']
let calc = ''

keyboard.forEach(button => {

    button.addEventListener('click', () => {

        if(special.includes(button.value)) {

            if(button.value == 'ca') {
                calc = ''
                screen.value = calc
            }
            else if(button.value == 'c') {
                calc = calc.substring(0, calc.length -1)
                screen.value = calc
            }
            else {
                if(calc == '02/12/2021' && nick.textContent == 'Love') {
                    screen.value = 'Eu te amo muitooo, chuchuuu <3'
                }
                else {
                    calc = eval(calc)
                    calc = String(calc)
                    screen.value = calc
                }
            }
        }
        else {
            calc += button.value 
            screen.value = calc
        }

    })

})