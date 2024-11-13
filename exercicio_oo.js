// Classe base
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `${this.marca} ${this.modelo}, ano ${this.ano}`;
    }
}

// Classe Carro, que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    descricao() {
        return `${super.descricao()} com ${this.portas} portas.`;
    }
}

// Classe Moto, que herda de Veiculo
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindrada) {
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }

    descricao() {
        return `${super.descricao()} com ${this.cilindrada} cc.`;
    }
}


const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
const carro2 = new Carro("Honda", "Civic", 2018, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2021, 689);

console.log(carro1.descricao()); // Toyota Corolla, ano 2020 com 4 portas.
console.log(carro2.descricao()); // Honda Civic, ano 2018 com 4 portas.
console.log(moto1.descricao()); // Yamaha MT-07, ano 2021 com 689 cc.
