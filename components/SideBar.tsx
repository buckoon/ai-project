import NewChat from "./NewChat";


function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/*new chat */}
                <NewChat/>
                <div>
                    {/*ModelSelection */}
                </div>

                {/*map through ChatRows */}
            </div>

        </div>
    </div>
  )
}

export default SideBar;