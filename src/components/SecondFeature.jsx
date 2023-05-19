import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Container } from '../components/Container'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function SecondFeature() {
  return (
    // <Container>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">Grow faster</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Become a top producer</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Our lead generation service is designed specifically for insurance agents who want to grow their business and connect with potential clients who are actively searching for insurance services. We use advanced marketing strategies to identify and target high-quality leads, so you can focus on closing deals and building relationships.
              </p>
              <p className="mt-8">
                We use advanced technology and marketing strategies to identify and target high-quality leads who are actively searching for insurance services. This means that you'll be connected with potential clients who are already interested in what you have to offer, making it easier to close deals and build relationships.
              </p>
            </div>
            <div>
              <p>
                Connect with more potential clients and close more deals. This means that you'll see an increase in your sales and revenue, allowing you to grow your business and achieve your goals.
              </p>
              <p className="mt-8">
                Our team of experts is dedicated to helping you succeed. We provide ongoing support and guidance to ensure that you're getting the most out of our lead generation service and achieving your goals.

                Don't let the competition get ahead of you. Start using our lead generation service today and start seeing real results in your insurance business. Contact us to learn more and get started!
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section className="bg-slate-50 rounded-lg px-6 py-24 sm:py-32 lg:px-8">
            <figure className="mx-auto max-w-2xl">
              <p className="sr-only">5 out of 5 stars</p>
              <div className="flex gap-x-1 text-indigo-600">
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
              </div>
              <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “I spend most of my time looking for leads to keep growing my business. Now I can focus on other areas that will help me grow my business exponentially.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                {/* <img
                  className="h-12 w-12 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                  alt=""
                /> */}
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Luis R.</div>
                  <div className="mt-0.5 text-gray-600">CEO of Reyes Insurance</div>
                </div>
              </figcaption>
            </figure>
          </section>

          {/* <Image
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            // src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            src=''
            alt=""
          /> */}
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
    // </Container>
  )
}