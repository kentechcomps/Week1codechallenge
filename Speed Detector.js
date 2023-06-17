const speed = prompt("Enter speed")
//we check whether the speed is less than 70
if (speed<=70){
    console.log('ok');
    //if it great than 70 then run point checks
} else if(speed >70){
    let speedlimit = 70;

    //the math.ceil rounds up the point value
    let points = Math.ceil((speed-speedlimit) / 5)
    if(points>=1 && points<12){
      console.log( 'Points' + points);
    }else if (points > 12){
        console.log('License suspended');
    }
}

