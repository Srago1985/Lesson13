const clickedDiv = (event) => {
    console.log(`${event.currentTarget.id} clicked`);
}



div1.addEventListener('click', clickedDiv);

div2.addEventListener('click', clickedDiv);

div3.addEventListener('click', clickedDiv);