abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }

    abstract getUtileTasse(): number;

    getTasseInps(): number {
        return this.redditoannuolordo * this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.redditoannuolordo * this.tasseirpef;
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef() - this.getUtileTasse();
    }
}
