import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>Noah's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8"></meta>
      </Head> 

      <div className={styles.main1}>

        <div className={styles.circle}>
          <Image className={styles.me} src="/me.jpg" width={110} height={110} alt="me" />
        </div>


        <p>Hi! I'm Noah &#x1F44B;</p>
          <p className={styles.maintext}>I'm a Junior student-athlete at The University of Chicago, studying Economics and Computer Science, alongside playing Varisty Baseball {"("} 
          <a className={styles.baseball} href="https://athletics.uchicago.edu/sports/bsb/2021-22/bios/nelson_noah_c85d"><em>check me out!</em></a>{")"} I'm also a member of Psi Upsilon!</p>
          <p className={styles.maintext}>I currently am a Software Engineer Intern at <a href="https://riis.com/" className={styles.riis}><em>RIIS LLC</em></a>, where I develop applications specific to commerical drones!</p>
        <p className={styles.maintext}>I'm open to Summer &apos;23 opportunities, my projects are below &#x2935; </p>

        <ul className={styles.Head}>
          <li><span className={styles.textLink}><a href="https://www.youtube.com/watch?v=BjOdJLOV0KY"> <em>Changing Drone Flight Modes Project</em></a></span></li>
          <li><span className={styles.textLink}><a href="https://www.youtube.com/shorts/k6rhUs8MbY0"> <em>Click here for the app I built in High School</em> </a></span></li>
        </ul>



        <p className={styles.inTouch}>Let's get in touch &#x2935; </p>
         
          
          <div>
            <ul>
              <li><span className={styles.textLink}><a className={styles.link} href="https://twitter.com/noahnellyy" target="_blank" rel="noreferrer"> <em>Twitter</em></a></span></li> 
              <li><span className={styles.textLink}><a className={styles.link} href="https://www.linkedin.com/in/nnelson10/" target="_blank" rel="noreferrer"><em> LinkedIn</em></a></span></li>
              <li><span className={styles.textLink}><a className={styles.link} href="https://read.cv/noahnellyy" target="_blank" rel="noreferrer"><em> ReadCV</em></a></span></li>
            </ul>
         </div>

  
      </div>
    </div>
  )
}
