class Usuario {
    constructor() {
        this.nombre = "Gabriela";
        this.apellido = "Benitez";
        this.libros = [{titulo: "El gato negro", autor: "Edgar Allan Poe"},
        {titulo: "The young elite", autor: "Marie Lu"}];
        this.mascotas = "Ginny";
        
        const addMascotas = this.mascotas.push ("Tokio");
        console.log(addMascotas);

        const addBook = this.libros.push ([{titulo: "Starters", autor: "Lissa Price"}]);
        console.log(addBook);
    };

    getFullName() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}, es un placer conocerte!`);
    }

    countMascotas() {console.log(this.mascotas.length)}
 
    getBookNames() {console.log(this.libros.titulo)}
}


Usuario.getFullName();
