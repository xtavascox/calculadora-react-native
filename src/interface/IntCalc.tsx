export interface Props{
    texto:string,
    color?:string,
    btnAncho?:boolean,
    action:(numeroTexto:string)=>void
}