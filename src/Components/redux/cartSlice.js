import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
        const timeId = new Date().getTime();

        const oldBook = state.cartItems.find( item => {
            return item.idToCompare === action.payload.id;
        }); // ищем ту книгу, которая уже есть в корзине

        if (oldBook) { // если она существует
        const newBook = {...oldBook, quantity: oldBook.quantity + action.payload.quantity, totalPrice: (oldBook.quantity + action.payload.quantity) * oldBook.bookPrice};
        // создает новую книгу, копируя старую, перезаписывая поля quantity и  totalPrice
        
        state.cartItems.splice(state.cartItems.indexOf(oldBook), 1, newBook);
        //удаляем из массива старую книгу по ее индексу и на ее место вставляем новую ( с обновленными параметрами)

        } else {
            state.cartItems.push({
                idToCompare: action.payload.book.id,
                bookId: timeId,
                bookImg: action.payload.book.img,
                bookName: action.payload.book.name,
                bookAuthor: action.payload.book.author,
                bookPrice: action.payload.book.price,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.book.price
            });
        };
    },

    updateItemQuantity: (state, action) => {
        //1й способ, топорный :)
        // const oldBook = state.cartItems.find(item => {
        //     return item.bookId === action.payload.id;
        // });// находим ту книгу, на которой происходит изменение (пользователь кликает на input)
        // const newBook = {...oldBook, quantity: action.payload.quantity, totalPrice: oldBook.bookPrice * action.payload.quantity};
        // создает новую книгу, копируя старую, перезаписывая поля quantity и  totalPrice
        // state.cartItems = state.cartItems.filter(item => item.bookId !== action.payload.id); 
        //фильтруем исходный массив, как бы удаляя тУ старую книгу, на которой происходит изменение (не пускаем ее в новый массив)
        // state.cartItems.push(newBook); // добавляем в новый массив эту новую книгу

        //2й способ, лаконичный
        state.cartItems = state.cartItems.map( item => 
            item.bookId === action.payload.id 
            ? {...item, quantity: action.payload.quantity, totalPrice: action.payload.quantity * item.bookPrice} 
            : item
        )
        // map возвращает новый массив, поэтому перезаписываем старый
        // проходимся по массиву если bookId книжки совпадает с id книжки, количество которой менял пользователь, то
        // перезаписываем с помощью spread-оператора этот объект, все ключи от старого объекта, кроме quantity
        // (пришел извне - evt.target.value inputa) и totalPrice, который пересчитывается из-за нового ключа quantity

        //в Redux все объекты и массивы immutable(неизменные), поэтому нельзя просто изменить отдельный ключ, отдельного объекта
        // надо постоянно ПЕРЕЗАПИСЫВАТЬ ОБЪЕКТЫ И МАССИВЫ используя SPREAD-оператор
    },

    removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.bookId !== action.payload.cartItem.bookId)
    },

    emptyCart: state => {
        state.cartItems = [];
    },
  },
})

export const getTotalCartPrice = state => {
    return state.cart.cartItems.reduce( (totalValue, item) => {
        return totalValue + item.totalPrice;
    }, 0);
};

export const getTotalCartQuantity = state => {
    return state.cart.cartItems.reduce( (totalValue, item) => {
        return totalValue + item.quantity;
    }, 0) 
}

export const getCartItems = state => state.cart.cartItems;

export const { addItemToCart, removeItemFromCart, updateItemQuantity, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;