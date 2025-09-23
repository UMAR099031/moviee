import { useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import AppRoutes from "./routes/routes"

const App = () => {
  const location = useLocation()


  const noHeaderRoutes = ["/seats"]


  const hideHeader = noHeaderRoutes.some((path) =>
    location.pathname.startsWith(path)
  )

  return (
    <div className="">
      {!hideHeader && <Header />}
      <AppRoutes />
      <div className="blur-top" />
      <div className="blur-bottom" />
    </div>
  )
}

export default App
