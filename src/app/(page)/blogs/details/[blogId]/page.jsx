'use client';

import { useEffect, useState } from "react";

function BlogDetailPage({params}){
    const [details, setDetails] = useState([]);
    let url = 'http://blogsapi.pythonanywhere.com/blogs/api/blogs/' +params.blogId

    useEffect( ()=> {

        fetch(url)
          .then( res => res.json() )
          .then( data => {
            if(!data.not_found){
                setDetails(data)
            }
          } )
    }, [details.length] )
    console.log(details)
    return(
        <>
          <h1>Blog Detail Page</h1>
          <div className="">
            {
                details.length > 0 ? 

                <div className="">
                    Id: {details.id} <br />
                    Category: {details.category} <br />
                    Created: {details.created}   <br />
                    Title: {details.title} <br />
                    Description: {details.description}  <br />
            

                </div>
                 : <h3 className="mt-5">No Blog found 404</h3>
            }

          </div>
        </>
    )
}

export default BlogDetailPage