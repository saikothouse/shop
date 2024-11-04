"use client"; // Ensure this is a client component

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter(); // Get the router instance

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/sellix');
                setProducts(response.data.data); // Adjust based on the API response structure
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handlePayment = async (productId) => {
        try {
            const response = await axios.post('/api/sellix/payment', {
                productId,
                quantity: 1, // Adjust quantity as needed
            });

            // Assuming the response contains the payment link
            const paymentLink = response.data.data; // Adjust based on your API response structure
            router.push(paymentLink); // Use router.push to navigate to the payment link
        } catch (error) {
            console.error('Error creating payment:', error);
            alert('Failed to create payment');
        }
    };

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                        <img 
                            src={product.image_url} 
                            alt={product.title} 
                            className="w-full h-48 object-cover mb-4" 
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <button 
                                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                                onClick={() => handlePayment(product.id)}
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
