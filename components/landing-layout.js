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
      <Block color="red" />
      <Block color="yellow" />
      <Block color="blue" />
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
        display: flex;
        width: 100%;
      }
    `}</style>
  </div>
