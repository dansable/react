import {ThemeProvider} from "./contexts/theme.jsx";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import store from "./redux";
import {Layout} from "./layout/component.jsx";
import {RestaurantsPage} from "./pages/restaurants/component.jsx";
import {HomePage} from "./pages/home/component.jsx";
import {RestaurantPage} from "./pages/restaurants/restaurant/component.jsx";
import {NotFoundPage} from "./pages/not-found/component.jsx";
import {RestaurantIndexPage} from "./pages/restaurants/resturant-index/component.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route path="restaurants" element={<RestaurantsPage/>}>
                <Route index element={<RestaurantIndexPage/>}/>
                <Route path=":id" element={<RestaurantPage/>}/>
              </Route>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
