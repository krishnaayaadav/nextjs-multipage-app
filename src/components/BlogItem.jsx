'use client';
import Image from "next/image";
import Link from "next/link";


export default  function BlogItem({blogItem}){

    return(
            <div className="card">
                <div className="card-body">
                    <Image src={blogItem.image} height={900} width={900}></Image>
                    <h5 className="card-title">{blogItem.title}</h5>
                    <p className="card-text">{blogItem.description} .</p>
                    <Link href={`blogs/details/${blogItem.id}`} className="btn btn-primary" >Read more</Link>
                </div>
            </div>

       
    )
}