var app = new Vue({
	el: "#app",
	data: {
		books: [],
		search: ''
	},
	created() {
		this.getData();
	},
	methods: {
		getData(url) {
			fetch('https://api.myjson.com/bins/1h3vb3', {
					method: 'GET',
				})
				.then(r => r.json())
				.then(json => {
					app.books = json.books;
				})
		}
	},
	computed: {
		filteredBooks: function () {
			return this.books.filter((book) => {
				return book.titulo.match(this.search);
				return book.descripcion.match(this.search);
			});
		}
	}
})

