let catalog_book = {
    0: {
        id: 0,
        author: 'Masak',
        name_book: 'SpaceX',
        year: '2019'
    },
    1: {
        id: 1,
        author: 'Masfk',
        name_book: 'Tesla',
        year: '2021'
    },
    2: {
        id: 2,
        author: 'Madsk',
        name_book: 'Tefffsla',
        year: '2021'
    },
    3: {
        id: 3,
        author: 'Massk',
        name_book: 'Tesdssdla',
        year: '2021'
    },
    4: {
        id: 4,
        author: 'Masfk',
        name_book: 'Tsssesla',
        year: '2021'
    }
};

$('.delete_booook_btn').click(function(){
    delete_book(Number($('.id_cr_dl').val()));
});

$('.search_book_btn').click(function(){
    search_Book(Number($('.id_cr_sr').val()));
});

$('.create_book').click(function(){
    create_book(Number($('.issd_cr_crcr').val()), $('.auth_cr_crcr').val(), $('.name_knigi_cr_crcr').val(), $('.year_cr_crcr').val())
}); 

function search_Book(id_) {
    let id = id_;
    Object.entries(catalog_book).forEach((entry) => {
        [key, value] = entry;
        if (value.id == id) {
            $('.book').empty();
            $('.book').append(`
                <h5 class="id_book"> ${value.id} </h5>
                <h3 class="name_book"> ${value.name_book} </h3>
                <h3 class="author_book"> ${value.author} </h3>
                <h3 class="year_book"> ${value.year} </h3>
            `)
        }
    });
};

function create_book (id_, auth_, name_knigi_, year_) {
    let id = id_;
    let auth = auth_;
    let name_knigi = name_knigi_;
    let year = year_;
    console.log(id)
    catalog_book[String(id)] = {}
    catalog_book[String(id)].id = id
    catalog_book[String(id)].author = auth
    catalog_book[String(id)].name_book = name_knigi
    catalog_book[String(id)].year = year
    console.log(catalog_book)
};

function delete_book (id_) {
    let id = id_;
    Object.entries(catalog_book).forEach((entry) => {
        [key, value] = entry;
        if (value.id == id) {
            delete catalog_book[id];
            $('.book').empty();
        }
    });
};

function updateBook(id_, author_, name_, year_) {
    console.log(123)
}

