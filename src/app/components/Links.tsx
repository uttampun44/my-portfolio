 'use client'

import Link from "next/link"

interface linkProps {
   name?:string,
   href:string,
   className:string
}

 const Links:React.FC <linkProps>= ({name, href, className}) =>{
    return(
        <>
         <Link href={href} className={className} >{name}</Link>
        </>
    )
 }

 export default Links