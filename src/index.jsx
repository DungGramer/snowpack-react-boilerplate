import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TestView from './test-view.jsx'

render(
<React.StrictMode>
  <Router>
    <Switch>            
      <Route path="/">            
        <TestView />            
      </Route>                    
    </Switch>      
  </Router>
</React.StrictMode>,
document.getElementById('root')
)


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}