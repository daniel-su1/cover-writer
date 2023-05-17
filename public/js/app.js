let learnMore = document.querySelector('#learnMore');
learnMore.addEventListener('click', ()=>{
    document.querySelector('#scroll').scrollIntoView();
})


let submit = document.querySelector('#submit');
submit.addEventListener('click', ()=>{
    document.querySelector('#spinner').style.opacity = 1;
})
document.querySelector('#spinner').style.opacity = 1;