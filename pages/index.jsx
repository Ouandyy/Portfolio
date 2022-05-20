import styles from '../styles/Index.module.scss';
import me from '../assets/profile.jpeg';
import Img from 'next/image';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <article className={styles.introArticle}>
          <p className={styles.hello}>
            Hello, my name is
          </p>
          <h2 className={styles.name}>
            Andy Ou
          </h2>
          <h1>
            {'I am a software engineer </>'}
          </h1>
        </article>
        <figure className={styles.introAside}>
          <div className={styles.imgCont}>
            <Img src={me} height='100%' width='100%' />
          </div>
          <figcaption>asdf</figcaption>
        </figure>
      </section>
    </main>
  )
}

export default HomePage