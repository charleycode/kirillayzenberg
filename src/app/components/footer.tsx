'use client';


export default function Nav() {
  return (
    <div>
        <div className="bg-blue-900">
            <div className="w-full px-4 mx-auto max-w-screen-xl">
                <section className="text-white py-10 text-center">
                    {/* Logo */}
                    {/* <div className="mb-6">
                    <img
                        src="/images/logo-w.svg"
                        alt="Logo"
                        className="mx-auto h-10 w-auto"
                    />
                    </div> */}

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 text-sm md:text-base">
                    <div>
                        <a href="#" className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition">
                        California, USA
                        </a>
                    </div>
                    <div>
                        <a href="mailto:kirillayzenberg@gmail.com" className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition">
                        kirillayzenberg@gmail.com
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition">
                        Monday to Friday : 9 am – 5 pm
                        </a>
                    </div>
                    </div>

                    {/* Phone Number */}
                    <h3 className="text-2xl mt-10 text-blue-200 font-semibold">
                    +1 (858) 299-5570
                    </h3>
                    </section>
            </div>
        </div>
        <div className="bg-gray-700">
            <div className="w-full px-4 mx-auto max-w-screen-xl">
                <section className=" bg-gray-700 p-4">
                    <div className="max-w-7xl mx-auto px-4 text-center ">
                    <p className="text-sm text-white">
                        Copyright 2025 Kirill Ayzenberg LLC
                    </p>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}









