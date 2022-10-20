import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Item from "./components/Item";
import Search from "./components/Search";



function App() {

  const handleSubmit = ({ e, history, searchInput }) => {
    console.log({ e, history, searchInput })
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);

  }

  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route
            render={props => (
              <Header
                handleSubmit={handleSubmit}
                history={props.history}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/mountain" />}
            />
            <Route 
            path="/mountain"
            render={()=><Item searchTerm = "mountain"/>}/>
            <Route 
            path="/beach" 
            render={()=><Item searchTerm= "beach"/>}
            />
             <Route 
            path="/bird" 
            render={()=><Item searchTerm= "bird"/>}
            />
             <Route 
            path="/food" 
            render={()=><Item searchTerm= "food"/>}
            />
             <Route 
            path="/search/:serchInput" 
            render={props=><Search searchTerm= {props.match.params.serchInput}/>}
            />
            <Route Component= {NotFound}/>
          </Switch>


        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
