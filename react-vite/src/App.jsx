import Button from './components/elements/Button';
import CButton from './components/elements/CButton';
import FButton from './components/elements/FButton';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      <div className="flex gap-x-2">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Manual BTN
        </button>
        <CButton></CButton>
        <FButton></FButton>
        <Button></Button>
        <Button variant="bg-yellow-700" text="Login"></Button>
        <Button variant="bg-red-700">Reset</Button>
      </div>
    </div>
  );
}

export default App;
