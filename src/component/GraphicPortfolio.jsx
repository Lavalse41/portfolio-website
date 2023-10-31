function GraphicPortfolio() {
  return (
    <div className="wrapper-port">
      {portfolio.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item.img.src}
              alt={item.img.alt}
              height="350"
              width="350"
            ></img>
            <p className="text">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GraphicPortfolio();
