export default function PrivacyAndPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container px-4 py-6 mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Privacy & Policy</h1>
                </div>
            </header>

            {/* Content */}
            <main className="container px-4 py-10 mx-auto">
                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Introduction
                    </h2>
                    <p className="leading-relaxed text-gray-600">
                        Welcome to our Privacy and Policy page. Your privacy is critically
                        important to us. This document explains what data we collect, how
                        we use it, and your rights concerning your personal information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Information We Collect
                    </h2>
                    <p className="leading-relaxed text-gray-600">
                        We doesnt collect any of information from you.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        How We Use Your Information
                    </h2>
                    <p className="leading-relaxed text-gray-600">
                        We use the collected information for various purposes, such as:
                    </p>
                    <ul className="mt-4 text-gray-600 list-disc list-inside">
                        <li>To provide and maintain our service</li>
                        <li>To notify you about changes to our service</li>
                        <li>To provide customer support</li>
                        <li>To analyze and improve our services</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Your Rights
                    </h2>
                    <p className="leading-relaxed text-gray-600">
                        You have the right to access, update, or delete the information we
                        have on you. If you would like to exercise any of these rights,
                        please contact us.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Contact Us
                    </h2>
                    <p className="leading-relaxed text-gray-600">
                        If you have any questions about this Privacy and Policy, please
                        contact us:
                    </p>
                    <ul className="mt-4 text-gray-600">
                        <li>Email: bps3573@gmail.com</li>
                        <li>Phone: +62 812-5050-3573</li>
                    </ul>
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-10 bg-white shadow">
                <div className="container px-4 py-6 mx-auto text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} BPS Kota Malang. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
