import { MouseEventHandler } from "react";
import { twMerge } from 'tailwind-merge';


function Button({text ,onclick,className,...rest}) {
  return (
    <button onClick={onclick} className={twMerge('hover:scale-110 btn-primary',className)} {...rest} >{text}</button>
  )
}

export default Button