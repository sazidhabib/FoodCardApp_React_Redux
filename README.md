# Food Ordering App

## Live demo link - https://foodcardapp.netlify.app/


A React-based food ordering application where users can browse food items, add products to their cart, view product details, and manage their cart by increasing or decreasing product quantities or removing items. State management is implemented using Redux, and JavaScript is used for business logic.

---

## Features

- **Product Listing**: Browse a list of food items.
- **Product Details**: View detailed information about a specific product.
- **Add to Cart**: Add products to your cart with a single click.
- **Cart Management**:
  - Increase or decrease the quantity of products.
  - Remove products from the cart.
  - View the total price of items in the cart.
- **Responsive Design**: Optimized for various screen sizes.

---

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing the application state.
- **JavaScript**: For implementing application logic.
- **Bootstrap**: For styling and responsive design.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-ordering-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd food-ordering-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Folder Structure

```
food-ordering-app/
|-- public/
|-- src/
    |-- components/
        |-- Header.js
        |-- CardsDetails.js
        |-- CardsData.js
    |-- redux/
        |-- cartSlice.js
        |-- store.js
    |-- App.js
    |-- index.js
|-- package.json
```

---

## How It Works

### State Management

- **Redux**: A `cartSlice` is used to handle cart-related actions:
  - `addToCart`: Adds a product to the cart or increases its quantity.
  - `removeOne`: Decreases the quantity of a product or removes it if the quantity reaches zero.
  - `removeFromCart`: Removes a product entirely from the cart.

### Cart Functionality

- **Add to Cart**: Users can add food items to the cart from the product listing or detail pages.
- **Update Quantity**: Adjust the quantity of a product directly from the cart.
- **View Total**: The total price of all items in the cart is calculated dynamically.

---


## Screenshots

- **Homepage**: Displays a list of food items.
![image](https://github.com/user-attachments/assets/f33f4136-8a93-4852-88b3-c1e508fa4fac)
![Screenshot 2024-12-25 111855](https://github.com/user-attachments/assets/76d73329-e270-4fcf-86a2-ca13b605f4dc)
- **Product Details**: Shows details of a selected product.
![Screenshot 2024-12-25 112010](https://github.com/user-attachments/assets/a8df3779-1871-46cd-ad3f-94bf08b901f6)

(Add screenshots here if available)

---

## Future Enhancements

- Add user authentication and order history.
- Integrate a backend API for product and order management.
- Enhance UI/UX with additional animations and transitions.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to report bugs or suggest new features.

