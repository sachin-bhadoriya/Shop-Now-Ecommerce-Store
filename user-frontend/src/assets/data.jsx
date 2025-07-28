import adBanner1 from "./images/adBanner1.png"
import adBanner2 from "./images/adBanner2.png"
import adBanner3 from "./images/adBanner3.png"
import adBanner4 from "./images/adBanner4.png"
import adBanner5 from "./images/adBanner5.png"


// import images
import fashionIcons from './images/fashion.png'
import electronicsIcons from './images/gadgets.png'
import bagsIcons from './images/bags.png'
import footwearIcons from './images/footwear.png'
import groceryIcons from './images/grocery.png'
import beautyIcons from './images/beauty.png'
import wellnessIcons from './images/wellness.png'
import jewellaryIcons from './images/jewellary.png'
import logoLandscape from './images/logoLandscape.png'
import logoSquare from './images/logoSquare.png'
import carouselOne from './images/carouselOne.jpg'
import carouselTwo from './images/carouselTwo.jpg'
import carouselThree from './images/carouselThree.jpg'
import carouselFour from './images/carouselFour.jpg'

export const logo = {
    logoLandscape,
    logoSquare,
}

export const images = {
    carouselOne,
    carouselTwo,
    carouselThree,
    carouselFour,
};

export const catCards = [
    { id: 1, img: fashionIcons, text: "Fashion"},
    { id: 2, img: electronicsIcons, text: "Electronics"},
    { id: 3, img: bagsIcons, text: "Bags"},
    { id: 4, img: footwearIcons, text: "FootWear"},
    { id: 5, img: groceryIcons, text: "Grocery"},
    { id: 6, img: beautyIcons, text: "Beauty"},
    { id: 7, img: wellnessIcons, text: "Wellness"},
    { id: 8, img: jewellaryIcons, text: "Jewellary"},
]

export const testimonial = [
    { id: 1, image: "https://picsum.photos/300", name: 'John Doe', testimonialMsg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
    { id: 2, image: "https://picsum.photos/301", name: 'Lorem Dev', testimonialMsg: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 4 },
    { id: 3, image: "https://picsum.photos/302", name: 'Ipsum Singh', testimonialMsg: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", rating: 5 },
    { id: 4, image: "https://picsum.photos/303", name: 'Shivam Singh', testimonialMsg: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.", rating: 5 },
    { id: 5, image: "https://picsum.photos/304", name: 'Mr. Test', testimonialMsg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", rating: 4 },
];

export const blogs = [
    { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: adBanner1 },
    { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: adBanner1 },
    { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: adBanner1 },
    { id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: adBanner1 },
    { id: 5, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: adBanner1 },
];

export const discountCard = [
    {id: 1, title: "lorem ipsum lorem ipusm lorem", amount: "999", image: adBanner1},
    {id: 2, title: "lorem ipsum lorem ipusm lorem", amount: "850", image: adBanner2},
    {id: 3, title: "lorem ipsum lorem ipusm lorem", amount: "600", image: adBanner3},
    {id: 4, title: "lorem ipsum lorem ipusm lorem", amount: "799", image: adBanner4},
    {id: 5, title: "lorem ipsum lorem ipusm lorem", amount: "586", image: adBanner5},
];

export const electronicsProducts = [
    {
        id: "Ele-1",
        title: "Bluetooth Speaker",
        price: 379,
        description: "High-quality bluetooth speaker perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Bluetooth%20Speaker"
    },
    {
        id: "Ele-2",
        title: "Smartphone",
        price: 909,
        description: "High-quality smartphone perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Smartphone"
    },
    {
        id: "Ele-3",
        title: "Smartwatch",
        price: 1600,
        description: "High-quality smartwatch perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Smartwatch"
    },
    {
        id: "Ele-4",
        title: "Laptop",
        price: 3499,
        description: "High-quality laptop perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Laptop"
    },
    {
        id: "Ele-5",
        title: "Tablet",
        price: 2549,
        description: "High-quality tablet perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Tablet"
    },
    {
        id: "Ele-6",
        title: "Noise Cancelling Headphones",
        price: 1825,
        description: "High-quality noise cancelling headphones perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Headphones"
    },
    {
        id: "Ele-7",
        title: "Wireless Earbuds",
        price: 999,
        description: "High-quality wireless earbuds perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Earbuds"
    },
    {
        id: "Ele-8",
        title: "Smart LED TV",
        price: 3999,
        description: "High-quality smart LED TV perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?LED%20TV"
    },
    {
        id: "Ele-9",
        title: "Gaming Mouse",
        price: 499,
        description: "High-quality gaming mouse perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Gaming%20Mouse"
    },
    {
        id: "Ele-10",
        title: "Mechanical Keyboard",
        price: 1299,
        description: "High-quality mechanical keyboard perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Mechanical%20Keyboard"
    },
    {
        id: "Ele-11",
        title: "Drone Camera",
        price: 2999,
        description: "High-quality drone camera perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Drone"
    },
    {
        id: "Ele-12",
        title: "Fitness Tracker",
        price: 899,
        description: "High-quality fitness tracker perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Fitness%20Tracker"
    },
    {
        id: "Ele-13",
        title: "Power Bank",
        price: 699,
        description: "High-quality power bank perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Power%20Bank"
    },
    {
        id: "Ele-14",
        title: "Action Camera",
        price: 1749,
        description: "High-quality action camera perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?Action%20Camera"
    },
    {
        id: "Ele-15",
        title: "USB-C Charger",
        price: 349,
        description: "High-quality USB-C charger perfect for daily use.",
        category: "Electronics",
        image: "https://source.unsplash.com/featured/300x300/?USB%20Charger"
    }
];

export const fashionProducts = [
    {
        id: "Fas-1",
        title: "Men Opaque Casual Shirt",
        price: 799,
        description: "Stylish opaque casual shirt for men with premium cotton feel.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?men%20shirt"
    },
    {
        id: "Fas-2",
        title: "Women's Floral Maxi Dress",
        price: 1149,
        description: "Elegant floral maxi dress perfect for summer outings.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?floral%20dress"
    },
    {
        id: "Fas-3",
        title: "Men Slim Fit Denim Jeans",
        price: 999,
        description: "Comfortable slim-fit jeans with a modern look.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?men%20jeans"
    },
    {
        id: "Fas-4",
        title: "Women's High Waist Trousers",
        price: 899,
        description: "Trendy high waist trousers for formal and casual occasions.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?womens%20pants"
    },
    {
        id: "Fas-5",
        title: "Unisex Oversized Hoodie",
        price: 1099,
        description: "Oversized fleece hoodie, perfect for cozy wear.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?hoodie"
    },
    {
        id: "Fas-6",
        title: "Men's Leather Jacket",
        price: 2499,
        description: "Classic biker-style leather jacket with rugged finish.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?leather%20jacket"
    },
    {
        id: "Fas-7",
        title: "Women's Embroidered Kurti",
        price: 699,
        description: "Elegant embroidered kurti with fine cotton blend.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?kurti"
    },
    {
        id: "Fas-8",
        title: "Men's Polo T-shirt",
        price: 549,
        description: "Comfortable polo t-shirt for everyday wear.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?polo%20tshirt"
    },
    {
        id: "Fas-9",
        title: "Women's Crop Top",
        price: 449,
        description: "Trendy crop top to elevate your casual look.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?crop%20top"
    },
    {
        id: "Fas-10",
        title: "Men's Formal Blazer",
        price: 1899,
        description: "Smart-fit blazer perfect for business and events.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?men%20blazer"
    },
    {
        id: "Fas-11",
        title: "Women's Ankle Length Skirt",
        price: 799,
        description: "Elegant ankle-length skirt for ethnic and fusion wear.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?skirt"
    },
    {
        id: "Fas-12",
        title: "Unisex Bomber Jacket",
        price: 1599,
        description: "Trendy bomber jacket for winter streetwear fashion.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?bomber%20jacket"
    },
    {
        id: "Fas-13",
        title: "Women's Designer Saree",
        price: 1349,
        description: "Graceful saree with zari border and blouse piece.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?saree"
    },
    {
        id: "Fas-14",
        title: "Men's Ethnic Kurta Set",
        price: 1199,
        description: "Traditional kurta set ideal for festivals and weddings.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?kurta"
    },
    {
        id: "Fas-15",
        title: "Women's Longline Coat",
        price: 1799,
        description: "Winter-ready woolen coat with a chic silhouette.",
        category: "Fashion",
        image: "https://source.unsplash.com/featured/300x300/?long%20coat"
    }
];

export const footwearProducts = [
    {
        id: "Foot-1",
        title: "Men's Running Shoes",
        price: 1299,
        description: "Durable and comfortable running shoes for men.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?running%20shoes"
    },
    {
        id: "Foot-2",
        title: "Women's Casual Sneakers",
        price: 999,
        description: "Trendy sneakers perfect for casual outings.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?womens%20sneakers"
    },
    {
        id: "Foot-3",
        title: "Kids Sandals",
        price: 549,
        description: "Comfortable and safe sandals for children.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?kids%20sandals"
    },
    {
        id: "Foot-4",
        title: "Leather Formal Shoes",
        price: 1599,
        description: "Classic leather shoes for business and formal occasions.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?formal%20shoes"
    },
    {
        id: "Foot-5",
        title: "Men's Loafers",
        price: 1199,
        description: "Stylish loafers perfect for casual and office wear.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?men%20loafers"
    },
    {
        id: "Foot-6",
        title: "Women's Heels",
        price: 1099,
        description: "Elegant heels to elevate your party look.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?womens%20heels"
    },
    {
        id: "Foot-7",
        title: "Flip Flops",
        price: 299,
        description: "Lightweight and comfy flip flops for daily use.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?flip%20flops"
    },
    {
        id: "Foot-8",
        title: "Men's Sports Shoes",
        price: 1399,
        description: "High-performance shoes for running and gym workouts.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?sports%20shoes"
    },
    {
        id: "Foot-9",
        title: "Women's Canvas Shoes",
        price: 899,
        description: "Casual canvas shoes with breathable fabric.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?canvas%20shoes"
    },
    {
        id: "Foot-10",
        title: "Work Boots",
        price: 1899,
        description: "Heavy-duty boots built for protection and support.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?work%20boots"
    },
    {
        id: "Foot-11",
        title: "Hiking Shoes",
        price: 1799,
        description: "Rugged shoes for outdoor adventure and trekking.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?hiking%20shoes"
    },
    {
        id: "Foot-12",
        title: "Slip-on Shoes",
        price: 749,
        description: "Easy to wear slip-on shoes for casual lifestyle.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?slipon%20shoes"
    },
    {
        id: "Foot-13",
        title: "Ankle Boots",
        price: 1499,
        description: "Stylish ankle boots with a trendy finish.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?ankle%20boots"
    },
    {
        id: "Foot-14",
        title: "Crocs Clogs",
        price: 649,
        description: "Comfy clogs perfect for indoor and outdoor use.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?crocs"
    },
    {
        id: "Foot-15",
        title: "Gym Shoes",
        price: 1199,
        description: "Flexible gym shoes designed for training sessions.",
        category: "Footwear",
        image: "https://source.unsplash.com/featured/300x300/?gym%20shoes"
    }
];

export const groceryProducts = [
    {
        id: "Gro-1",
        title: "Fresh Bananas (1 dozen)",
        price: 60,
        description: "Sweet and ripe bananas perfect for daily consumption.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?bananas"
    },
    {
        id: "Gro-2",
        title: "Organic Brown Rice (1 kg)",
        price: 120,
        description: "Healthy and organic brown rice sourced from farms.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?brown%20rice"
    },
    {
        id: "Gro-3",
        title: "Fresh Tomatoes (1 kg)",
        price: 40,
        description: "Juicy and fresh tomatoes for cooking and salads.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?tomatoes"
    },
    {
        id: "Gro-4",
        title: "Packaged Wheat Flour (5 kg)",
        price: 250,
        description: "Fine quality wheat flour for all your baking needs.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?wheat%20flour"
    },
    {
        id: "Gro-5",
        title: "Fresh Apples (1 kg)",
        price: 150,
        description: "Crisp and juicy apples, perfect for snacking.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?apples"
    },
    {
        id: "Gro-6",
        title: "Cooking Oil (1 liter)",
        price: 180,
        description: "Pure and refined cooking oil for everyday use.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?cooking%20oil"
    },
    {
        id: "Gro-7",
        title: "Sugar (1 kg)",
        price: 50,
        description: "Fine granulated sugar for baking and sweetening.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?sugar"
    },
    {
        id: "Gro-8",
        title: "Fresh Onions (1 kg)",
        price: 35,
        description: "Crisp and pungent onions for all dishes.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?onions"
    },
    {
        id: "Gro-9",
        title: "Organic Lentils (1 kg)",
        price: 90,
        description: "High-quality lentils full of protein and fiber.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?lentils"
    },
    {
        id: "Gro-10",
        title: "Tea Powder (250 g)",
        price: 120,
        description: "Strong and aromatic tea powder for your perfect cup.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?tea"
    },
    {
        id: "Gro-11",
        title: "Salt (1 kg)",
        price: 30,
        description: "Pure and fine salt for cooking and seasoning.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?salt"
    },
    {
        id: "Gro-12",
        title: "Fresh Coriander (bunch)",
        price: 20,
        description: "Fresh coriander leaves to add flavor to dishes.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?coriander"
    },
    {
        id: "Gro-13",
        title: "Packaged Butter (200 g)",
        price: 150,
        description: "Creamy butter for cooking and baking needs.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?butter"
    },
    {
        id: "Gro-14",
        title: "Eggs (12 pcs)",
        price: 120,
        description: "Fresh farm eggs full of protein.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?eggs"
    },
    {
        id: "Gro-15",
        title: "Fresh Green Chilies (100 g)",
        price: 25,
        description: "Spicy and fresh green chilies for cooking.",
        category: "Grocery",
        image: "https://source.unsplash.com/featured/300x300/?green%20chilies"
    }
];

export const beautyProducts = [
    {
        id: "Bea-1",
        title: "Lipstick - Matte Red",
        price: 499,
        description: "Long-lasting matte red lipstick for a bold look.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?lipstick"
    },
    {
        id: "Bea-2",
        title: "Face Moisturizer - Hydrating",
        price: 799,
        description: "Hydrating face moisturizer suitable for all skin types.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?face%20moisturizer"
    },
    {
        id: "Bea-3",
        title: "Eyeliner Pencil - Black",
        price: 299,
        description: "Smooth black eyeliner for perfect eye definition.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?eyeliner"
    },
    {
        id: "Bea-4",
        title: "Nail Polish - Sparkling Pink",
        price: 349,
        description: "Sparkling pink nail polish with quick-dry formula.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?nail%20polish"
    },
    {
        id: "Bea-5",
        title: "Face Wash - Aloe Vera",
        price: 399,
        description: "Gentle aloe vera face wash for fresh skin.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?face%20wash"
    },
    {
        id: "Bea-6",
        title: "Hair Serum - Argan Oil",
        price: 899,
        description: "Nourishing hair serum enriched with argan oil.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?hair%20serum"
    },
    {
        id: "Bea-7",
        title: "Compact Powder - Natural Beige",
        price: 599,
        description: "Smooth compact powder with natural beige shade.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?compact%20powder"
    },
    {
        id: "Bea-8",
        title: "Makeup Remover Wipes",
        price: 349,
        description: "Gentle makeup remover wipes for all skin types.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?makeup%20remover"
    },
    {
        id: "Bea-9",
        title: "Perfume - Floral Essence",
        price: 1299,
        description: "Refreshing floral scent perfume for everyday use.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?perfume"
    },
    {
        id: "Bea-10",
        title: "Body Lotion - Shea Butter",
        price: 699,
        description: "Moisturizing body lotion with shea butter extract.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?body%20lotion"
    },
    {
        id: "Bea-11",
        title: "Eyeshadow Palette - Warm Tones",
        price: 1099,
        description: "Beautiful warm tones eyeshadow palette for all occasions.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?eyeshadow"
    },
    {
        id: "Bea-12",
        title: "Lip Balm - Vanilla",
        price: 249,
        description: "Hydrating lip balm with vanilla flavor.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?lip%20balm"
    },
    {
        id: "Bea-13",
        title: "Face Scrub - Lemon & Mint",
        price: 549,
        description: "Refreshing face scrub with lemon and mint extracts.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?face%20scrub"
    },
    {
        id: "Bea-14",
        title: "Hair Shampoo - Anti-Dandruff",
        price: 799,
        description: "Effective anti-dandruff shampoo for healthy scalp.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?shampoo"
    },
    {
        id: "Bea-15",
        title: "Makeup Brush Set",
        price: 1399,
        description: "Complete makeup brush set for flawless application.",
        category: "Beauty",
        image: "https://source.unsplash.com/featured/300x300/?makeup%20brush"
    }
];

export const wellnessProducts = [
    {
        id: "Wel-1",
        title: "Yoga Mat",
        price: 999,
        description: "Non-slip yoga mat for comfortable workouts and meditation.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?yoga%20mat"
    },
    {
        id: "Wel-2",
        title: "Essential Oils Set",
        price: 1499,
        description: "Set of 6 essential oils for aromatherapy and relaxation.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?essential%20oils"
    },
    {
        id: "Wel-3",
        title: "Herbal Tea Pack",
        price: 399,
        description: "Organic herbal tea blend for detox and wellness.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?herbal%20tea"
    },
    {
        id: "Wel-4",
        title: "Massage Roller",
        price: 799,
        description: "Handheld massage roller to relieve muscle tension.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?massage%20roller"
    },
    {
        id: "Wel-5",
        title: "Meditation Cushion",
        price: 1299,
        description: "Comfortable cushion designed to support meditation posture.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?meditation%20cushion"
    },
    {
        id: "Wel-6",
        title: "Detox Foot Pads",
        price: 499,
        description: "Natural foot pads to aid in detoxification during sleep.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?detox%20foot%20pads"
    },
    {
        id: "Wel-7",
        title: "Vitamin C Supplements",
        price: 699,
        description: "Boost immunity with daily vitamin C tablets.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?vitamin%20c"
    },
    {
        id: "Wel-8",
        title: "Resistance Bands",
        price: 899,
        description: "Set of resistance bands for strength training and flexibility.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?resistance%20bands"
    },
    {
        id: "Wel-9",
        title: "Sleep Mask",
        price: 349,
        description: "Soft and comfortable sleep mask to improve rest quality.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?sleep%20mask"
    },
    {
        id: "Wel-10",
        title: "Water Bottle - Infuser",
        price: 799,
        description: "Water bottle with fruit infuser for refreshing hydration.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?water%20bottle"
    },
    {
        id: "Wel-11",
        title: "Herbal Face Mask",
        price: 599,
        description: "Natural herbal face mask for glowing skin.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?herbal%20face%20mask"
    },
    {
        id: "Wel-12",
        title: "Foam Roller",
        price: 1099,
        description: "Foam roller for muscle recovery and pain relief.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?foam%20roller"
    },
    {
        id: "Wel-13",
        title: "Green Superfood Powder",
        price: 1599,
        description: "Powdered green superfoods to boost nutrition intake.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?green%20superfood"
    },
    {
        id: "Wel-14",
        title: "Organic Honey (500g)",
        price: 699,
        description: "Pure organic honey for natural sweetness and health benefits.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?organic%20honey"
    },
    {
        id: "Wel-15",
        title: "Calming Herbal Bath Salts",
        price: 549,
        description: "Relaxing bath salts with calming herbal extracts.",
        category: "Wellness",
        image: "https://source.unsplash.com/featured/300x300/?bath%20salts"
    }
];

export const jewelryProducts = [
    {
        id: "Jew-1",
        title: "Gold Plated Necklace",
        price: 2999,
        description: "Elegant gold plated necklace perfect for special occasions.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?gold%20necklace"
    },
    {
        id: "Jew-2",
        title: "Silver Hoop Earrings",
        price: 1499,
        description: "Classic silver hoop earrings that go with every outfit.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?silver%20hoop%20earrings"
    },
    {
        id: "Jew-3",
        title: "Pearl Bracelet",
        price: 1999,
        description: "Beautiful pearl bracelet adding a classy touch to your style.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?pearl%20bracelet"
    },
    {
        id: "Jew-4",
        title: "Diamond Stud Earrings",
        price: 4999,
        description: "Sparkling diamond stud earrings for elegant looks.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?diamond%20earrings"
    },
    {
        id: "Jew-5",
        title: "Rose Gold Ring",
        price: 3499,
        description: "Stylish rose gold ring with intricate designs.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?rose%20gold%20ring"
    },
    {
        id: "Jew-6",
        title: "Charm Anklet",
        price: 999,
        description: "Cute charm anklet perfect for casual wear.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?anklet"
    },
    {
        id: "Jew-7",
        title: "Platinum Chain",
        price: 5999,
        description: "Durable and shining platinum chain for daily wear.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?platinum%20chain"
    },
    {
        id: "Jew-8",
        title: "Emerald Pendant",
        price: 4299,
        description: "Stunning emerald pendant with silver chain.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?emerald%20pendant"
    },
    {
        id: "Jew-9",
        title: "Gold Bangles Set (3 pcs)",
        price: 3999,
        description: "Traditional gold bangles set for festive occasions.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?gold%20bangles"
    },
    {
        id: "Jew-10",
        title: "Turquoise Earrings",
        price: 2599,
        description: "Colorful turquoise earrings for trendy fashion.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?turquoise%20earrings"
    },
    {
        id: "Jew-11",
        title: "Sapphire Ring",
        price: 4799,
        description: "Elegant sapphire ring with detailed craftsmanship.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?sapphire%20ring"
    },
    {
        id: "Jew-12",
        title: "Diamond Tennis Bracelet",
        price: 6999,
        description: "Sparkling diamond tennis bracelet for luxury look.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?diamond%20bracelet"
    },
    {
        id: "Jew-13",
        title: "Vintage Brooch",
        price: 1299,
        description: "Classic vintage brooch for stylish accessories.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?brooch"
    },
    {
        id: "Jew-14",
        title: "Gold Nose Ring",
        price: 899,
        description: "Traditional gold nose ring with fine detailing.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?nose%20ring"
    },
    {
        id: "Jew-15",
        title: "Beaded Necklace",
        price: 1499,
        description: "Colorful beaded necklace to enhance casual outfits.",
        category: "Jewelry",
        image: "https://source.unsplash.com/featured/300x300/?beaded%20necklace"
    }
];

export const bagProducts = [
    {
        id: "Bag-1",
        title: "Leather Backpack",
        price: 3499,
        description: "Premium leather backpack with multiple compartments.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?leather%20backpack"
    },
    {
        id: "Bag-2",
        title: "Tote Bag",
        price: 1999,
        description: "Spacious and stylish tote bag for daily use.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?tote%20bag"
    },
    {
        id: "Bag-3",
        title: "Messenger Bag",
        price: 2599,
        description: "Classic messenger bag perfect for office and casual outings.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?messenger%20bag"
    },
    {
        id: "Bag-4",
        title: "Duffel Bag",
        price: 2899,
        description: "Durable duffel bag ideal for gym and travel.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?duffel%20bag"
    },
    {
        id: "Bag-5",
        title: "Clutch Purse",
        price: 1499,
        description: "Elegant clutch purse for parties and events.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?clutch%20purse"
    },
    {
        id: "Bag-6",
        title: "Laptop Sleeve",
        price: 999,
        description: "Protective laptop sleeve with soft cushioning.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?laptop%20sleeve"
    },
    {
        id: "Bag-7",
        title: "Crossbody Bag",
        price: 2199,
        description: "Compact crossbody bag with adjustable strap.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?crossbody%20bag"
    },
    {
        id: "Bag-8",
        title: "Hiking Backpack",
        price: 3999,
        description: "Rugged hiking backpack with extra storage and support.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?hiking%20backpack"
    },
    {
        id: "Bag-9",
        title: "Beach Bag",
        price: 1799,
        description: "Lightweight beach bag made with waterproof material.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?beach%20bag"
    },
    {
        id: "Bag-10",
        title: "Wallet - Leather",
        price: 1299,
        description: "Classic leather wallet with multiple card slots.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?leather%20wallet"
    },
    {
        id: "Bag-11",
        title: "Drawstring Bag",
        price: 799,
        description: "Casual drawstring bag for light essentials.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?drawstring%20bag"
    },
    {
        id: "Bag-12",
        title: "Fanny Pack",
        price: 899,
        description: "Trendy fanny pack for hands-free convenience.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?fanny%20pack"
    },
    {
        id: "Bag-13",
        title: "Designer Handbag",
        price: 5499,
        description: "Luxury designer handbag for special occasions.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?designer%20handbag"
    },
    {
        id: "Bag-14",
        title: "Travel Backpack",
        price: 4299,
        description: "Spacious travel backpack with multiple pockets.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?travel%20backpack"
    },
    {
        id: "Bag-15",
        title: "Cosmetic Bag",
        price: 699,
        description: "Compact cosmetic bag to organize your makeup essentials.",
        category: "Bags",
        image: "https://source.unsplash.com/featured/300x300/?cosmetic%20bag"
    }
];

export const productItemsDetails = [
  { companyName: "Raymond", productTitle: "Slim Fit Formal Shirt", productRating: "4.5", cancelPriceProduct: "1,999.00", activePriceProduct: "1,299.00", productImageLink: "https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" },
  { companyName: "H&M", productTitle: "Cotton T-Shirt for Men", productRating: "4.0", cancelPriceProduct: "999.00", activePriceProduct: "749.00", productImageLink: "https://picsum.photos/id/238/200/300" },
  { companyName: "ZARA", productTitle: "Men's Denim Jacket", productRating: "4.7", cancelPriceProduct: "3,499.00", activePriceProduct: "2,999.00", productImageLink: "https://picsum.photos/id/239/200/300" },
  { companyName: "Allen Solly", productTitle: "Casual Printed Shirt", productRating: "4.2", cancelPriceProduct: "1,699.00", activePriceProduct: "1,299.00", productImageLink: "https://picsum.photos/id/240/200/300" },
  { companyName: "Levi's", productTitle: "Men Blue Slim Jeans", productRating: "4.8", cancelPriceProduct: "3,199.00", activePriceProduct: "2,499.00", productImageLink: "https://picsum.photos/id/241/200/300" },
  { companyName: "Nike", productTitle: "Running Sports T-shirt", productRating: "4.6", cancelPriceProduct: "1,500.00", activePriceProduct: "1,199.00", productImageLink: "https://picsum.photos/id/242/200/300" },
  { companyName: "Puma", productTitle: "Black Training Shorts", productRating: "4.4", cancelPriceProduct: "1,299.00", activePriceProduct: "999.00", productImageLink: "https://picsum.photos/id/243/200/300" },
  { companyName: "UCB", productTitle: "Men Solid Polo T-shirt", productRating: "4.1", cancelPriceProduct: "1,299.00", activePriceProduct: "899.00", productImageLink: "https://picsum.photos/id/244/200/300" },
  { companyName: "Jack & Jones", productTitle: "Stylish Hoodie for Men", productRating: "4.3", cancelPriceProduct: "2,499.00", activePriceProduct: "1,999.00", productImageLink: "https://picsum.photos/id/245/200/300" },
  { companyName: "HRX", productTitle: "Active Wear T-shirt", productRating: "4.0", cancelPriceProduct: "1,199.00", activePriceProduct: "799.00", productImageLink: "https://picsum.photos/id/246/200/300" },
  { companyName: "Roadster", productTitle: "Checked Casual Shirt", productRating: "4.2", cancelPriceProduct: "1,299.00", activePriceProduct: "999.00", productImageLink: "https://picsum.photos/id/247/200/300" },
  { companyName: "Highlander", productTitle: "Slim Fit Cotton Shirt", productRating: "4.5", cancelPriceProduct: "1,699.00", activePriceProduct: "1,199.00", productImageLink: "https://picsum.photos/id/248/200/300" },
  { companyName: "Wrangler", productTitle: "Navy Blue Jeans", productRating: "4.6", cancelPriceProduct: "2,999.00", activePriceProduct: "2,399.00", productImageLink: "https://picsum.photos/id/249/200/300" },
  { companyName: "Zivame", productTitle: "Relaxed Fit Lounge Shirt", productRating: "4.1", cancelPriceProduct: "1,799.00", activePriceProduct: "1,299.00", productImageLink: "https://picsum.photos/id/250/200/300" },
  { companyName: "Van Heusen", productTitle: "Premium Formal Shirt", productRating: "4.8", cancelPriceProduct: "2,499.00", activePriceProduct: "1,999.00", productImageLink: "https://picsum.photos/id/251/200/300" },
  { companyName: "Peter England", productTitle: "Men’s Casual Shirt", productRating: "4.3", cancelPriceProduct: "1,499.00", activePriceProduct: "1,199.00", productImageLink: "https://picsum.photos/id/252/200/300" },
  { companyName: "Mufti", productTitle: "Khaki Casual Trousers", productRating: "4.0", cancelPriceProduct: "2,299.00", activePriceProduct: "1,699.00", productImageLink: "https://picsum.photos/id/253/200/300" },
  { companyName: "Reebok", productTitle: "Workout T-shirt", productRating: "4.2", cancelPriceProduct: "1,299.00", activePriceProduct: "999.00", productImageLink: "https://picsum.photos/id/254/200/300" },
  { companyName: "Spykar", productTitle: "Denim Casual Shirt", productRating: "4.1", cancelPriceProduct: "1,899.00", activePriceProduct: "1,399.00", productImageLink: "https://picsum.photos/id/255/200/300" },
  { companyName: "Being Human", productTitle: "Logo Printed T-shirt", productRating: "4.3", cancelPriceProduct: "1,299.00", activePriceProduct: "949.00", productImageLink: "https://picsum.photos/id/256/200/300" }
];
