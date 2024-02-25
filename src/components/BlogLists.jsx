'use client'

import BlogItem from './BlogItem';

export default function BlogList({blogslist} ){
    return(
        <>
          <h2>All Blogs</h2>
          {
            blogslist.map( item => (
              <BlogItem key={item.id} blogItem={item} />
            ) )
          }
        </>
    )
}