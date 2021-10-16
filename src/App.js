import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Persons from './components/Persons/Persons';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Header></Header>
      <Contents></Contents>
      <Persons></Persons>
      <Card></Card>
    </div>
  );
}

export default App;
