import React, { useEffect } from "react"
import { getSideNews } from '../../lib/api'
import styles from '../../styles/BlogTest.module.scss'

const Sidebar = () =>(
      
    <>
        <div className={styles.wrapper}>
            <div className={styles.trending}>
                <h2>Trending Now</h2>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    <p>Posted 2hrs</p>
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    <p>Posted 5hrs</p>
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    <p>Posted 14hrs</p>
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    <p>Posted 18hrs</p>
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    <p>Posted 22hrs</p>
                    
                </div>
               

            </div>
            <div className={styles.hottopics}>
                <h2>Hot Topics</h2>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                
                    
                </div>
                <div className={styles.trending_content}>
                    <hr></hr>
                    <h5>Voluptatibus nemo est asperiores galisum sit sint illum ab galisum cupiditate et doloremque fugiat.</h5>
                    
                    
                </div>
            </div>

        </div>
    </>
)
export default Sidebar


