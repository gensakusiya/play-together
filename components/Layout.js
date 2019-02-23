import React from "react";

import styleVar from './styles/variables';

const Layout = props => (
  <div className="layout">
    <h1>Play together</h1>

    {props.children}

    <style jsx>{`
      .layout {
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 1024px;
      }
    `}</style>
    <style global jsx>{`
      html {
        color: ${styleVar.elColors.font};
        background-color: ${styleVar.colors.white};
        height: 100%;
        line-height: 1.15;
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;

        position: relative;
        min-height: 100%;
        line-height: 1.65;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: ${styleVar.font.size.default};
        font-weight: ${styleVar.font.weight.default};
        min-width: 320px;
        direction: ltr;
      }
    `}</style>
  </div>
);

export default Layout;
