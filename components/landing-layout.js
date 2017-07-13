const now = new Date().getFullYear()

const Block = props =>
  <div className="block" style={{ background: props.color }}>
    <style jsx>{`
      .block {
        flex: 1;
        height: 2em;
      }
    `}</style>
  </div>

export default props =>
  <div className="landing">
    <div className="inner">
      {props.children}
    </div>
    <footer className="footer">
      <div className="copyright">
        &copy; {now} Jake Trent |{' '}
        <a href="https://jaketrent.com">jaketrent.com</a>
      </div>
      <div className="blocks">
        <Block color="red" />
        <Block color="yellow" />
        <Block color="blue" />
      </div>
    </footer>
    <style jsx>{`
      .landing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        padding: 2em;
      }
      .inner {
        max-width: 640px;
      }
      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
      }
      .copyright {
        font-size: 0.75em;
        color: grey;
        text-align: right;
        max-width: 640px;
        margin: 0 auto;
        padding: 1em 2.25em;
      }
      .blocks {
        display: flex;
      }
      @media screen and (min-width: 640px) {
        .copyright {
          padding: 1em 0;
        }
      }
    `}</style>
  </div>
