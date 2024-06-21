let whatYourName = prompt('Jakie jest Twoje imię?');
console.log(whatYourName);
let message;

switch(whatYourName) {
    case 'Czarek':
        message = 'Brawo! Tak, masz na imię: ';
        break;
    case 'Zuzanna':
        message = 'Super! Tak masz na imię: ';
        break;
    case 'Janusz':
        message = ' Świetnie! Masz na imię: ';
        break;
    case 'Agnieszka':
        message = 'Doskonale! Masz na imię: ';
        break;
    case 'Monika':
        message = 'Lepiej nie może być Pani ';
        break;
    default:
        message = 'Przegrałeś, spróbuj jeszcze raz :)';
}
console.log(`Jakie jest Twoje imię? ${whatYourName}.${message + whatYourName}`);