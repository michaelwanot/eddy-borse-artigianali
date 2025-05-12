// src/app/api/checkout/route.ts

import Stripe from 'stripe'
import { NextResponse } from 'next/server'

// Inizia creando un oggetto Stripe con la tua API key segreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-04-30.basil',
})

export async function POST(request: Request) {
  try {
    const { items } = await request.json()

    const lineItems = items.map((item: { name: string; price: string; quantity: number }) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(parseFloat(item.price) * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    })
    return NextResponse.json({ url: session.url })
  } catch (error: unknown) {
    console.error(error)
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}
