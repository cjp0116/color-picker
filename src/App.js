import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePallete } from './colorHelpers';

function App() {
  const test = generatePallete(seedColors[4])
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ test", test)
  return (
    <div className="App">
      <Palette palette={seedColors[4]} />
    </div>
  );
}

export default App;
