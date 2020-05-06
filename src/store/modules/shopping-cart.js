const initialState = {
    cartItems: [],
    orderTotal: 0
}


const state = {
    ...initialState
}

const actions = {
    addBookToCart(context, bookId) {
        const book = findBookInBookList(context, bookId);
        context.commit('addBook', book)
    },
    delBookFromCart(context, bookId) {
        const book = findBookInBookList(context, bookId);
        context.commit('delBook', book)
    },
    decBookInCart(context, bookId) {
        const book = findBookInBookList(context, bookId);
        context.commit('decBook', book)
    }
}

const mutations = {
    addBook(state, book) {
        updateOrder(state, book, 1);
    },
    decBook(state, book) {
        updateOrder(state, book, -1);
    },
    delBook(state, book) {
        const item = state.cartItems.find((item) => item.id === book.id );
        updateOrder(state, book, -item.count)
    }
}

const getters = {
    cartItems: (state) => state.cartItems
}

const findBookInBookList = (context, bookId) => {
    const books = context.rootState.bookList.books;
    const book = books.find((book) => book.id === bookId);
    return book;
}

const updateOrder = (state, book, quantity) => {
    const { cartItems } = state;
    const itemIndex = cartItems.findIndex((item) => item.id === book.id);
    const newItem = updateCartItem(book, cartItems[itemIndex], quantity);
    const newCartItems = cartItems.slice(0, itemIndex).concat([newItem]).concat(cartItems.slice(itemIndex + 1))
    state.cartItems = newCartItems;
}

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price * quantity
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}