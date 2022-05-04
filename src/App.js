import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './seedColors';
// import { generatePallete } from './colorHelpers';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id" element={<Palette />} />
      <Route exact path='/palette/:paletteId/:colorId' element={<h1>Test</h1>} />
    </Routes>
  );
}

export default App;
