// TODO: We will go over what these import statements are
// doing in a seperate class
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Part B Exercise code below
const Logo = () => {
  return (<h1>🧇 Waffle On</h1>);
};
const NavMenu = () => (
  <>
    <ul class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="tel:+64210000000" class="nav-link">Call Us</a>
        </li>
        <li class="nav-item">
          <a href="mailto:order@waffle.on?subject=order" class="nav-link">Email</a>
        </li>
      </ul>
  </>
);
const WafflesMenu = () => {
  return (
  <>
  <h4>Waffles</h4>
  <ul>
  <StrawberryWaffleMenuItem />
  <BlueberryWaffleMenuItem />
  <FriedChickenWaffleMenuItem />
  </ul>
  </>
  );
};
const StrawberryWaffleMenuItem = () => {
  return (
    <li>
      <p>Strawberry waffles - $10</p>
      <p>
        <img src="/waffles-strawberry.jpg" alt="Waffles" width="50%" />
      </p>
    </li>
  );
};
const BlueberryWaffleMenuItem = () => {
  return (
    <li>
    <p>Blueberry waffles - $11</p>
    <p>
      <img src="/waffles-blueberry.jpg" alt="Blueberry waffles" width="50%" />
    </p>
  </li>
  );
};
const FriedChickenWaffleMenuItem = () => {
  return (
    <li>
    <p>Fried chicken waffles - $12</p>
    <p>
      <img src="/waffles-chicken.jpg" alt="Fried chicken waffles" width="50%" />
    </p>
  </li>
  );
};
const BeverageMenu = () => {
  return (
    <>
      <h4>Beverages</h4>
        <ul>
          <li>
            <p>Coffee - $4</p>
            <p>
              <img src="/coffee.jpg" alt="Coffee" width="50%" />
            </p>
          </li>
          <li>
            <p>Orange juice - $3</p>
            <p>
              <img src="/orange-juice.jpg" alt="Orange juice" width="50%" />
            </p>
          </li>
        </ul>
    </>
  )
}
function Homepage() {
  return (
    <div class="container">
      <Logo />
      <NavMenu />
      <article class="homepage">
        <h2>Waffle you like to order?</h2>
        <p>Come on in and get your waffle of fitness.</p>

        <h3>Menu</h3>
        <WafflesMenu />
        <BeverageMenu />
      </article>

      <footer class="footer">
        Created by the Waffle On Cooperative, {new Date().getFullYear()}
      </footer>
    </div>
  );
}

ReactDOM.render(
  <Homepage />,
  document.getElementById('root')
);