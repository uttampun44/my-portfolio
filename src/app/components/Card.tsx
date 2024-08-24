   'use client'

import Link from "next/link"
import { ReactNode } from "react"
 

interface cardProps{
    title?:string,
    description:string,
    className:{
      heading?:string,
      paragraph?:string
    },
  children:ReactNode,
  link?:string,
  linkName?:string
}

const Card:React.FC<cardProps> = ({children, title, description, className={}, link, linkName}) =>{

  const heading = className.heading || '';
  const paragraph = className.paragraph || '';

 

    return(
        <>
        <div className="cardContainer grid gap-y-2 py-4 justify-center ">
             {children}
              <div className="title">
               <h5 className={heading}>{title}</h5>
              </div> 
              <div className="description">
                 <p className={paragraph}>{description}</p>
              </div>

        </div>
        </>
    )
   }
   export default Card