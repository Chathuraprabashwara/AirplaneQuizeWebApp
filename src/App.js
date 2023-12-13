import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import ModulePage from './pages/ModulePage';
import SubCategory from './pages/SubCategory';

function App() {
	return (
		// <div class="glass-container">
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/home"
				element={<Home/>}
			/>
      	<Route
				path="/module/:moduleName"
				element={<ModulePage />}
			/>
			<Route
				path="/subcategory/:id"
				element={<SubCategory />}
			/>
      </Routes>
		// </div>
	);
}

export default App;
