import "./App.css";
import leaf from "/leaf.png";

function App() {
  return (
    <>
      <div className="">
        <img
          className="bg-leafbackgroudcolor bg-cover bg-center h-screen w-full"
          src={leaf}
          alt="Image of Leaf"
        />
      </div>
    </>
  );
}

export default App;
