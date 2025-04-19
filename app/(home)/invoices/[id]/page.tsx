import { Button } from "@/app/ui/button"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'

export default function Page() {
    return (
        <div className="w-[90%] md:w-[85%] mx-auto sm:my-10 flex flex-col gap-8">
           <Link href="/invoices" className="flex gap-6 items-center hover:text-[#878daf]">
            <ChevronLeftIcon className="w-4 h-4 text-3xl text-pink"/> 
            <span className="font-bold text-sm"> Go Back</span>
           </Link>
           <div className="w-full bg-white h-24 rounded-md flex items-center justify-between px-4 sm:px-10">
                <div className="flex gap-4 w-full sm:w-auto items-center justify-between sm:justify-start">
                    <span className="text-[#878daf] text-sm">Status</span>
                    <div className="flex gap-2 items-center">
                       <div className="w-24 h-10 px-3 flex items-center justify-center gap-2 bg-[#32d69f0d]">
                        <span className="w-2 h-2 rounded-full bg-[#32d69f]"></span>
                        <span className="text-xs font-bold text-[#32d69f]">Paid</span>
                     </div>
                     </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                    <button className="bg-edit-btn-bg hover:bg-edit-btn-hover h-12 w-20 font-bold rounded-full text-sm">
                        <span className="text-edit-btn-text text-center">Edit</span>
                    </button>
                    <button className="bg-error hover:bg-error-active h-12 w-24 font-bold rounded-full text-sm">
                        <span className="text-white text-center">Delete</span>
                    </button>
                </div>
           </div>
           <div className="w-full bg-white rounded-md flex flex-col p-4 sm:p-10">
                <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold"><span className="text-edit-btn-text">#</span><span className="text-dark">RT3080</span></h4>
                        <p className="text-edit-btn-text text-sm">Re-branding</p>
                    </div>
                    <div className="sm:text-right text-edit-btn-text text-sm">
                        <p>19 Union Terrace</p>
                        <p>London</p>
                        <p>E1 3EZ</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-8 sm:gap-12 md:gap-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="text-edit-btn-text">Invoice Date</p>
                            <h4 className="text-dark font-bold">Mar 19, 2025</h4>
                        </div>
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="text-edit-btn-text">Payment Due</p>
                            <h4 className="text-dark font-bold">Mar 20, 2025</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="text-edit-btn-text">Bill To</p>
                            <h4 className="text-dark font-bold">Jensen Huang</h4>
                        </div>
                        <div className="sm:text-left text-edit-btn-text text-sm">
                        <p>106 Kendell Street</p>
                        <p>Sharrington</p>
                        <p>NR24 5WQ</p>
                        <p>United Kingdom</p>
                    </div>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                            <p className="text-edit-btn-text">Sent To</p>
                            <h4 className="text-dark font-bold">jensenhuang@gmail.com</h4>
                        </div>
                </div>
                <div className="bg-card-bg rounded-lg mt-10 overflow-hidden relative">
                    <div className="px-12 py-10">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left pb-10 capitalize font-bold text-xs text-edit-btn-text">Item Name</th>
                                <th className="text-center pb-10 capitalize font-bold text-xs text-edit-btn-text">Qty.</th>
                                <th className="text-right pb-10 capitalize font-bold text-xs text-edit-btn-text">Price</th>
                                <th className="text-right pb-10 capitalize font-bold text-xs text-edit-btn-text">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-8 text-left font-bold text-sm">Brand Guidelines</td>
                                <td className="py-8 text-center text-edit-btn-text text-sm">1</td>
                                <td className="py-8 text-right text-edit-btn-text font-bold text-sm">$1,800.90</td>
                                <td className="py-8 text-right text-sm font-bold">$1,800.90</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                    <div className="bg-card-primary p-10 flex justify-between text-white">
                        <p className="text-xs">Amount Due</p>
                        <span className="font-bold text-[1.85rem] leading-3">$1,800.90</span>
                    </div>
                </div>
           </div>
           
        </div>
    )
}