import './App.css';
import profile from './images/sunset.jpeg';
import calorieConsumptionCalculator from './images/calorie-consumption-calculator.jpeg';
import portfolio from './images/portfolio.jpeg'
import { useEffect, useState } from 'react'
import iconButton from './images/iconbutton.jpeg'

const PAGE_Y_OFFSET = 200;

const App = () => {
  const ScrollToTop = () => {
    const [show, setShow] = useState<boolean>(false)
  
    const changeShow = () => {
      if (window.pageYOffset > PAGE_Y_OFFSET) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
  
    const onScrollTop = () => {
      window.scroll({ top: 0, behavior: 'smooth' })
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeShow)
      return () => window.removeEventListener('scroll', changeShow)
    }, [])
  
    if (show) {
      return (
        <div className='scroll-to-top'>
          <input type='image' src={iconButton} onClick={onScrollTop} />
        </div>
      )
    } else {
      return null
    } 
  };
  
  return (
    <div className='wrapper'>

      {/* header */}
      <header className='header'>
        <div className='container'>
          <h1 className='header-logo'>
            <a href='.'>WASSY</a>
          </h1>
          <nav className='gnav'>
            <ul className='gnav-list'>
              <li className='gnav-item'><a href='#profile'>Profile</a></li>
              <li className='gnav-item'><a href='#skill'>Skill</a></li>
              <li className='gnav-item'><a href='#products'>Products</a></li>
              <li className='gnav-item'><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className='content'>

        {/* back to top */}
        <div>{ScrollToTop()}</div>

        {/* mv */}
        <div className='mv'>
          <div className='mv-container'>
            <p className='mv-title'>Portfolio</p>
            <p className='mv-subtitle'>produced by WASSY</p>
          </div>
        </div>

        {/* profile */}
        <section className='profile section' id='profile'>
          <div className='container'>
            <h2 className='title'>Profile</h2>
            <div className='profile'>
              <p className='profile-img'>
                <img src={profile} alt='' />
              </p>
              <div className='profile-body'>
                <p>
                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br/>
                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br/>
                  ???????????????????????????????????????????????????????????????????????????????????????????????????SIer????????????????????????<br/>
                  QA?????????Web????????????????????????????????????????????????????????????????????????????????????????????????
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* skill */}
        <section className='skill section' id='skill'>
          <div className='container'>
            <h2 className='title'>Skill</h2>
            <div className='skill-list'>
              <table className='table-borderless'>
                <thead>
                  <tr>
                    <th scope='col'>Skill</th>
                    <th scope='col'>Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope='row'>HTML5</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>CSS3</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>QA</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Typescript</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>React</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Node.js</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Git</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Java</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Ruby</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Firestore</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Oracle</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Postman</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Material UI</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Chakra UI</td>
                    <td>???????????????</td>
                  </tr>
                  <tr>
                    <td scope='row'>Figma</td>
                    <td>???????????????</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* products */}
        <section className='products section' id='products'>
          <div className='container'>
            <h2 className='title'>Products</h2>
            <div className='products'>

              <figure className='product-item'>
                <img className='product-image' src={portfolio} alt='' />
                <figcaption className='product-caption'>
                  <p className='product-caption-title'><a className='url-link' href='https://pfgtwassy.github.io/portfolio/'>?????????????????????</a></p>
                  <p className='product-caption-explanation'>???????????????????????????????????????</p>
                  <p className='product-caption-tool'>Typescript/React/HTML/CSS</p>
                </figcaption>
              </figure>

              <figure className='product-item'>
                <img className='product-image' src={calorieConsumptionCalculator} alt='' />
                <figcaption className='product-caption'>
                  <p className='product-caption-title'><a className='url-link' href='https://pfgtwassy.github.io/calorie-calculator/'>??????????????????????????????????????????</a></p>
                  <p className='product-caption-explanation'>?????????????????????????????????????????????????????????????????????????????????????????????</p>
                  <p className='product-caption-tools'>Typescript/React/HTML/CSS</p>
                </figcaption>
              </figure>

            </div>
          </div>
        </section>

        {/* contact */}
        <section className='contact section' id='contact'>
          <div className='container'>
            <h2 className='title'>Contact</h2>
            <p className='lead'>
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br/>
              keiichi_washino@mforce.co.jp<br/>
              080-7376-2287
            </p>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className='footer'>
        <div className='copyright'>&copy;Copyright ?? 2023 WASSY All Right Reserved.</div>
      </footer>
    </div>
  );
}

export default App;
