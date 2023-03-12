import SideBar from '<aiproject>/components/SideBar'
import { SessionProvider } from "../components/SessionProvider"
import { getServerSession} from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]";
/* this is my file location: C:\Users\Jeremy.Carpenter\ai-project\app\api\auth\[...nextauth].ts*/
import './globals.css'
import Login from '<aiproject>/components/Login';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);



  return (
    <html>
      <head/>
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
        <div className = "flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SideBar />
          </div>
          
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
        )}
        </SessionProvider>
        
      </body>
    </html>
  )
}
