function App() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="w-full h-screen bg-gray-300 flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-gray-700">Cookbook</h1>
        <p className="text-3xl font-gray-500 mt-3 w-1/2">Make a food or cooking related project and get a custom Hack Club cookbook!</p>
      </div>  
      <div className="w-full h-72 bg-gray-200 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">How it works?</h2>
          <div className="ml-2 flex flex-col">
            <p className="text-2xl font-gray-500 mt-2">
              1) Make a food or cooking related project. It could be a recipe website, a food game, or anything you can think of!
            </p>
            <p className="text-2xl font-gray-500 mt-2">
              2) Track your coding time using <a href="https://hackatime.hackclub.com/" className="font-bold hover:underline" target="_blank" rel="noopener noreferrer">Hackatime</a> and make git commits
            </p>
            <p className="text-2xl font-gray-500 mt-2">
              3) Submit your project and get a custom Hack Club cookbook or other cooking related prizes!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 bg-gray-200 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">Why a cookbook?</h2>
          <p className="text-2xl font-gray-500 mt-2">
            This cookbook is a collection of recipes that were submitted by Hack Clubbers (like you!). These recipes are from Hack Clubbers from around the world with different backgrounds and cultures! This is a great way for you to learn about your fellow Hack Clubbers, while building skills like cooking (and it tastes good too!).
          </p>
        </div>
      </div>
      <div className="w-full h-164 bg-gray-200 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">FAQ</h2>
          <div className="ml-2 flex flex-col">
            <p className="text-2xl font-gray-500 mt-2">
              Q: What is cookbook?
              A: Cookbook is a Hack Club YSWS where you ship cooking related projects and get a custom Hack Club cookbook!
            </p>
            <p className="text-2xl font-gray-500 mt-2">
              Q: What is Hack Club?
              A: Hack Club is a global nonprofit whose mission is to support high schoolers learn about programming through fun programs like this one.
            </p>
            <p className="text-2xl font-gray-500 mt-2">
              Q: Can I participate?
              A: Anyone aged 13-18 is eligible to participate in cookbook.
            </p>
            <p className="text-2xl font-gray-500 mt-2">
              Q: What is "shipping" a project?
              A: For your project to be "shipped", you need to have it be open source on Git Hub, track your time on Hackatime, and a way for us to try out your project.
            </p>
            <p className="text-2xl font-gray-500 mt-2">
              Q: All this for free?
              A: Yep! Cookbook is a completely free program to participate in!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
