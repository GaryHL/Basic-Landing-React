import Router from "./router/Router";
import { GlobalStyle } from "./globalStyles/GlobalStyle";
import React from "react";

function App() {
   return (
      <React.Fragment>
         <GlobalStyle />
         <div className="App">
            <Router />
         </div>
      </React.Fragment>
   );
}

export default App;
