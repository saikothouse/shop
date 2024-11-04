"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import './globals.css'; // Import global styles
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);

    // Simulate loading for demonstration purposes
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading for 1 second
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Head>
                <title>Nullbite</title>
                <meta name="description" content="Welcome to the best e-commerce site for all your needs." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="loader">Loading...</div> {/* Replace with a spinner or loading animation */}
                    </div>
                ) : (
                    children
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
