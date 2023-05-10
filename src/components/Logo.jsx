import Image from 'next/image'
import logo from '../images/logos/logo.png'


export function Logo(className) {
    return (
        <div className="w-20">
            <Image
                src={logo}
                alt="Top Producer Lofd"
            />

        </div>
    )
}