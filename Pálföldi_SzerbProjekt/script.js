document.getElementById("kalkuláció").addEventListener("click", () => {
    const aramfogyasztas = parsefloat(document.getElementById("aramfogyasztas").value);
    const gazfogyasztas = parsefloat(document.getElementById("gazfogyasztas").value);
    const vizfogyasztas = parsefloat(document.getElementById("vizfogyasztas").value);
    const kozoskoltseg = parsefloat(document.getElementById("kozoskoltseg").value);
    if (
        isNaN(aramfogyasztas) || aramfogyasztas < 0 || aramfogyasztas > 25000 ||
        isNaN(gazfogyasztas) || gazfogyasztas < 0 || gazfogyasztas > 500 ||
        isNaN(vizfogyasztas) || vizfogyasztas < 0 || vizfogyasztas > 30 ||
        isNaN(kozoskoltseg) || kozoskoltseg < 6000 || kozoskoltseg > 22000) {
        alert("Nincs megadott adat a tartományban!");
        return;
    }
    const erdemenyek = kalkulacioskoltseg (aramfogyasztas,gazfogyasztas,vizfogyasztas,kozoskoltseg);
    displayResults(eredmenyek);
});