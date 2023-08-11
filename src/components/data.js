
const Fooddata = [
    {
        id: 1,
        rname: "Massala Theoryy",
        imgdata: "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
        address: "North Indian, Biryani, Mughlai",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1175 + order placed from here recently",
        price: "₹350 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"punjabi",
        description:"Experience the essence of Punjab with our exquisite Punjabi Thali. Indulge in a symphony of flavors featuring rich dal makhani, aromatic paneer dishes, and vibrant sabzis. Accompanied by buttery naan and delectable desserts, our Punjabi Thali offers a journey through the heart of North Indian cuisine."
    },
    {
        id: 2,
        rname: "Jugaadi Adda",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp",
        address: "Street Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 2525 + order placed from here recently",
        price: "₹25 for one",
        rating: "3.9",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"vadapav",
        description:"Discover the true taste of Mumbai with our Vadapav. A delightful combination of spiced potato fritter sandwiched in soft bread, delivering a burst of flavors in every bite. Experience the street food sensation that's both savory and satisfying."
    },
    {
        id: 3,
        rname: "La Milano Pizzeria",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
        address: "Pizza, Fast Food, Pasta",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 650 + order placed from here recently",
        price: "₹70 for one",
        rating: "4.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Pizza",
        description:"Experience a culinary voyage to Italy with our signature La Milano Pizzeria dish. Our wood-fired masterpiece boasts a crispy thin crust topped with a symphony of premium ingredients. Each bite offers a harmonious blend of flavors that dance on your palate. Embark on a gastronomic adventure that's truly bellissimo."
    },
    {
        id: 4,
        rname: "Momoman",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg",
        address: "Momos",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 300 + order placed from here recently",
        price: "₹70 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Momos",
        description:"Bites of Bliss. Our momos are a delectable journey into flavor, meticulously crafted with the finest ingredients. Each bite unveils a burst of authentic taste, offering a fusion of tradition and innovation. Elevate your palate with the delightful essence of Momoman Momos."
    },
    {
        id: 5,
        rname: "Jassi De Parathe",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
        address: "North Indian",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "1050 + order placed from here recently",
        price: "₹210 for one",
        rating: "4.0",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"punjabi",
        description:"Savor the rustic flavors of Punjab with our Punjabi Parathe Saag. Immerse in the authenticity of perfectly cooked parathas paired with nutrient-rich saag. A harmonious blend of taste and tradition awaits, capturing the essence of North Indian cuisine."
    },
    {
        id: 6,
        rname: "Anjoy Latenight Meals",
        imgdata: "https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg",
        address: "Wraps FastFood, Chines",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1100 + order placed from here recently",
        price: "₹100 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Frankie",
        description:"Embrace the night with Our Late Night Meal Frankie. A savory delight that satisfies those midnight cravings. Packed with bold flavors and succulent fillings, each bite is a taste of indulgence. Elevate your evenings with the irresistible charm of our Late Night Meal Frankie."
    },
    {
        id: 7,
        rname: "Hocco Eatery",
        imgdata: "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
        address: "North Indian, Fast Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500 + order placed from here recently",
        price: "₹300 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"punjabi",
        description:"Welcome to Hocco Eatery, where Punjabi flavors come alive. Immerse yourself in the rich tapestry of Punjab's culinary heritage, as we serve up authentic Punjabi dishes with a modern twist. From robust curries to fragrant tandoori delights, every bite tells a story of tradition and innovation. Embark on a flavorful journey at Hocco Eatery, where Punjabi food takes center stage."
    },
    {
        id: 8,
        rname: "Chai Wai",
        imgdata: "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
        address: "Tea, Coffee, Shake, Beverages",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "500 + order placed from here recently",
        price: "₹100 for one",
        rating: "3.2",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Chai",
        description:"Chai Wai: Where every sip tells a story. Immerse yourself in the world of aromatic blends and delightful flavors. From classic to innovative, our curated chai selection caters to every palate. Experience the art of chai-making at Chai Wai, where passion and taste come together in every cup.",
       
    },
    {
        id: 9,
        rname: "HL Frankie",
        imgdata: "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
        address: "Burger, Sandwich, Fast Food",
        delimg: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: "2525 + order placed from here recently",
        price: "₹100 for one",
        rating: "3.8",
        arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
        category:"Frankie",
        description:"HL Frankie Fast Food: Your destination for quick bites done right. Indulge in our mouthwatering array of sandwiches, burgers, and irresistible frankies. Every bite is a burst of flavor, crafted with care and served with speed. Elevate your fast food experience at HL Frankie, where deliciousness meets convenience."
    },
];

export default Fooddata;
     
