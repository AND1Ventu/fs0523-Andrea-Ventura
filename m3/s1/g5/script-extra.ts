interface ISmartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
    mostraRegistroChiamate(): void;
    filtraChiamatePerDataOra(dataOra: Date): void;
}

interface IChiamata {
    id: number;
    durata: number;
    dataOra: Date;
}

class Smartphone implements ISmartphone {
    private carica: number;
    private numeroChiamate: number;
    public costoMinuto: number;
    private registroChiamate: IChiamata[];

    constructor(costoMinuto: number) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }

    public ricarica(euro: number): void {
        this.carica += euro;
    }

    public numero404(): string {
        return `${this.carica.toFixed(2)} EUR`;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public chiamata(min: number): void {
        let costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            this.registroChiamate.push({
                id: this.registroChiamate.length + 1,
                durata: min,
                dataOra: new Date()
            });
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

    public mostraRegistroChiamate(): void {
        this.registroChiamate.forEach(chiamata => {
            const formattedDate = chiamata.dataOra.toISOString().replace('T', ' ').substring(0, 19);
            console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata}, Data e Ora: ${formattedDate}`);
        });
    }

}


let smartphone1 = new Smartphone(0.10);
let smartphone2 = new Smartphone(0.15);
let smartphone3 = new Smartphone(0.20);

smartphone1.ricarica(10);
smartphone2.ricarica(15);
smartphone3.ricarica(20);


smartphone1.chiamata(5);
smartphone1.chiamata(10);

smartphone2.chiamata(3);
smartphone2.chiamata(2);

smartphone3.chiamata(10);


console.log(`Smartphone 1 - Credito: ${smartphone1.numero404()}, Chiamate: ${smartphone1.getNumeroChiamate()}`);
console.log(`Smartphone 2 - Credito: ${smartphone2.numero404()}, Chiamate: ${smartphone2.getNumeroChiamate()}`);
console.log(`Smartphone 3 - Credito: ${smartphone3.numero404()}, Chiamate: ${smartphone3.getNumeroChiamate()}`);

console.log("Registro Chiamate Smartphone 1:");
smartphone1.mostraRegistroChiamate();

console.log("Registro Chiamate Smartphone 2:");
smartphone2.mostraRegistroChiamate();

console.log("Registro Chiamate Smartphone 3:");
smartphone3.mostraRegistroChiamate();

smartphone1.azzeraChiamate();
console.log(`Smartphone 1 dopo azzeramento chiamate - Chiamate: ${smartphone1.getNumeroChiamate()}`);

smartphone2.azzeraChiamate();
console.log(`Smartphone 2 dopo azzeramento chiamate - Chiamate: ${smartphone2.getNumeroChiamate()}`);

smartphone3.azzeraChiamate();
console.log(`Smartphone 3 dopo azzeramento chiamate - Chiamate: ${smartphone3.getNumeroChiamate()}`);
