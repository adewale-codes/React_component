import './App.css';
import num4 from "./images/12.jpg"
import num5 from "./images/13.jpg"
import num6 from "./images/14.jpg"
const App = () => {
  return (
    <div className='box-container'>
      <div className='box'>
        <img src={num5} alt="" />
        <div className=''>
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='box'>
        <img src={num4} alt="" />
        <div className=''>
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='box'>
        <img src={num5} alt="" />
        <div className=''>
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='box'>
        <img src={num4} alt="" />
        <div className=''>
          <h2>Womens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='box'>
        <img src={num5} alt="" />
        <div className=''>
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='box'>
        <img src={num6} alt="" />
        <div className=''>
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default App;
