
import style from '@/css/AboutUs.module.css';

export default function AboutUsPage(){

    return(
        <> 
          <div class={style.about_section}>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
         </>
    )
}