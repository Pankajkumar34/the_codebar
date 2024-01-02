import style from './Button.module.css'
export const ButtonFifty=({btnName}:string | any)=>{
    return(
        <>
        <button className={`${style.button_fifty}`} role="button">{btnName}</button>
        </>
    )
}