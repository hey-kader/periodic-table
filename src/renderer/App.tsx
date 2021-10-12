import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Cell from './Cell.jsx'

const Hello = () => {
  return (
      <>
      <div className="Hello">
          <h1>hello class...</h1>
      </div>
          <Start />
      </>
  );
};

const Start = () => {

  return (
      <div className="Start">
          <button>start</button>
      </div>
  );
};

export default function App() {
  return (
    <main>
        <Router>
          <Switch>
            <Route path="/" component={Hello} />
          </Switch>
        </Router>
        <div id="period">
            <table>
               
            <td>
                <Cell />
            </td>
            <td>
                <Cell />
                <Cell />
                <Cell />
            </td>
            <td>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </td>
            
            <td>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </td>

            <td>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </td>

            <td>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </td>

            <td>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </td>
            </table>
            
        </div>

    </main>
  );
}
