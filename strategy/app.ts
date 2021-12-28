//////////Interface//////////
interface EstrategiaPedagio {
    calcularPedagio(): number;
}

//////////Estratégias concretas//////////
class EstrategiaEixoSimples implements EstrategiaPedagio {
    calcularPedagio(): number {
        return 2.50;
    }
}

class EstrategiaEixoDuplo implements EstrategiaPedagio {
    calcularPedagio(): number {
        return 3.25;
    }
}

class EstrategiaEixoTriplo implements EstrategiaPedagio {
    calcularPedagio(): number {
        return 5.80;
    }
}

//////////Contexto do cliente//////////
class Pedagio{
    private estrategiaPedagio: EstrategiaPedagio;

    constructor(estrategiaPedagio : EstrategiaPedagio){
        this.estrategiaPedagio = estrategiaPedagio;
    }

    public calcularPedagio(): number{
        return this.estrategiaPedagio.calcularPedagio();
    }

    public setEstrategiaPedagio(estrategiaPedagio : EstrategiaPedagio): void{
        this.estrategiaPedagio = estrategiaPedagio;
    }
}

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});

//////////Main//////////
const eixoSimples: EstrategiaPedagio = new EstrategiaEixoSimples();
const eixoTriplo: EstrategiaPedagio = new EstrategiaEixoTriplo();

const pedagio = new Pedagio(eixoSimples);
console.log("Valor: " + formatter.format(pedagio.calcularPedagio()));
pedagio.setEstrategiaPedagio(eixoTriplo);
console.log("Valor: " + formatter.format(pedagio.calcularPedagio()));
