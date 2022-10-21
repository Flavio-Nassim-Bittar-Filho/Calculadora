const keyboard = document.querySelectorAll('button')
const screen = document.querySelector('.screen')

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
                calc = eval(calc)
                calc = String(calc)
                screen.value = calc
            }
        }
        else {
            calc += button.value 
            screen.value = calc
        }

    })

})