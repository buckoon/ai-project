import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className ="text-5xl font-bold mb-20">ChatGPT</h1>
      
      <div className="flex space-x-2 text-center">
        <div>
          <div className = "flex flex-col items-center justify-center mb-5">
            {/*sun icon*/}
            <SunIcon className="h-8 w-8"/>
            <h2>Examples</h2>
          </div>

          <div className ="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between grass and dirt?"</p>
            <p className="infoText">"What is the color of the sky?"</p>
          </div>
        </div>

        <div>
          <div className = "flex flex-col items-center justify-center mb-5">
            {/*sun icon*/}
            <BoltIcon className="h-8 w-8"/>
            <h2>Capabilities</h2>
          </div>

          <div className ="space-y-2">
            <p className="infoText">"Change the Chat GPT model to use"</p>
            <p className="infoText">"Messages are stored in firestore"</p>
            <p className="infoText">"notifications when chatgpt is thinking?"</p>
          </div>
        </div>
        <div>
          <div className = "flex flex-col items-center justify-center mb-5">
            {/*sun icon*/}
            <ExclamationTriangleIcon className="h-8 w-8"/>
            <h2>Limitations</h2>
          </div>

          <div className ="space-y-2">
            <p className="infoText">"May occasionally generate incorrect info"</p>
            <p className="infoText">"may produce biased content"</p>
            <p className="infoText">"based on facts preceding 2021"</p>
          </div>
        </div>
      </div>
    </div>
  )
}



