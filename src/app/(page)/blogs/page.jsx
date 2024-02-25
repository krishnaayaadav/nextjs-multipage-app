
import style from '@/css/AboutUs.module.css';


async function getBlogs(){

    let response = await fetch('http://blogsapi.pythonanywhere.com/blogs/api/blogs/')
    return response.json()

}

import BlogList from '@/components/BlogLists';

export default async function BlogsPost(){
    let blogdata = await getBlogs()

    return(
        <> 
          <div className={style.about_section}>
                <h1>Blog Post </h1>
                <BlogList blogslist={blogdata.results}/>
            </div>
         </>
    )
}