"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
            window.location.href = paymentLink; // Redirect to the payment link
        } catch (error) {
            console.error('Error creating payment:', error);
            alert('Failed to create payment');
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-lg font-semibold">${product.price}</p>
                    <button 
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePayment(product.id)}
                    >
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
