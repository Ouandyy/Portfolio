import styles from '../styles/Nav.module.scss';

const navList = ['Home', 'Contact', 'Info', 'About Me']
const otherLink = ['https://github.com/Ouandyy', 'https://www.linkedin.com/in/andy-ou-16a460183/', 'ouandyy@gmail.com'];
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h3><a href="/">Andy Ou</a></h3>
      <ul>
        {navList.map((li, i) => {
          let data = i === 0 ? '/' : `#${li.toLocaleLowerCase().split(' ').join('')}`
          return (

            <li>
              <a href={data} id={data}>{li}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav