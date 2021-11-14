import logoAsset from '../assets/logo.png'
import styles from '../jss/navbar'
export default function Navbar()
{
    return(
        <div style={styles.container}>
            <img src={logoAsset} style={styles.img}/>
            <div style={styles.title} className="title">git<span style={styles.details}>details</span></div>
        </div>
    )
}