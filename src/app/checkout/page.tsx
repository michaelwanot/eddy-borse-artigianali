// src/app/checkout/page.tsx

'use client'

import { useCart } from '@/context/CartContext'
import { redirectToCheckout } from '@/lib/checkout'

export default function CheckoutPage() {
  const { cart, dispatch } = useCart()

  const getTotal = () => {
    return cart.items
      .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <main className="min-h-screen p-6 bg-[#FDFCF9] text-[#3d3d3d]">
      <h1 className="text-4xl font-serif mb-12 text-center">Il tuo carrello</h1>

      {cart.items.length === 0 ? (
        <p className="text-center text-gray-600">Il carrello è vuoto.</p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-md p-8">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h2 className="text-xl font-serif mb-1">{item.name}</h2>
                <p className="text-sm text-[#555]">Quantità: {item.quantity}</p>
              </div>
              <p className="text-[#a8745b] font-semibold">
                € {(parseFloat(item.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <strong className="text-lg">Totale:</strong>
            <strong className="text-lg">€ {getTotal()}</strong>
          </div>

          <button
            onClick={() => dispatch({ type: 'CLEAR_CART' })}
            className="mt-6 w-full bg-[#D6B0A4] text-white py-3 rounded-full shadow hover:bg-[#c29b91] transition"
          >
            Svuota carrello
          </button>

          <button
  onClick={() => redirectToCheckout(cart.items)}
  className="mt-4 w-full bg-green-600 text-white py-3 rounded-full shadow hover:bg-green-700 transition"
>
  Procedi al pagamento
</button>
        </div>
      )}
    </main>
  )
}