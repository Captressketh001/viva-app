'use client'
import dynamic from 'next/dynamic'
const SideNav = dynamic(() => import("@/app/ui/side-nav"), { ssr: false })
const MobileSideNav = dynamic(() => import("@/app/ui/mobile-side-nav"), { ssr: false })
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex w-full h-full bg-gray-200">
        <MobileSideNav />
        <SideNav /> 
        <div className="flex-1 px-4 py-6 md:px-10 md:py-8 overflow-auto max-h-screen">
          {children}
        </div>
      </div>
    );
  }