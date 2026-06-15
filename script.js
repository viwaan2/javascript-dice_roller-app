function roll(){
    const num_dice = Number(document.getElementById("no_input").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const rollSound = new Audio("sound/dice.mp3");

    rollSound.play();

    const values = [];
    const images = [];

    for(let i = 0; i < num_dice; i++){
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);
        images.push(`<img src="imgs/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}