"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from './Spinner'; // Assuming you create a Spinner component

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/sellix');
                setProducts(response.data.data); // Adjust based on the API response structure
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products. Please try again later.');
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
            alert('Payment created: ' + response.data.data);
        } catch (error) {
            console.error('Error creating payment:', error);
            setError('Failed to create payment. Please try again.');
        }
    };

    if (loading) return <Spinner />; // Show a spinner while loading

    return (
        <div className="container mx-auto p-4">
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <img src={product.image_url} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" /> {/* Add product image */}
                        <h2 className="text-xl font-bold">{product.title}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-semibold">${product.price}</p>
                        <button 
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            onClick={() => handlePayment(product.id)}
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
