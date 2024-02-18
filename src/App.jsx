
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";




function App() {
  return (
    <div>
       <h1 className="flex justify-center items-center bg-green-400 p-2 text-sm text-white" >FREE SHIPPING FOR ALL ORDERS OVER $100</h1>
       <Navbar/>
       <MainPage/>
       
    </div>
  );
}

export default App;
