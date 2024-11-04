import axios from 'axios';

export const runtime = 'edge';

const SELLIX_API_URL = 'https://dev.sellix.io/v1';

export async function POST(req) {
    const { productId, quantity } = await req.json(); // Assuming you send productId and quantity in the request body

    try {
        const response = await axios.post(`${SELLIX_API_URL}/payments`, {
            product_id: productId,
            quantity: quantity,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create payment' }), { status: 500 });
    }
}
