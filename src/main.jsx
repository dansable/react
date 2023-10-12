import ReactDOM from 'react-dom/client';
import {RestaurantsPage} from "./pages/restaurants/component.jsx";

import 'normalize.css';
import './index.scss';
import {ThemeProvider} from "./contexts/theme.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RestaurantsPage/>
  </ThemeProvider>
)
