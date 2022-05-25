import { HashRouter , Route , Routes } from 'react-router-dom'
import { Form } from './component/form/form';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path={'/'} element={<Form/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
