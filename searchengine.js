const produts=[
    {
        id:0,
        image: 'images1.jpeg',
        title: 'Z Flip Foldable Mobile',
        price:120
    },
    {
        id:1,
        image: 'Airpodsproblack22.jpg',
        title: 'Air pods pro',
        price:60
    },
    {
        id:2,
        image: 'images3.jpeg',
        title: '250D DSLR Camera',
        price:230
    },
    {
        id:3,
        image: 'images4.jpeg',
        title: 'Headphones',
        price:100
    },
    {
        id:4,
        image: 'images5.jpeg',
        title: 'Audio Microphone',
        price:230
    },
    {
        id:5,
        image: 'images6.jpeg',
        title: 'Smart Watch',
        price:100
    },
    {
        id:6,
        image: 'samsung-s22_ultra 11.jpg',
        title: 'Samsung Mobile',
        price:80
    },
    {
        id:7,
        image: 'goole 1111.avif',
        title: 'Google Pixel 9',
        price:330
    },
    {
        id:8,
        image: 'vivo.jpg',
        title: 'Vivo Drone Camera Phone Price',
        price:290
    },
    {
        id:9,
        image: 'remle.jpeg',
        title: 'Realme',
        price:190
    },
    {
        id:10,
        image: 'apple1.jpg',
        title: 'MacBook - Wikipedia',
        price:430
    },
    {
        id:11,
        image: 'dce4a702333dc6810839be2ce3e73093.jpg',
        title: 'Xiaomi Redmi Note 13',
        price:530
    },
    {
        id:12,
        image: 'images1.jpeg',
        title: 'Mobile',
        price:1120
    },
    {
        id:13,
        image: 'Airpodsproblack22.jpg',
        title: 'Air pods',
        price:610
    },
    {
        id:14,
        image: 'images3.jpeg',
        title: 'Camera',
        price:2320
    },
    {
        id:15,
        image: 'images4.jpeg',
        title: 'simple Headphones',
        price:1030
    },
    {
        id:16,a\
        image: 'images5.jpeg',
        title: 'song Audio Microphone',
        price:2330
    },
    {
        id:17,
        image: 'images6.jpeg',
        title: 'Time Smart Watch',
        price:1030
    },
]

const categories = [...new Set(produts.map((item)=> {return item}))]

document.getElementById('searchbar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
      })
      displayItem(filterData)
});
const displayItem = (items)=> {
    document.getElementById('root').innerHTML =items.map((item)=> {
        var {image, title, price} = item;
        return(
            `<div class="box">
            <div class="img-box">
                <img class="images" src="${image}"></img>
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button>Add to card</button>
            </div>
        </div>`
        )
    }).join('')
}
displayItem(categories);
