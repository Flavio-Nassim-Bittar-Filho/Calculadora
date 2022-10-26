// elementos da calculadora (Não Mexer)
const body = document.querySelector('body')
const nick = document.querySelector('h1')
const keyboard = document.querySelectorAll('button')
const screen = document.querySelector('.screen')
const theme = document.querySelector('.theme')


// Lista de Temas -> coloque o seu tema dentro de uma lista,
// sendo o primeiro parametro a classe definida no seu arquivo CSS, e o segundo o nome do tema ['classe', 'nome-tema']
const themes = [
    ['t0', 'Default'],
    ['t1', 'Love'],
    ['t2', 'Christmas 🎅']
    ['t3', 'Classic']
]

// define o maximo de temas (Não Mexer)
theme.max = themes.length - 1 


// logica para trocar de Tema (Não Mexer)
theme.addEventListener('change', () => {

    for(let i in themes) {
        if(theme.value == i) {
            body.classList.add(themes[i][0])
            screen.classList.add(themes[i][0])
            theme.classList.add(themes[i][0])
            nick.textContent = themes[i][1]
            nick.classList.add(themes[i][0])
            keyboard.forEach(button => button.classList.add(themes[i][0]))
        }
        else {
            body.classList.remove(themes[i][0])
            screen.classList.remove(themes[i][0])
            theme.classList.remove(themes[i][0])
            nick.classList.remove(themes[i][0])
            keyboard.forEach(button => button.classList.remove(themes[i][0]))
        }
    
    }

})


// logica para efetuar o calculo (Não Mexer)
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