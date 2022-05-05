import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './seedColors';
import SingleColorPalette from './components/SingleColorPalette';
import { Routes, Route } from 'react-router-dom';

function App() {
  const findPalette = id => seedColors.find(palette => palette.id === id);

  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id" element={<Palette />} />
      <Route exact path='/palette/:paletteId/:colorId' element={<SingleColorPalette />} />
    </Routes>
  );
}

export default App;
