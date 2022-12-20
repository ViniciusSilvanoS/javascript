function aleatorio(){
    const vlMin = 1;
    const vlMax = 6;
    let aleatorio = Math.floor((Math.random() * (vlMax - vlMin + 1)) + vlMin);

    document.getElementById("dado").src = "./dice/dice_" + aleatorio + ".gif";

}