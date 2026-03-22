import FAQ from "./components/FAQ"

function App() {
  return (
    <div className="w-full h-full flex flex-col font-[Phantom_Sans]">
      <div className="w-full h-[calc(100vh-144px)] bg-darker-background flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-gray-700">Cookbook</h1>
        <p className="text-3xl font-gray-500 mt-3 w-1/2">Make a food or cooking related project and get a custom Hack Club cookbook!</p>
      </div>  
      <div className="w-full h-72 bg-background flex justify-center">
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
      <div className="w-full h-64 bg-background flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">Why a cookbook?</h2>
          <p className="text-2xl font-gray-500 mt-2">
            This cookbook is a collection of recipes that were submitted by Hack Clubbers (like you!). These recipes are from Hack Clubbers from around the world with different backgrounds and cultures! This is a great way for you to learn about your fellow Hack Clubbers, while building skills like cooking (and it tastes good too!).
          </p>
        </div>
      </div>
      <div className="w-full h-128 bg-background flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">FAQ</h2>
          <div className="ml-2 flex flex-col gap-y-2">
            <FAQ question="What is cookbook?" answer="Cookbook is a Hack Club YSWS where you ship cooking related projects and get a custom Hack Club cookbook!" />
            <FAQ question="What is Hack Club?" answer="Hack Club is a global nonprofit whose mission is to support high schoolers learn about programming through fun programs like this one." />
            <FAQ question="What will be in the cookbook?" answer="The cookbook will contain recipes submitted by Hack Clubbers from around the world. All of the recipes will be tested, so you know they will work and taste good!" />
            <FAQ question="What kind of projects can I make?" answer="You can make anything that is related to food or cooking. It could be a website that is dedicated to your favorite food, or you could make a blog about your cooking journey. Some other projects you could make include a game about food, a recipe website, or an app about cooking (like a bread calculator)" />
            <FAQ question="What is 'shipping' a project?" answer="For your project to be 'shipped', you need to have it be open source on Git Hub, track your time on Hackatime, and have a way for us to try out your project." />
            <FAQ question="All this for free?" answer="Yep! Cookbook is a completely free program to participate in!" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
