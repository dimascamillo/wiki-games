import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { CallOfDragons } from "./pages/Category/callOfDragons";
import { Category } from "./pages/Category";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/characters" element={<Characters />} />
      </Route>

      <Route path="/category" element={<DefaultLayout />}>
        <Route path="/category/callofdragons" element={<CallOfDragons />} />
      </Route>
    </Routes>
  );
}
