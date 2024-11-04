export const runtime = 'edge';

export async function POST(req) {
    const data = await req.json();

    // Handle the webhook event
    console.log('Received webhook:', data);

    // You can add logic here to update your database or notify users
    // For example, if the payment is completed, update the order status

    return new Response('Webhook received', { status: 200 });
}
