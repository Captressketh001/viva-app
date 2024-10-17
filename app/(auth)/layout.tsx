import VivaLight from "@/public/viva-light.svg";
import VivaLogo from "@/public/viva-logo.svg";
import Image from "next/image";
export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="bg-beige-100 lg:p-5 h-screen flex flex-col lg:flex-row w-full">
            <div className="bg-gradient-to-r from-orange via-pink to-violet h-[70px] lg:hidden flex items-center justify-center rounded-b-3xl">
                <Image
                    src={VivaLight}
                    alt="Viva Logo"
                    className=""
                    width={100}
                    height={24}
                    priority
                />
            </div>
            <div className="relative overflow-hidden flex-1 hidden lg:flex p-10 lg:flex-col max-w-[560px] h-full rounded-xl">
                <div className="z-10">
                    <Image
                        src={VivaLogo}
                        alt="Viva Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </div>
                <div className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src={"/image-hero-portrait@2x.png"}
                        alt="login and signup illustration image"
                        unoptimized
                        fill
                    />
                </div>
            </div>
            {children}
        </main>
    )
}