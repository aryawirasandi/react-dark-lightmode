import { useState, Suspense } from "react";
import routes from "./routes"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ThemesContext } from "./context";

const App = () => {
  const [darkValue, setDarkValue] = useState(false);
  function triggerDarkLight(){
    setDarkValue(!darkValue)
  }
  return (
    <div>
     <ThemesContext.Provider value={{ darkValue }}>
        <Suspense loading={<p>loading....</p>}>
        <Navbar onClick={triggerDarkLight}/>
        <Switch>
          { routes.map((route, i) => {
            const { path, isExact, components } = route;
            if(isExact){
              return(
                <Route path={path} exact={isExact} key={i} component={components}/>
              )
            }else{
              return(
                <Route {...route} key={i} component={components}/>
              )
            }
          })}
        </Switch>
        </Suspense>
     </ThemesContext.Provider>
    </div>
  )
}

export default App;