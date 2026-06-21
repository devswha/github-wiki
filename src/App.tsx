import type { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { WikiShell } from "./components/WikiShell";
import { ActivityPage } from "./pages/ActivityPage";
import { ArticlePage } from "./pages/ArticlePage";
import { CategoryPage } from "./pages/CategoryPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function AppRoutes(): ReactElement {
  return (
    <WikiShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recent-changes" element={<ActivityPage kind="changes" />} />
        <Route
          path="/recent-discussions"
          element={<ActivityPage kind="discussions" />}
        />
        <Route path="/w/category/*" element={<CategoryPage />} />
        <Route path="/w/*" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </WikiShell>
  );
}

export function App(): ReactElement {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
