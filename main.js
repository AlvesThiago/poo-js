class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `Este é um ${this.marca} ${this.modelo}, ano ${this.ano}.`;
    }
}

class Esportivo extends Carro {
    constructor(marca, modelo, ano, velocidadeMaxima) {
        super(marca, modelo, ano);
        this.velocidadeMaxima = velocidadeMaxima;
    }

    descricao() {
        return `${super.descricao()} Velocidade máxima de ${this.velocidadeMaxima} km/h.`;
    }
}

class SUV extends Carro {
    constructor(marca, modelo, ano, tracao) {
        super(marca, modelo, ano);
        this.tracao = tracao;
    }

    descricao() {
        return `${super.descricao()} Tração ${this.tracao}.`;
    }
}

const carro1 = new Esportivo('Ferrari', '488', 2022, 330);
const carro2 = new SUV('Land Rover', 'Discovery', 2023, '4x4');
const carro3 = new Carro('Toyota', 'Corolla', 2021);

console.log(carro1.descricao());
console.log(carro2.descricao());
console.log(carro3.descricao());

