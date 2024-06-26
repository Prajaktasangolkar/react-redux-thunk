import './App.css'
import {Provider} from 'react-redux';
import store from './redux/store.js'
import {News}  from './components/News.jsx';
function App() {

  return (
    <>
     <Provider store={store}>
      <div>
        <h1>News App</h1>
        <News/>
      </div>
      </Provider>
    </>
  )
}

export default App

//store set up -- data will come and available for action
// Store setup ->App.js(store)(inside app.js store wants to available)->News()  (make component of news and subscribe this store inside this)
