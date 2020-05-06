import { bookstoreService } from '../../services'

export const state = {
    books: [],
    loading: false,
    error: null
}

export const actions = {
    fetchBooks({commit}) {
        commit('startLoading')
        bookstoreService.getBooks()
            .then((books) => {
                commit('setBooks', books)
                commit('stopLoading')
            })
            .catch((err) => {
                commit('setError', err)
                commit('stopLoading')
            })

    }
}

export const mutations = {
    setBooks(state, books) {
        state.books = books
    },
    setError(state, error) {
        state.error = error
    },
    startLoading(state) {
        state.loading = true;
    },
    stopLoading(state) {
        state.loading = false;
    }
}

export const getters = {
    books: ({ books }) => books,
    error: ({ error }) => error,
    loading: ({ loading }) => loading
}

export default {
    state,
    actions,
    mutations,
    getters
}