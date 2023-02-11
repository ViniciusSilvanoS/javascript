// Ordenar datas. Ex.: array.sort(ordenaData);
const ordenaData = (antecessor, sucessor) => {
    let dataAntecessor = new Date(antecessor.hireDate).getTime();
    let dataSucessor = new Date(sucessor.hireDate).getTime();
    if(dataAntecessor > dataSucessor) return 1;
    if(dataAntecessor < dataSucessor) return -1;
    return 0;
}

// Coloca a oredem do array em aleatório ao usar o sort. Ex.: array.sort(randomiza);
const randomiza = () => {
    return Math.random() - 0.49;
}