import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>Noah&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8"></meta>
      </Head> 

      <div className={styles.main1}>

        <div className={styles.circle}>
          <Image className={styles.me} src="/me.jpg" width={110} height={110} alt="me" />
        </div>


        <p>Hi! I&apos;m Noah &#x1F44B;</p>
          <p className={styles.maintext}>I&apos;m a Senior student-athlete at The University of Chicago, studying Economics and Computer Science, alongside playing Varsity Baseball {"("} 
          <a className={styles.baseball} href="https://athletics.uchicago.edu/sports/bsb/2021-22/bios/nelson_noah_c85d"><em>check me out!</em></a>{")"} I&apos;m also the treasurer of Psi Upsilon!</p>
          <p className={styles.maintext}>Summer &apos;23 I had the opportunity to work as an <strong>Android Platform Engineer Intern</strong> at 
          <a href="https://www.grindr.com/" className={styles.riis}><em> Grindr</em></a>, during my time there I was actively working with and uploading code in production. I modernized the analytics infrastructure by integrating a deprecated analytics class with the current version, optimizing it through my understanding of dependency injection and MVVM. Additionally, I led a significant project involving in-depth research, a complete redesign, and diligent testing to introduce a robust circuit breaker mechanism to enhance our application&apos;s dependability.</p>
          <p className={styles.maintext}>Before Grindr, I previously worked as a <strong>Software Engineer Intern</strong> at <a href="https://riis.com/" className={styles.riis}><em>RIIS LLC</em></a>, where I developed applications specific to commerical drones!</p>
          <p className={styles.maintext}>I&apos;m actively seeking full-time positions, my projects are below &#x2935; </p>

        <ul className={styles.Head}>
          <li><span className={styles.textLink}><a href="https://www.youtube.com/watch?v=BjOdJLOV0KY"> <em>Changing Drone Flight Modes Project</em></a></span></li>
          <li><span className={styles.textLink}><a href="https://www.youtube.com/shorts/k6rhUs8MbY0"> <em>Click here for the app I built in High School</em> </a></span></li>
        </ul>



        <p className={styles.inTouch}>Let&apos;s get in touch &#x2935; </p>
         
          <div>
            <ul>
              <li><span className={styles.textLink}><a className={styles.link} href="https://www.linkedin.com/in/nnelson10/" target="_blank" rel="noreferrer"><em>LinkedIn</em></a></span></li>
              <li><span className={styles.textLink}><a className={styles.link} href="https://twitter.com/noahnellyy" target="_blank" rel="noreferrer"><em>Twitter</em></a></span></li> 
              <li><span className={styles.textLink}><a className={styles.link} href="https://read.cv/noahnellyy" target="_blank" rel="noreferrer"><em>ReadCV</em></a></span></li>
            </ul>
         </div>

  
      </div>
      <div className={styles.bottomImages}>
        <Image className={styles.grindr} src="/download-3.jpg" width={300} height={168} alt="Grindr" />
        <div className={styles.imageSpace}></div>
        <Image className={styles.riis} src="/riis.jpg" width={168} height={168} alt="RIIS" />
      </div>
      
    </div>
  )
}
