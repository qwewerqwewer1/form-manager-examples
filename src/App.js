import Form from './components/Form/Form';
import './App.css'
import coffeeWallpaper from './images/Coffee.jpg'

const stylesObj = {
  backgroundImage: `url(${coffeeWallpaper})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

function App() {
  return (
    <div className="App" style={stylesObj}>
      <Form />
    </div>
  );
}

export default App;
