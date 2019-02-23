import styleVar from './styles/variables';

export default ({ item }) => (
  <div className="item">
    {item.name}

    <style jsx>{`
      .item {
        border: 1px solid ${styleVar.colors.light};
        border-radius: ${styleVar.radius.default};

        display: flex;
        align-items: center;
        padding: 12px;
        margin: 6px;
      }
    `}</style>
  </div>
);
