function sayDecorator(constructorFunction: Function) {
  console.log("decorator sebelum class");
}

interface User {
  id: number;
  nama: string;
  status: boolean;
}

@sayDecorator
class Perkenalan implements User {
  id: number;
  nama: string;
  status: boolean;
  constructor(id: number, nama: string, status: boolean) {
    this.id = id;
    this.nama = nama;
    this.status = status;
  }
  private identity(): object {
    return { id: this.id, nama: this.nama, status: this.status };
  }
  greet() {
    console.log(this.identity());
  }
}

let check = new Perkenalan(123, "Izac", true);
console.log(check);
check.greet();

function arrNumb(input: number[]) {
  console.log(input);
}

arrNumb([1, 2, 3, 4, 5, 123]);
