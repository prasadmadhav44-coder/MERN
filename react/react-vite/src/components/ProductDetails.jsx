import { useParams } from "react-router-dom";
import { useContext } from "react";
import useProductDetailsFetch from "../hooks/useProductDetailsFetch";
import CartStore from "../store/CartStore";

const ShimmerEffect = () => {
  return (
    <div className="animate-pulse">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        {/* Image shimmer */}
        <div className="mx-auto max-w-md shrink-0 lg:max-w-lg">
          <div className="w-full h-80 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
        </div>

        {/* Content shimmer */}
        <div className="mt-6 sm:mt-8 lg:mt-0">
          {/* Title */}
          <div className="mb-4 w-3/4 h-8 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          
          {/* Price and rating */}
          <div className="mt-4 sm:flex sm:items-center sm:gap-4">
            <div className="mb-4 w-32 h-10 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="mb-3 w-2/3 h-5 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:flex sm:gap-4 sm:items-center">
            <div className="mb-4 w-40 h-10 bg-gray-200 rounded-md dark:bg-gray-700"></div>
            <div className="w-40 h-10 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>

          <div className="my-6 border-t border-gray-200 dark:border-gray-800"></div>

          {/* Description */}
          <div className="mb-2 w-1/4 h-6 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-2 w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { product_id = 1 } = useParams();
  const { addProduct } = useContext(CartStore);
  
  const { product, loading, error } = useProductDetailsFetch(product_id);

  if (loading) {
    return (
      <section className="py-8 antialiased bg-white md:py-16 dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl 2xl:px-0">
          <ShimmerEffect />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  // Calculate discounted price
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <>
      <section className="py-8 antialiased bg-white md:py-16 dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="mx-auto max-w-md shrink-0 lg:max-w-lg">
              {product.images && product.images.length > 0 ? (
                <img
                  className="w-full rounded-lg"
                  src={product.images[0]}
                  alt={product.title}
                />
              ) : (
                <img
                  className="w-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                  alt="Product placeholder"
                />
              )}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  ${discountedPrice.toFixed(2)}
                </p>
                {product.discountPercentage > 0 && (
                  <p className="text-lg text-gray-500 line-through dark:text-gray-400">
                    ${product.price.toFixed(2)}
                  </p>
                )}

                <div className="flex gap-2 items-center mt-2 sm:mt-0">
                  <div className="flex gap-1 items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < Math.round(product.rating)
                            ? "text-yellow-300"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    ({product.rating.toFixed(1)})
                  </p>
                  {product.reviews && (
                    <a
                      href="#"
                      className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                    >
                      {product.reviews.length} Reviews
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Brand: <span className="text-gray-500">{product.brand}</span>
                </p>
                <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category: <span className="text-gray-500">{product.category}</span>
                </p>
                <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  Availability: <span className="text-green-500">{product.availabilityStatus || (product.stock > 0 ? "In Stock" : "Out of Stock")}</span>
                </p>
                {product.stock > 0 && (
                  <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    Stock: <span className="text-gray-500">{product.stock} units</span>
                  </p>
                )}
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <a
                  href="#"
                  title="Add to favorites"
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Add to favorites
                </a>

                <button
                  onClick={() => {
                    const cartProduct = {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      discountedPrice: discountedPrice,
                      image: product.images?.[0] || "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    };
                    addProduct(cartProduct);
                  }}
                  className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>

              <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-800" />

              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Description</h2>
                <p className="mb-6 text-gray-500 dark:text-gray-400">{product.description}</p>
              </div>

              {product.shippingInformation && (
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Shipping: </span>
                  {product.shippingInformation}
                </p>
              )}
              
              {product.warrantyInformation && (
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">Warranty: </span>
                  {product.warrantyInformation}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
