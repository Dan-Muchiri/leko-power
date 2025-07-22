import styles from "./ProjectStyles.module.css"
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon
import dribble from "/proj2.avif"
import project2 from "/proj3.avif"
import sylvestre from "/proj4.avif"
import shepherd from "/proj1.avif"
import asset from "/proj5.avif"
import ready from "/proj6.avif"


function Projects() {
  return (
    <section id='work' className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.titleBlock}>
                    <div className={styles.caption}>Featured Work</div>
                    <p className={styles.leftP1}>Some work we are proud of</p>
                    <p className={styles.leftP}> Our goal is to nurture your vision and provide innovative, custom solutions for all your solar needs.</p>
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.heading}>Featured Projects</p>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectList}>
                        <div className={styles.item}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={dribble} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                    <div className={styles.workTitle}>
                                        <p className={styles.featuredcap}>Solar</p>
                                        <div className={styles.workSubTitle1}>
                                            <p className={styles.workSubTitleP1}>Residential Solar Installation</p>
                                            <p className={styles.workSubTitleP2}>Design and Deployment of Rooftop Solar Energy Systems</p>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={project2} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workTitle}>
                                    <p className={styles.featuredcap}>Solar</p>
                                    <div className={styles.workSubTitle1}>
                                        <p className={styles.workSubTitleP1}>Inverter Solutions</p>
                                        <p className={styles.workSubTitleP2}>Installation and Configuration of Solar Inverters for Efficient Power Conversion</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item3}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={sylvestre} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                <div className={styles.workTitle}>
                                    <p className={styles.featuredcap}>Solar</p>
                                    <div className={styles.workSubTitle1}>
                                        <p className={styles.workSubTitleP1}>Solar Carpark</p>
                                        <p className={styles.workSubTitleP2}>Installation of Solar-Powered Car Park</p>
                                    </div>
                                </div>
                            </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.item4}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={shepherd} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                <div className={styles.workTitle}>
                                    <p className={styles.featuredcap}>Solar</p>
                                    <div className={styles.workSubTitle1}>
                                        <p className={styles.workSubTitleP1}>Inverter Solutions</p>
                                        <p className={styles.workSubTitleP2}>Installation and Configuration of Solar Inverters for Efficient Power Conversion</p>
                                    </div>
                                </div>
                            </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.item5}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={asset} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                    <div className={styles.workTitle}>
                                        <p className={styles.featuredcap}>Solar</p>
                                        <div className={styles.workSubTitle1}>
                                            <p className={styles.workSubTitleP1}>Residential Solar Installation</p>
                                            <p className={styles.workSubTitleP2}>Design and Deployment of Rooftop Solar Energy Systems</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item6}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={ready} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                    <div className={styles.workTitle}>
                                        <p className={styles.featuredcap}>Solar</p>
                                        <div className={styles.workSubTitle1}>
                                            <p className={styles.workSubTitleP1}>Residential Solar Installation</p>
                                            <p className={styles.workSubTitleP2}>Design and Deployment of Rooftop Solar Energy Systems</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects