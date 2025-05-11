'use client'
import Script from "next/script";

export default function ContactUs() {
    return (
        <section className="bg-white py-16 px-6 md:px-20 min-h-[900px]" id="contact">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left: Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
                    <p className="mb-6 text-gray-600">
                        Reach out to Cafeed for business inquiries, distribution partnerships, or export orders.
                    </p>
                    <div className="mb-4">
                        <p className="font-semibold text-gray-800">Phone:</p>
                        <p className="text-gray-600">+91-918458994108</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold text-gray-800">Email:</p>
                        <p className="text-gray-600">admin@cafeed.co</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold text-gray-800">Address:</p>
                        <p className="text-gray-600">
                            321, 322, Jain Nagar, Amrapali, Lalghati, Bhopal, Madhya Pradesh</p>
                    </div>
                    <div className="overflow-hidden max-w-full w-[360px] md:w-[500px] h-[500px] relative">
                        <div className="w-full h-full">
                            <iframe
                                className="w-full h-full border-0"
                                frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/place?q=321,+322,+Jain+Nagar,+Amrapali,+Lalghati,+Bhopal,+Madhya+Pradesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>                </div>

                {/* Right: Tally Form Embed */}
                <div className="w-full h-[900px]">
                    <iframe data-tally-src="https://tally.so/embed/mKgZYD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="799" frameBorder="0" marginHeight={0} marginWidth={0} title="Contact Us"></iframe>
                </div>
            </div>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    if (Tally) {
                        Tally.loadEmbeds();
                    }
                }}
            />
        </section>
    );
}
