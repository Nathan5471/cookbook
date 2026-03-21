function App() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="w-full h-screen bg-gray-300 flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-gray-700">Cookbook</h1>
        <p className="text-3xl font-gray-500 mt-3 w-1/2">Make a food or cooking related project and get a custom Hack Club cookbook!</p>
      </div>  
      <div className="w-full h-96 bg-gray-200 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">How it works?</h2>
        </div>
      </div>
      <div className="w-full h-96 bg-gray-200 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">Why a cookbook?</h2>
        </div>
      </div>
      <div className="w-full h-96 bg-gray-200 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">FAQ</h2>
        </div>
      </div>
    </div>
  )
}

export default App
