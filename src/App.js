import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePallete } from './colorHelpers';

function App() {
  // const test = generatePallete(seedColors[4])
  return (
    <div className="App">
      <Palette palette={generatePallete(seedColors[4])} />
    </div>
  );
}

export default App;
