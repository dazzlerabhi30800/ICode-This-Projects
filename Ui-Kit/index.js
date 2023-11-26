const { useState } = React;




function App() {
  return (
    <>
      <main className="grid gap-4">
        <Navbar />
        Main Component
      </main>
    </>
  );
}


function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white rounded-md text-black p-3">
      <ul className="flex items-center gap-10 uppercase font-bold">
        <li>home</li>
        <li>about</li>
        <li>works</li>
        <li>support</li>
        <li>contact</li>
      </ul>
      <div className="input--container">
        <label htmlFor="search">Search</label>
        <input
          className="text-gray-700"
          type="text"
          id="search"
          placeholder="Search"
        />
      </div>
    </nav>
  );
}


const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);




