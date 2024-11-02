{
// nullable type

const searchName= (value: string | null) => {
    if (value) {
    // console.log( "Searching" ) ;
    } else {
    // console.log ("There is nothing to search ")
    }
};

searchName(null)

// unknow type

const getSpeedInMeterPerSecond = (value : unknown) => {
    if ( typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 360;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === 'string') {
        const [result, unit] = value.split(" ")
        const convertedSpeed = (parseFloat(result) * 1000) / 360;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else{
        console.log('wrong input');
    }
}
// getSpeedInMeterPerSecond(1000);
// getSpeedInMeterPerSecond(`1000 kmh^-1`);
// getSpeedInMeterPerSecond(null);
// getSpeedInMeterPerSecond(undefined);
// getSpeedInMeterPerSecond();



// naver type
//  function throwErro(msg: string) { // not souported in this function in ES6 for {}
//     throw new Error(msg);
//  }

//  throwErro('mushkil se error hogaya')

const throwErro=(msg: string): never => {
    throw new Error(msg);
 }

 throwErro('mushkil se error hogaya')


}