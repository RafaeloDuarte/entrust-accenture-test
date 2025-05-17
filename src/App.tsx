import { AppLayout } from "./components/layout/AppLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import { PreferencesProvider } from "@/context/PreferencesContext";

function App() {
  return (
    <PreferencesProvider>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </PreferencesProvider>
  )
}

export default App
