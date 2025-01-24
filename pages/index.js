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
          <p className={styles.maintext}>I'm currently a full-time <strong>Android Mobile Developer</strong> at 
          <a href="https://www.grindr.com/" className={styles.riis}><em> Grindr</em></a>, where I help bring new features to the app as part of the Android Development team. I joined Grindr in April 2024 as the youngest hire on the team after graduating early from the University of Chicago with a 3.7 GPA, earning a degree in Economics and Computer Science.</p>
          <p className={styles.maintext}>During my time at <strong>Grindr</strong>, I’ve continued to build on my passion for mobile development by contributing to high-impact features and collaborating closely with cross-functional teams to deliver innovative features that improve the user experience.</p>
          <p className={styles.maintext}>While at the <strong>University of Chicago</strong>, I was deeply involved in various activities beyond academics. I was a student-athlete playing Varsity Baseball, where I earned All-Conference honors. Additionally, I served on the executive board of my fraternity, Psi Upsilon, as Treasurer, where I managed, organized, and oversaw all financial aspects of the organization.</p>
          <p className={styles.maintext}>In the Summer of &apos;23 I had the opportunity to work as an <strong>Android Platform Engineer Intern</strong> at 
          <a href="https://www.grindr.com/" className={styles.riis}><em> Grindr</em></a>; during my time there I was actively working with and uploading code in production. I modernized the analytics infrastructure by integrating a deprecated analytics class with the current version, optimizing it through my understanding of dependency injection and MVVM. Additionally, I led a significant project involving in-depth research, a complete redesign, and diligent testing to introduce a robust circuit breaker mechanism to enhance our application&apos;s dependability.</p>
          <p className={styles.maintext}>Before Grindr, during the summer of &apos;22, I previously worked as a <strong>Software Engineer Intern</strong> at <a href="https://riis.com/" className={styles.riis}><em>RIIS LLC</em></a>, developing applications specific to commerical drones!</p>
          <p className={styles.maintext}>Although I am not actively seeking full-time positions, I am always open to exploring new opportunities, collaborations, and networking.</p>
          <p className={styles.maintext}> My projects are below &#x2935; </p>

        <ul className={styles.Head}>
        <li><span className={styles.textLink}><a href="https://www.youtube.com/watch?v=zpC8Tb44zxA&t=1s"> <em>iOS War Card Game</em></a></span></li>
          <li><span className={styles.textLink}><a href="https://www.youtube.com/watch?v=BjOdJLOV0KY"> <em>Changing Drone Flight Modes Project</em></a></span></li>
          <li><span className={styles.textLink}><a href="https://www.youtube.com/shorts/k6rhUs8MbY0"> <em>iOS Mario App</em> </a></span></li>
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
