import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/menu"
import { Button } from "@/app/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"


import { PlusCircleIcon, FunnelIcon, AdjustmentsHorizontalIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
export default function Page() {
    return (
        <div className="w-[90%] md:w-[85%] mx-auto my-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-lg md:text-3xl">Invoices</h1>
                    <p className="text-xs hidden md:block">There are 3 total invoices</p>
                    <p className="text-xs block md:hidden">3 invoices</p>
                </div>
                <div className="flex gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hidden md:flex">Filter by status</NavigationMenuTrigger>
                                <NavigationMenuTrigger className="flex md:hidden"><FunnelIcon className="w-6 h-6"/></NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-32 p-2 flex flex-col gap-3">
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="draft" /><span>Draft</span></li>
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="pending" /><span>Pending</span></li>
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="paid" /><span>Paid</span></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hidden md:flex">Sort by</NavigationMenuTrigger>
                                <NavigationMenuTrigger className="flex md:hidden"><AdjustmentsHorizontalIcon className="w-6 h-6" /></NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-32 p-2 flex flex-col gap-3">
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="name" /><span>Name</span></li>
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="status" /><span>Status</span></li>
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="due_date" /><span>Due Date</span></li>
                                        <li className="flex gap-4 text-xs font-bold hover:text-pink focus:text-pink"><Checkbox className="hover:border hover:border-pink focus:ring-pink data-[state=checked]:bg-pink data-[state=checked]:text-white  rounded " id="total" /><span>Total</span></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className="bg-pink flex gap-2 px-2 h-12 rounded-full font-extrabold w-auto">
                        <PlusCircleIcon className="w-8 h-8"/>
                        <span className="hidden md:block">New Invoice</span>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-4 py-6 md:py-20">
                <Link href="/invoices/RT3080" className="w-full flex items-start md:items-center justify-between cursor-pointer h-auto md:h-20 py-[1.25rem] px-[1.85rem] bg-white transition-transform duration-150 ease-in rounded-lg hover:transform hover:translate-y-[-3%] hover:scale-[1.01] hover:outline hover:outline-1 hover:outline-pink hover:shadow-sm hover:shadow-[#48549f80]">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <h3 className="font-bold text-sm"><span className="text-pink">#</span>RT3080</h3>
                        <p className="text-xs text-[#878daf] font-bold">Due Oct 26 2024</p>
                        <p className="text-xs text-[#878daf] font-bold">Adeagbo Ridwan</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                     <h3 className="font-bold text-sm">$1,000.90</h3>
                     <div className="flex gap-2 items-center">
                       <div className="w-24 h-10 px-3 flex items-center justify-center gap-2 bg-[#32d69f0d]">
                        <span className="w-2 h-2 rounded-full bg-[#32d69f]"></span>
                        <span className="text-xs font-bold text-[#32d69f]">Paid</span>
                     </div>
                     <ChevronRightIcon className="w-4 h-4 text-pink"/> 
                     </div>
                     
                    </div>
                </Link>
                
                <div className="w-full flex items-start md:items-center justify-between cursor-pointer h-auto md:h-20 py-[1.25rem] px-[1.85rem] bg-white transition-transform duration-150 ease-in rounded-lg hover:transform hover:translate-y-[-3%] hover:scale-[1.01] hover:outline hover:outline-1 hover:outline-pink hover:shadow-sm hover:shadow-[#48549f80]">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <h3 className="font-bold text-sm"><span className="text-pink">#</span>RT3080</h3>
                        <p className="text-xs text-[#878daf] font-bold">Due Oct 26 2024</p>
                        <p className="text-xs text-[#878daf] font-bold">Adeagbo Ridwan</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                     <h3 className="font-bold text-sm">$1,000.90</h3>
                     <div className="flex gap-2 items-center">
                       <div className=" w-24 h-10 px-3 flex items-center justify-center gap-2 bg-[#ff90000d]">
                        <span className="w-2 h-2 rounded-full bg-[#ff9000]"></span>
                        <span className="text-xs font-bold text-[#ff9000]">Pending</span>
                     </div>
                     <ChevronRightIcon className="w-4 h-4 text-pink"/> 
                     </div>
                     
                    </div>
                </div>

                <div className="w-full flex items-start md:items-center justify-between cursor-pointer h-auto md:h-20 py-[1.25rem] px-[1.85rem] bg-white transition-transform duration-150 ease-in rounded-lg hover:transform hover:translate-y-[-3%] hover:scale-[1.01] hover:outline hover:outline-1 hover:outline-pink hover:shadow-sm hover:shadow-[#48549f80]">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <h3 className="font-bold text-sm"><span className="text-pink">#</span>RT3080</h3>
                        <p className="text-xs text-[#878daf] font-bold">Due Oct 26 2024</p>
                        <p className="text-xs text-[#878daf] font-bold md:w-14">Mellisa Clarke</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                     <h3 className="font-bold text-sm">$1,000.90</h3>
                     <div className="flex gap-2 items-center">
                       <div className=" w-24 h-10 px-3 flex items-center justify-center gap-2 bg-[#ff90000d]">
                        <span className="w-2 h-2 rounded-full bg-[#ff9000]"></span>
                        <span className="text-xs font-bold text-[#ff9000]">Pending</span>
                     </div>
                     <ChevronRightIcon className="w-4 h-4 text-pink"/> 
                     </div>
                     
                    </div>
                </div>

                <div className="w-full flex items-start md:items-center justify-between cursor-pointer h-auto md:h-20 py-[1.25rem] px-[1.85rem] bg-white transition-transform duration-150 ease-in rounded-lg hover:transform hover:translate-y-[-3%] hover:scale-[1.01] hover:outline hover:outline-1 hover:outline-pink hover:shadow-sm hover:shadow-[#48549f80]">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <h3 className="font-bold text-sm"><span className="text-pink">#</span>RT3080</h3>
                        <p className="text-xs text-[#878daf] font-bold">Due Oct 26 2024</p>
                        <p className="text-xs text-[#878daf] font-bold md:w-14">Mellisa Clarke</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                     <h3 className="font-bold text-sm">$1,000.90</h3>
                     <div className="flex gap-2 items-center">
                       <div className=" w-24 h-10 px-3 flex items-center justify-center gap-2 bg-[#ff90000d]">
                        <span className="w-2 h-2 rounded-full bg-[#ff9000]"></span>
                        <span className="text-xs font-bold text-[#ff9000]">Pending</span>
                     </div>
                     <ChevronRightIcon className="w-4 h-4 text-pink"/> 
                     </div>
                     
                    </div>
                </div>
                
            </div>


        </div>
    )
}