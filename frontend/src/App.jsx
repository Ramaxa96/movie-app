import AppRouters from './components/AppRouters/AppRouters';
import Header from './components/Header/Header'

import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </>
  )
}

export default App