import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { SearchInput } from '@/modules/home/ui/components/home-navbar/search-input'
import { AuthButton } from '@/modules/auth/ui/components/auth-button'

export const HomeNavbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link href={'/'}>
                        <div className="flex items-center gap-2 p-4 cursor-pointer">
                            <Image src="/logo.svg" alt="logo" width={40} height={40} />
                            <p className="text-xl font-semibold tracking-tight">MeTube</p>
                        </div>
                    </Link>
                </div>

                <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
                    <SearchInput />
                </div>

                <div className="flex-shrink-0 items-center flex gap-4">
                    <AuthButton />
                </div>
            </div>
        </div>
    )
}
