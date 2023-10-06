import './App.css';
import PricingComponent from './components/PricingComponent';

function App() {
  return (
    <div className="container">
      <div className='header'>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>

      </div>
      <PricingComponent />
      <div className='attribution'>
        <p> Challenge by Frontend Mentor. </p>
        Coded by <a href="https://github.com/luisamlopez">Luisa López</a>.

      </div>
    </div>
  );
}

export default App;
