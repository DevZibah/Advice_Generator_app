import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import './style/All.css'
import patternMobile from './assets/pattern-divider-mobile.svg'
import patternDesktop from './assets/pattern-divider-desktop.svg'
import dice from './assets/icon-dice.svg'
const App = () => {
  const [advice, setAdvice] = useState([])
  const [loading, setLoading] = useState(true)

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      console.log(response)
      const myAdvice = response.data
      setAdvice(myAdvice)
      setLoading(false)
      console.log(advice);
    })
  }
  useEffect(() => {
    getAdvice()
  }, [])
  // console.log(advice.slip.id);
  return (
    <div className='App'>
      {loading === false && (
        <Fragment>
          <div className='small'>
            <small> advice #{advice.slip.id}</small>
          </div>
          <div className='lorem'>
            <p>
              {advice.slip.advice}
            </p>
          </div>
          <div className='pause'>
            <source media='(min-width:768px)' srcSet={patternDesktop} />
            <img src={patternMobile} alt='divider' />
          </div>
          <div className='dice'>
            <img onClick={getAdvice} src={dice} alt='Dice' />
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default App
