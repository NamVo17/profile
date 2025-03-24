import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" enableSystem>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App

