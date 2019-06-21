class Athlete {

    constructor() {
        this.name;
        this.weight;
        this.height;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    getResultIMC(weight, height) {
        return weight / (height * height);
    }

    static formatImcResult(imc) {
        return imc.toFixed(2);
    }
}

const at = new Athlete();
at.name = 'Felipe Daniel';
at.weight = 99
at.height = 1.90;

console.log(at)
console.log(at.name, at.weight, at.height)
console.log(`${at.name} has ${Athlete.formatImcResult(at.getResultIMC(at.weight, at.height))} IMC`)
