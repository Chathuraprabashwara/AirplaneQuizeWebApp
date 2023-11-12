import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import ModulePage from './pages/ModulePage';

function App() {
	return (
		<div>
      <Routes>
			<Route
				path="/"
				element={<LoadingScreen />}
			/>
			<Route
				path="/home"
				element={<Home />}
			/>
      	<Route
				path="/module/:moduleName"
				element={<ModulePage />}
			/>
      </Routes>
		</div>
	);
}

export default App;
