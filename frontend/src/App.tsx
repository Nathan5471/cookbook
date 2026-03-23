import Navbar from "./components/Navbar"
import FAQ from "./components/FAQ"
import IconMap from "./components/IconMap"

function App() {
  return (
    <div className="w-full h-full flex flex-col font-[Phantom_Sans] bg-background">
      <Navbar />
      <div className="relative w-full h-[calc(100vh-144px)] overflow-hidden bg-darker-background flex flex-col items-center justify-center">
        <IconMap />
        <h1 className="text-9xl font-bold text-gray-700 z-10">Cookbook</h1>
        <p className="text-3xl font-gray-500 mt-3 w-1/2 z-10">Make a food or cooking related project and get a custom Hack Club cookbook!</p>
      </div>  
      <div id={"how-it-works"} className="w-full h-80 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">How it works?</h2>
          <div className="m-2 flex flex-row gap-4">
            <div className="w-1/3 h-auto flex flex-col items-start bg-darker-background p-3 rounded-lg">
              <p className="text-2xl font-gray-500 mt-2">
                <span className="font-bold">1)</span> Make a food or cooking related project. It could be a recipe website, a food game, or anything you can think of!
              </p>
            </div>
            <div className="w-1/3 h-auto flex flex-col items-start bg-darker-background p-3 rounded-lg">
              <p className="text-2xl font-gray-500 mt-2">
                <span className="font-bold">2)</span> Track your coding time using <a href="https://hackatime.hackclub.com/" className="font-bold text-background hover:underline" target="_blank" rel="noopener noreferrer">Hackatime</a> and make git commits
              </p>
            </div>
            <div className="w-1/3 h-auto flex flex-col items-start bg-darker-background p-3 rounded-lg">
              <p className="text-2xl font-gray-500 mt-2">
                <span className="font-bold">3)</span> Submit your project and get a custom Hack Club cookbook or other cooking related prizes!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id={"why-a-cookbook"} className="w-full h-64 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">Why a cookbook?</h2>
          <p className="text-2xl font-gray-500 mt-2">
            This cookbook is a collection of recipes that were submitted by Hack Clubbers (like you!). These recipes are from Hack Clubbers from around the world with different backgrounds and cultures! This is a great way for you to learn about your fellow Hack Clubbers, while building skills like cooking (and it tastes good too!).
          </p>
        </div>
      </div>
      <div id={"faq"} className="w-full h-auto mb-10 flex justify-center">
        <div className="w-2/3 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 mt-10">FAQ</h2>
          <div className="ml-2 mt-2 flex flex-col gap-y-2">
            <FAQ question="What is cookbook?" answer="Cookbook is a Hack Club YSWS where you ship cooking related projects and get a custom Hack Club cookbook!" />
            <FAQ question="What is Hack Club?" answer="Hack Club is a global nonprofit whose mission is to support high schoolers learn about programming through fun programs like this one." />
            <FAQ question="What will be in the cookbook?" answer="The cookbook will contain recipes submitted by Hack Clubbers from around the world. All of the recipes will be tested, so you know they will work and taste good!" />
            <FAQ question="What kind of projects can I make?" answer="You can make anything that is related to food or cooking. It could be a website that is dedicated to your favorite food, or you could make a blog about your cooking journey. Some other projects you could make include a game about food, a recipe website, or an app about cooking (like a bread calculator)" />
            <FAQ question="What is 'shipping' a project?" answer="For your project to be 'shipped', you need to have it be open source on Git Hub, track your time on Hackatime, and have a way for us to try out your project." />
            <FAQ question="All this for free?" answer="Yep! Cookbook is a completely free program to participate in!" />
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-darker-background flex items-center justify-center">
        <p className="flex text-xl text-gray-500">Made with ❤︎⁠ by Hack Club</p>
      </div>
    </div>
  )
}

export default App
