export default props =>
  <div className="landing">
    <div className="inner">
      {props.children}
    </div>
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
    `}</style>
  </div>
