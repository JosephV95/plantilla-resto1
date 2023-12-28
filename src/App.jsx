import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center bg-orange-200">
        <div className="w-1/2 bg-slate-300 mx-0 border-s-zinc-200">
          <h1 className="text-blue-700">Vite + React</h1>
          <section>
            <details >
              <summary>lo nuevo</summary>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nihil facere adipisci perspiciatis corrupti, animi esse eaque provident ex incidunt aspernatur quasi reiciendis, obcaecati inventore numquam consequuntur maiores, odit nobis.</p>
            </details>
          </section>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
