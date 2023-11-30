// import logo from './logo.svg';
import './App.css';
import LoanTypeSelector from './Components/LoanTypeSelector';
import Products from './Components/Product/Products';


function App() {
  return (
    <div className="App">
     <LoanTypeSelector/>
     <Products/>
    </div>
  );
}

export default App;
