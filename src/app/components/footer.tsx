'use client';


export default function Nav() {
  return (
    <div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600">
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
                        <div className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition">
                        California, USA
                        </div>
                    </div>
                    <div>
                        <a href="mailto:kirillayzenberg@gmail.com" className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition">
                        kirillayzenbergseo@gmail.com
                        </a>
                    </div>
                    <div>
                        <div className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-blue-900 transition">
                        Monday to Friday : 9 am – 5 pm EST
                        </div>
                    </div>
                    </div>

                    {/* Phone Number */}
                    <h3 className="text-2xl mt-10 font-semibold">
                        <a href="tel:+16573308857" className="text-blue-200 hover:underline">
                            +1 (657) 330-8857
                        </a>
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









