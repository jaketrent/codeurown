export default _ =>
  <style global jsx>{`
    @font-face {
      font-family: 'Gobold-Regular';
      src: url('/static/type/gobold-regular.otf') format('opentype');
    }
    * {
      box-sizing: border-box;
    }
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      background-color: #fff;
      color: #636363;
      font-size: 16px;
    }
    h1,
    h2,
    h3 {
      font-family: "Gobold-Regular", sans-serif;
      font-weight: 100;
      color: blue;
      margin: 0;
    }
    a {
      display: inline-block;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px dashed #889f1e;
      margin-bottom: 2px;
      cursor: pointer;
    }
    a:hover {
      border-bottom: none;
      color: #889f1e;
      border-bottom: 1px solid #889f1e;
    }
    ol {
      margin: 0;
      padding: 0;
    }
    p {
      line-height: 30px;
    }
    iframe {
      max-width: 100%;
    }
    input[type=button],
    input[type=submit],
    button {
      cursor: pointer;
    }
    @media screen and (min-width: 426px) {
    }
    @media screen and (min-width: 769px) {
      html,
      body {
        font-size: 18px;
      }
    }
    @media screen and (min-width: 1441px) {
      html,
      body {
        font-size: 22px;
      }
    }
  `}</style>
