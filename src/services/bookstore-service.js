class BookstoreService {
    data = [
        {
            id: 1,
            title: "Grokking Deep Learning",
            author: "Andrew W. Trask",
            price: 32,
            coverImage: "https://picsum.photos/id/1069/433/433"
        },
        {
            id: 2,
            title: "Machine Learning with TensorFlow",
            author: "Nishant Shukla",
            price: 133,
            coverImage: "https://picsum.photos/id/1068/433/433"
        }
    ]

    getBooks() {
        //Cимуляция работы с сервером
        return new  Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Error'))
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
}

export default new BookstoreService();