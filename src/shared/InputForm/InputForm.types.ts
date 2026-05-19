export interface InputForm{
    campo: string, 
    placeholder: string, 
    type: string, 
    required: boolean,
    value: string,
    onChange: (valor: string, campo: string) => void
}