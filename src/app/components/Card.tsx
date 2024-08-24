   'use client'

import { ReactNode } from "react"

interface cardProps{
    title?:string,
    description:string,
  children:ReactNode
}

const Card:React.FC<cardProps> = ({children, title, description}) =>{
    return(
        <>
        <div className="cardContainer max-w-[352px]">
             {children}
              <div className="title">
               <h5>{title}</h5>
              </div> 
              <div className="description">
                 <p>{description}</p>
              </div>

        </div>
        </>
    )
   }
   export default Card