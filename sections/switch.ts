
export let weekDay: number = 5; // 1 = Lunes, 2=Martes, 3=Miércoles...

if ( weekDay <= 0 ) {
    // console.log('Día de la semana no permitido');
    throw new Error('Día de la semana no permitido');
} 

switch( weekDay ) {
    
    // weekDay === 1
    case 1: 
        console.log('Es lunes');
        break;

    // weekDay === 2
    case 2:
        console.log('Es martes');
        break;

    // weekDay === 3
    case 3:
        console.log('Es miércoles');
        break;
    
    default:
        console.log('No es lunes, martes o miércoles');
}



