import Link from "next/link";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ThankYou() {
    const router = useRouter();

    useEffect(() => {
        
        if (!sessionStorage.getItem('formSubmitted')) {
        
          router.push('/');
        } else {
         
          sessionStorage.removeItem('formSubmitted');
        }
      }, [router]);
  return (
    <>
    <SeoHead title='Thank You | 800 Bbattery' />
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white-500">
        {/* Icon */}
        <div className="bg-yellow-500 p-4 rounded-full mb-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-8m0 0l-4 4m4-4l4 4"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thanks for submitting!
        </h1>
        <p className="text-gray-600 mb-6">Your message has been sent!</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link href="/">
            <a className="bg-yellow-500 text-white-500 px-6 py-2 rounded-md hover:bg-yellow-600">
              Go Home
            </a>
          </Link>
          <a
            href="tel:+971509344668"
            className="bg-yellow-500 text-white-500 px-6 py-2 rounded-md hover:bg-yellow-600"
          >
            Call Now
          </a>
        </div>
      </div>
      </Layout>
    </>
  );
}
