export interface Products {

    _id: string; // El ID es opcional porque MongoDB lo genera automáticamente
    nombre: string;
    descripcion: string;
    cilindraje: number; 
    motor: string;
    potencia: string; // Puede almacenar "16.5 HP @ 8500 RPM"
    transmision: string;
    peso: number;
    precio: number;
    imagenUrl: string;
    categoria: string;
}