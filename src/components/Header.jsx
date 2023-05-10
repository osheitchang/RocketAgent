import { Container } from './Container';
import { Logo } from './Logo'
import Link from 'next/link'
import { NavLink } from './NavLink';
import { Button } from './Button'

export default function Header() {
    return (
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex justify-between font-display font-medium">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="#" aria-label="Home">
                            <Logo className="h-5 w-auto" />
                        </Link>
                        <div className="hidden md:flex md:gap-x-6">
                            <NavLink href={'#home'}>Home</NavLink>
                            <NavLink href={'#packages'}>Packages</NavLink>
                            <NavLink href={'#form'}>Contact us</NavLink>
                        </div>
                    </div>
                    <div className=" flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <NavLink href="/login"> Sign in</NavLink>
                        </div>
                        <Button href='' color="purple">
                            <span>
                                Get started <span className="hidden lg:inline">Today</span>
                            </span>
                        </Button>
                        <div className="-mr-1 md:hidden">
                            {/* <MobileNavigation /> */}
                        </div>
                    </div>
                </nav>
            </Container>
        </ header >
    )
}