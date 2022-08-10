class Paciente {
  constructor(nombre, orden) {
    this.nombre = nombre;
    this.orden = orden;
  }

  datos() {
    //SE EJECUTARA EN EL CASO DE QUE SE INGRESE UN NUMERO MENOR O IGUAL A 10
    if (this.orden <= 10) {
      alert(`Bienvenid@ ${this.nombre}. Tu numero de orden es: ${this.orden}`); //De esta forma interpolamos string con variables y es mas facil
    }
  }
  disponible() {
    switch (
      this.orden //DESPLEGARA UN MENSAJE CON EL HORARIO DE CADA TURNO SEGUN ELIJA EL USUARIO
    ) {
      case "1":
        alert("Primer turno, 8hs");
        break;
      case "2":
        alert("Segundo turno, 9hs");
        break;
      case "3":
        alert("Tercer turno, 10hs");
        break;
      case "4":
        alert("Cuarto turno, 11hs");
        break;
      case "5":
        alert("Quinto turno, 12hs");
        break;
      case "6":
        alert("Sexto turno, 16hs");
        break;
      case "7":
        alert("Septimo turno, 17hs");
        break;
      case "8":
        alert("Octavo turno, 18hs");
        break;
      case "9":
        alert("Noveno turno, 19hs");
        break;
      case "10":
        alert("Ultimo turno, 20hs");
        break;
      default:
        alert("Solo hay 10 turnos al día");
    }
  }
}

class Doctor {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludo() {
    alert(
      `Hola! Soy el ${this.nombre}. Para cancelaciones, contactarse con secretaria. Gracias!` //De esta forma interpolamos string con variables y es mas facil
    );
  }
}

const doctor1 = new Doctor("Dr. Clinico Gimenez Lautaro");

const nombre = prompt("Ingrese su nombre y apellido");
const orden = prompt("En que orden le gustaria ser atendido? \n Numero 1-10");

//De esta manera queda mejor

const paciente1 = new Paciente(nombre, orden);

doctor1.saludo();

paciente1.datos();

paciente1.disponible();
