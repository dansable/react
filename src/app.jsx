import {ThemeProvider} from "./contexts/theme.jsx";
import {RestaurantsPage} from "./pages/restaurants/component.jsx";
import {Provider} from "react-redux";

import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RestaurantsPage/>
      </ThemeProvider>
    </Provider>
  );
};
