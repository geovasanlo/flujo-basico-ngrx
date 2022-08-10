export interface Libro {
    id: string;
    volumeInfo: {
        titulo: string;
        autores: Array<string>;
    };
}