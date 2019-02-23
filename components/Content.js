export default props => (
  <div className="content">
    {props.children}

    <style jsx>{`
      .content {
        display: flex;
        flex: auto;

        margin: 20px 0 0 0;
      }
    `}</style>
  </div>
);
