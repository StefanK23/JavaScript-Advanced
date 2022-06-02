function speedLimit(speed, area) {
    let limit = 0;
    switch (area) {
        case "residential":
            limit = 20;
            break
        case "city":
            limit = 50;
            break
        case "interstate":
            limit = 90;
            break
        case "motorway":
            limit = 130;
            break;
    }
 
 
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed > limit) {
        let diff = speed - limit;
        if (diff <= 20) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - speeding`)
        } else if (diff > 20 && diff <= 40) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - excessive speeding`)
        } else if (diff > 40) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - reckless driving`)
        }
    }
 
}
speedLimit(40, 'city');
speedLimit(21, 'residential');
speedLimit(120, 'interstate');
speedLimit(200, 'motorway');