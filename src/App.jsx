import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App({resumeInfo}) {
  return (
    <div className="app">
      <Main resumeInfo={resumeInfo} />
      <Sidebar resumeInfo={resumeInfo} />
    </div>
  )
}

export default App
