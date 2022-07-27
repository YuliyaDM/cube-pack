const cubes = document.querySelectorAll('.cube');
const edges = document.querySelectorAll('.edge');
let amount = 0;

function random(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

setInterval(() => {
    // if amount can't divide by two, then we make bottom size white;
    amount++;
    cubes.forEach(element => {
        const children = element.children;
        
        element.style.transform = window.getComputedStyle(element).getPropertyValue('transform') + ' rotateZ(-180deg)';
        for (let i = 0; i < children.length; i++){
            if (i === 4 || i === 5){
                children[i].style.background = 'white';
                setTimeout(() => {
                    i === 4 ? children[i].style.background = `#a0c8eb`: children[i].style.background = '#89b3e4';
                    console.log('hello world');
                }, 250);
            }
        }
    });
}, random(3, 6) * 1000);

window.addEventListener('blur', function(){
    this.document.title = 'Зайди обратно';
})