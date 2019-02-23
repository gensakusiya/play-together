export default ({ data, renderItem }) => {
  const html = data.map(item => renderItem(item));

  return (
    <div className="wrap">
      {html}

      <style jsx>{`
        .wrap {
          display: flex;
          justify-content: start;
          flex: 1;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
