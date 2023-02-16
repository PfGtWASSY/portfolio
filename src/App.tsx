import React from 'react';
import './App.css';
import profile from './images/sunset.jpeg';
import calorieConsumptionCalculator from './images/calorie-consumption-calculator.jpeg';
import portfolio from './images/portfolio.jpeg';


const App = () => {
  
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
                  こんにちは。システムエンジニアのわっしーと申します。１９９６年生まれの２６歳で、社会人４年目になります。<br/>
                  新卒で商社に入社して営業を経験しましたが、０からモノを作る仕事がしたいと思い、転職を決意しました。<br/>
                  プログラミングの勉強と転職活動を合わせて半年間行った後、２年半前にSIerの会社に入社し、<br/>
                  QA業務やWeb系の開発を経て現在は単体テストの実装を中心に仕事を行っています。
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
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>CSS3</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>QA</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Typescript</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>React</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Node.js</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Git</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Java</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Ruby</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Firestore</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Oracle</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Postman</td>
                    <td>★★☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Material UI</td>
                    <td>★☆☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Chakra UI</td>
                    <td>★☆☆☆☆</td>
                  </tr>
                  <tr>
                    <td scope='row'>Figma</td>
                    <td>★☆☆☆☆</td>
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
                  <p className='product-caption-title'><a className='url-link' href=''>ポートフォリオ</a></p>
                  <p className='product-caption-explanation'>自分のポートフォリオです。</p>
                  <p className='product-caption-tool'>Typescript/React/HTML/CSS</p>
                </figcaption>
              </figure>

              <figure className='product-item'>
                <img className='product-image' src={calorieConsumptionCalculator} alt='' />
                <figcaption className='product-caption'>
                  <p className='product-caption-title'><a className='url-link' href=''>筋トレ消費カロリー計算アプリ</a></p>
                  <p className='product-caption-explanation'>筋トレと時間と体重を入力すれば、消費したカロリーを計算します。</p>
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
              ご意見、ご感想、ご依頼など、お気軽にご連絡頂ければ幸いです。心よりお待ちしております。<br/>
              keiichi_washino@mforce.co.jp<br/>
              080-7376-2287
            </p>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className='footer'>
        <div className='copyright'>&copy;Copyright © 2023 WASSY All Right Reserved.</div>
      </footer>
    </div>
  );
}

export default App;
