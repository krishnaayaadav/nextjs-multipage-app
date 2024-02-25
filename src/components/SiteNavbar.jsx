'use client';
import Link from 'next/link';
import nav_style from '@/css/SiteNavbar.module.css';

function SiteNavbar(){

    return(
        <div className="row">
            <div className={nav_style.topnav}>
                    <Link href={'/'} className={nav_style} >Home</Link>
                    <Link href={'/abouts'} className={nav_style} >About Us</Link>
                    <Link href={'/contact'} className={nav_style} >Contact US</Link>
                    <Link href={'/services'} className={nav_style} >Services</Link>
                    <Link href={'/blogs'} className={nav_style} >Blogs </Link>
            </div>
        </div>
    )
}

export default SiteNavbar