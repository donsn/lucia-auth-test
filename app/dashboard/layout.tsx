import type { Metadata } from "next";
import { validateSession } from "@/services";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Next.js dashboard layout",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <AuthProvider>
         {children}
   </AuthProvider>
   </>
    
  );
}

const AuthProvider =  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const session =  validateSession();
    if (!session) {
        redirect("/login");
    }
    return <>
        {children}
    </>
}
    