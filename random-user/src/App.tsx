import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="bg-[url('./assets/bgleaf.svg')] bg-leafbackgroudcolor bg-cover bg-center min-h-screen w-full">
      <div className="flex items-center justify-center h-screen">
        <Card />
      </div>
    </div>
  );
}

export default App;
