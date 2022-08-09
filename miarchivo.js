class Paciente{
    constructor(nombre, orden){        
        this.nombre=nombre;        
        this.orden=orden;        
    }

    datos(){ //SE EJECUTARA EN EL CASO DE QUE SE INGRESE UN NUMERO MENOR O IGUAL A 10
        if (this.orden <= 10 ){
            console.log("Bienvenid@"+" "+this.nombre+". "+"Tu número de orden es: "+ this.orden);            
        } 
        
    }
    disponible(){
        switch(this.orden){ //DESPLEGARA UN MENSAJE CON EL HORARIO DE CADA TURNO SEGUN ELIJA EL USUARIO
            case '1':
                console.log("Primer turno, 8hs");
                break;
            case '2':
                console.log("Segundo turno, 9hs");
                break;
            case '3':
                console.log("Tercer turno, 10hs");
                break;
            case '4':
                console.log("Cuarto turno, 11hs");
                break;
            case '5':
                console.log("Quinto turno, 12hs");
                break;
            case '6':
                console.log("Sexto turno, 16hs");
                break;
            case '7':
                console.log("Septimo turno, 17hs");
                break;
            case '8':
                console.log("Octavo turno, 18hs");
                break;
            case '9':
                console.log("Noveno turno, 19hs");
                break;
            case '10':
                console.log("Ultimo turno, 20hs");
                break;
            default:
                console.log("Solo hay 10 turnos al día");
        }
    }
}



class Doctor{
    constructor(nombre){        
        this.nombre=nombre;        
    }
    saludo(){ 
        console.log("Hola! soy el "+this.nombre+". "+"Para cancelaciones, contactarse con secretaria. Gracias!");
    }
}
  

const doctor1= new Doctor("Dr. Clinico Gimenez Lautaro");

const paciente1= new Paciente (prompt("Ingrese su nombre y apellido: "), prompt("En que orden le gustaria ser atendido?") );

doctor1.saludo();

paciente1.datos();

paciente1.disponible();