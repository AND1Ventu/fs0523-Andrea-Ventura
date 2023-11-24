interface ISmartphone {
    // Variabili d'istanza
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    // Metodi
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
}

class Smartphone implements ISmartphone {
    // Variabili d'istanza
    public carica: number;
    public numeroChiamate: number;
    public costoMinuto: number;

    // Costruttore della classe
    constructor(costoMinuto: number) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = costoMinuto;
    }

    // Metodo per ricaricare il telefono
    public ricarica(euro: number): void {
        this.carica += euro;
    }

    // Metodo per visualizzare il credito residuo
    public numero404(): string {
        return `${this.carica.toFixed(2)} EUR`;
    }

    // Metodo per ottenere il numero di chiamate effettuate
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    // Metodo per simulare una chiamata
    public chiamata(min: number): void {
        let costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    // Metodo per azzerare il contatore delle chiamate
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}


// Creazione delle istanze
let smartphone1 = new Smartphone(0.10);
let smartphone2 = new Smartphone(0.15);
let smartphone3 = new Smartphone(0.20);

// Test per smartphone1
smartphone1.ricarica(10);
smartphone1.chiamata(5);
smartphone1.chiamata(10);
console.log(`Smartphone 1 - Credito: ${smartphone1.numero404()}, Chiamate: ${smartphone1.getNumeroChiamate()}`);
smartphone1.azzeraChiamate();
console.log(`Smartphone 1 dopo azzeramento chiamate - Chiamate: ${smartphone1.getNumeroChiamate()}`);

// Test per smartphone2
smartphone2.ricarica(20);
smartphone2.chiamata(30);
console.log(`Smartphone 2 - Credito: ${smartphone2.numero404()}, Chiamate: ${smartphone2.getNumeroChiamate()}`);

// Test per smartphone3
smartphone3.ricarica(5);
smartphone3.chiamata(10);
console.log(`Smartphone 3 - Credito: ${smartphone3.numero404()}, Chiamate: ${smartphone3.getNumeroChiamate()}`);