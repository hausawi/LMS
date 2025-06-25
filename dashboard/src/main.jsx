import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ListContextProvider from './ListContext.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ListContextProvider>
			<App />
		</ListContextProvider>
	</BrowserRouter>,
);
