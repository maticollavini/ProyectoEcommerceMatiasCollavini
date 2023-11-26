const products = [
    {id: 1, name: "Wolo", category: "remeras", price: 1000, stock: 500, description: "queseyo", imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/317687407_220565563673902_202486634724626465_n.jpg?ccb=11-4&oh=01_AdSXxD7fusyKOti2zBO6SUspVbuMWWMCc7LbNjRV5KUr3g&oe=656BC53D&_nc_sid=e6ed6c&_nc_cat=103"},
    {id: 2, name: "Ramiro Aquino", category: "remeras", price: 7000, stock: 500, description: "queseyo", imgUrl: "https://media.licdn.com/dms/image/D4D03AQEm8mJ20sG24Q/profile-displayphoto-shrink_200_200/0/1686704311359?e=1703721600&v=beta&t=1hEM-WflmjzxZmfcrsu6ewikwIy0pXWF0KEm5_Axifs"},
    {id: 3, name: "Lautaro catador de anos", category: "Gorras", price: 3000, stock: 500, description: "queseyo", imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/343798383_268129989002729_7135847266480751952_n.jpg?ccb=11-4&oh=01_AdTPiOYDfc4KKUXprC-45n3zmwR_aGFaMegQJNUrHqGR1g&oe=656B982F&_nc_sid=e6ed6c&_nc_cat=105"},
    {id: 4, name: "Macri", category: "remeras", price: 5000, stock: 500, description: "queseyo", imgUrl: "https://s.france24.com/media/display/58c22530-9c1c-11e9-9d5a-005056a98db9/w:1280/p:1x1/macri_5.jpg"},
]

export const mFetch = (id) =>{
    return new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(id ? products.find(prod => prod.id === id) :products)
        }, 1000)
    })
}