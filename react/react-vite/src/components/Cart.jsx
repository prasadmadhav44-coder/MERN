import { useContext } from "react";
import CartStore from "../store/CartStore";

const Cart = () => {
  const { items, updateQuantity, removeProduct, deleteAllProducts, getCartTotal } = useContext(CartStore);

  if (items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Your cart is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="py-8 antialiased bg-white dark:bg-gray-900 md:py-16">
        <div className="px-4 mx-auto max-w-screen-xl 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="flex-none mx-auto w-full lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <div className="shrink-0 md:order-1">
                        <img
                          className="w-20 h-20"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">
                        Choose quantity:
                      </label>
                      <div className="flex justify-between items-center md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="inline-flex justify-center items-center w-5 h-5 bg-gray-100 rounded-md border border-gray-300 shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id={`quantity-${item.id}`}
                            className="w-10 text-sm font-medium text-center text-gray-900 bg-transparent border-0 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="inline-flex justify-center items-center w-5 h-5 bg-gray-100 rounded-md border border-gray-300 shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            ${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 space-y-4 w-full min-w-0 md:order-2 md:max-w-md">
                        <h3 className="text-base font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <div className="flex gap-4 items-center">
                          <button
                            type="button"
                            onClick={() => removeProduct(item.id)}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="none"
                              viewBox="0 0 24 24">
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {items.length > 0 && (
                  <div className="flex justify-end">
                    <button
                      onClick={deleteAllProducts}
                      className="font-medium text-red-600 hover:text-red-800"
                    >
                      Clear Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 mx-auto mt-6 space-y-6 max-w-4xl lg:mt-0 lg:w-full">
              <div className="p-4 space-y-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex gap-4 justify-between items-center">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Subtotal
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${getCartTotal().toFixed(2)}
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex gap-4 justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      ${getCartTotal().toFixed(2)}
                    </dd>
                  </dl>
                </div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Proceed to Checkout
                </a>
                <div className="flex gap-2 justify-center items-center">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    className="inline-flex gap-2 items-center text-sm font-medium underline text-primary-700 hover:no-underline dark:text-primary-500">
                    Continue Shopping
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
