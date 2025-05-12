/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/checkout.ts

export async function redirectToCheckout(cartItems: any[]) {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      })
  
      const data = await response.json()
  
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Errore durante la creazione della sessione di checkout:', data.error)
      }
    } catch (error) {
      console.error('Errore durante il checkout:', error)
    }
  }
  