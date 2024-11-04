import axios from 'axios';

const SELLIX_API_URL = 'https://dev.sellix.io/v1'; // Adjust the URL based on the Sellix API documentation

export async function GET(req) {
    try {
        const response = await axios.get(`${SELLIX_API_URL}/products`, {
            headers: {
                'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`
            }
        });
        return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
    }
}
