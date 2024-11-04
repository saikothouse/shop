import axios from 'axios';

const SELLIX_API_URL = 'https://dev.sellix.io/v1'; // Adjust the URL based on the Sellix API documentation

export const runtime = 'edge';

export async function GET(req) {
    try {
        const response = await axios.get(`${SELLIX_API_URL}/products`, {
            headers: {
                'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`
            }
        });

        // Return the product data as a Response object
        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching products:', error); // Log the error for debugging

        // Return error response
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
