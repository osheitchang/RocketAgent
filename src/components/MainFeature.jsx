import { Container } from './Container';
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image';
import sheet from '../../public/excelSample.jpg'

const features = [
    {
        name: 'Full name.',
        description: 'The starting point of any contact is the name.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Email.',
        description: 'With consent you have an additional point of contact for your leads.',
        icon: LockClosedIcon,
    },
    {
        name: 'Phone Number.',
        description: 'The most direct way to communicate with your leads.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Address.',
        description: 'Get to know your lead thoroughly.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Homeowner.',
        description: 'In some cases it is helpful to know the resiential status of a lead to better serve their needs.',
        icon: Cog6ToothIcon,
    },
    // {
    //     name: 'Database backups.',
    //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    //     icon: ServerIcon,
    // },
]

export default function MainFunction() {
    return (
        // <Container className='w-max'>
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">In a single document</p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Get crucial information about your leads for better performace.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <Image
                            // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            src={sheet}
                            alt="App screenshot"
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    {feature.name}
                                </dt>{' '}
                                <dd className="inline">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        // </Container>
    )
}