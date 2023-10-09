import ReactDOM from 'react-dom/client';
import {RestaurantsPage} from "./pages/restaurants/component.jsx";

import 'normalize.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <RestaurantsPage/>
  </main>
)
