export default function Menu() {
  return (
    <section className="menu">
      <h2>Our Favorites</h2>

      <div className="card-list">
        <div className="card">
          <div className="card-emoji">☕</div>
          <h3>classNameNameic Latte</h3>
          <p>Smooth and creamy coffee made with fresh milk.</p>
          <div className="price">$4.50</div>
          <button className="button">Order Now</button>
        </div>

        <div className="card">
          <div className="card-emoji">🥐</div>
          <h3>Fresh Croissant</h3>
          <p>A golden, buttery pastry baked fresh every morning.</p>
          <div className="price">$3.00</div>
          <button className="button">Order Now</button>
        </div>

        <div className="card">
          <div className="card-emoji">🍰</div>
          <h3>Chocolate Cake</h3>
          <p>A rich chocolate dessert for your afternoon break.</p>
          <div className="price">$5.00</div>
          <button className="button">Order Now</button>
        </div>
      </div>
    </section>
  );
}
