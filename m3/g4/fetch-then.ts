type CapoAbbigliamentoData = {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoIvaEsclusa: number;
    prezzoIvaInclusa: number;
    disponibile: string;
    saldo: number;
};

class CapoAbbigliamento {
    private id: number;
    private codprod: number;
    private collezione: string;
    private capo: string;
    private modello: number;
    private quantita: number;
    private colore: string;
    private prezzoIvaEsclusa: number;
    private prezzoIvaInclusa: number;
    private disponibile: string;
    private saldo: number;

    constructor(data: CapoAbbigliamentoData) {
        this.id = data.id;
        this.codprod = data.codprod;
        this.collezione = data.collezione;
        this.capo = data.capo;
        this.modello = data.modello;
        this.quantita = data.quantita;
        this.colore = data.colore;
        this.prezzoIvaEsclusa = data.prezzoIvaEsclusa;
        this.prezzoIvaInclusa = data.prezzoIvaInclusa;
        this.disponibile = data.disponibile;
        this.saldo = data.saldo;
    }

    getSaldoCapo(): number {
        return this.saldo;
    }

    getAcquistoCapo(): number {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    }
}

async function fetchAbbigliamentoData(url: string): Promise<CapoAbbigliamentoData[]> {
    const response:Response = await fetch(url);
    return await response.json();
}

const file_json = "./Abbigliamento.json";
fetchAbbigliamentoData(file_json)
    .then(data => console.log(data))
    .catch(error => console.error(error));
