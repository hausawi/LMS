import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ListContextProvider from './ListContext.jsx';
import { AppContextProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AppContextProvider>
			<ListContextProvider>
				<App />
			</ListContextProvider>
		</AppContextProvider>
	</BrowserRouter>,
);
