import React from 'react';
import Nav from './Nav';

const Main = (props) => {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <p>Main.js Rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    );
  }

export default Main;
