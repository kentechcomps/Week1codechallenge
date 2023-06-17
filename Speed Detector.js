const speed = prompt("Enter speed")

if (speed<=70){
    console.log('ok');
} else if(speed >70){
    let speedlimit = 70;
    let points = (speed-speedlimit) / 5
    if(points>=1 && points<12){
      console.log( 'Points' + points);
    }else if (points > 12){
        console.log('License suspended');
    }
    
}

