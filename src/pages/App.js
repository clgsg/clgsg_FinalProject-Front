import Homepage from './homepage/index.js'
import {withRouter} from 'react-router-dom';


function App({ Component, pageProps }) {
  return (
    <>
      <h1>Main App</h1>
      <Homepage/>
    </>
  )
}

export default withRouter(App)
