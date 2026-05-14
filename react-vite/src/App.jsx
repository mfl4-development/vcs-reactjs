import React from 'react';
class CButton extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        Class BTN
      </button>
    );
  }
}

function FButton() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
      Function BTN
    </button>
  );
}

const Button = (props) => {
  const { variant = 'bg-black', text } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
      {text}
      {props.children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      <div className="flex gap-x-2">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Manual BTN
        </button>
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Manual BTN
        </button>
        <CButton></CButton>
        <CButton></CButton>
        <FButton></FButton>
        <FButton></FButton>
        <Button></Button>
        <Button variant="bg-green-700" text="Register"></Button>
        <Button variant="bg-yellow-700" text="Login"></Button>
        <Button variant="bg-blue-700">Forgot</Button>
        <Button variant="bg-red-700">Reset</Button>
      </div>
    </div>
  );
}

export default App;
