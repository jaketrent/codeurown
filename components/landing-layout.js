export default props =>
  <div className="landing">
    {props.children}
    <style jsx>{`
      .landing {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      }
    `}</style>
  </div>
