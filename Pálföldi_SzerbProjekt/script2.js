function kalkulacioskoltseg (aramfogyasztas,gazfogyasztas,vizfogyasztas,kozoskoltseg) {
    const aramkoltseg = aramfogyasztas <= 1320 ? aramfogyasztas * 41.2 : 1320 * 41.2 + (aramfogyasztas - 1320)*70.1;
    const gazkoltseg = gazfogyasztas <= 85 ? gazfogyasztas * 85.06 : 85 * 85.6 + (gazfogyasztas - 85)*650.87;
    const vizkoltseg = vizfogyasztas <= 20 ? 179.95 + vizfogyasztas * 218.95 : 179.95 + 20 * 218.95 + (vizfogyasztas - 20)*504.06;

    const osszkoltseg = aramkoltseg+gazkoltseg+vizkoltseg+kozoskoltseg;

    return {aramkoltseg,gazkoltseg,vizkoltseg,kozoskoltseg,osszkoltseg};
}

      //  function displayResults