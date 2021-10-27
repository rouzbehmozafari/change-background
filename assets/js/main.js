let rr = document.getElementById('red')
let gg = document.getElementById('green')
let bb = document.getElementById('blue')

function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';}

function changeme() {
    // document.body.backgroundColor = 'rgb(' + rr.value + ',' + gg.value + ',' + bb.value +')' ;
    document.body.style.backgroundColor = rgb(rr.value , gg.value  , bb.value);
    console.log(document.body.style.backgroundColor);
}