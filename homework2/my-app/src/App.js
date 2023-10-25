// import logo from './logo.svg';
import './App.css';
import Card from './Card';
import data from './data';
import Cube from './randomCube';
import BottomImage from './bottomImage';
// import,Card
function App() {
  return (
    <div className="App">
      <h1 className="h1InApp">React Components</h1>
      <header className="header">
    {data.map((card)=>(
                <Card
                title={card.title}
                content={card.content}
                picture={card.picture}
              />
    ))}
      </header>
      <div className="divForCube">
  {Array(5).fill().map((row) => (
    <Cube title={row} />
  ))
  }
  <BottomImage/>
</div>

    </div>
  );
}

export default App;
