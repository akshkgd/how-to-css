import Card from './components/Card';
const items = [
  {
    title: "Paneer Butter Masala",
    desc: "Creamy tomato gravy with paneer, flavored with Indian spices.",
    price: 249,
    img: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyfGVufDB8MHwwfHx8Mg%3D%3D",
    ratings: 4.2,
    votes: 2345,
  },
  {
    title: "Vegetable Biryani",
    desc: "Aromatic basmati rice layered with mixed vegetables and mild spices.",
    price: 219,
    img: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyaXlhbml8ZW58MHwwfDB8fHwy", // sample direct Unsplash URL
    ratings: 4.6,
    votes: 3120,
  },
  {
    title: "Margherita Pizza",
    desc: "Classic Italian pizza topped with fresh mozzarella and basil.",
    price: 299,
    img: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHwwfDB8fHwy",
    ratings: 4.7,
    votes: 4278,
  },
  {
    title: "Chole Bhature",
    desc: "Fluffy bhature served with spicy chickpea curry.",
    price: 159,
    img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDB8MHx8fDI%3D",
    ratings: 4.5,
    votes: 1876,
  },
  {
    title: "Masala Dosa",
    desc: "Crispy South Indian dosa filled with spiced potato stuffing.",
    price: 129,
    img: "https://images.unsplash.com/photo-1643268972535-a2b100ff3632?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfDB8MHx8fDI%3D",
    ratings: 4.3,
    votes: 2210,
  },
  {
    title: "Pav Bhaji",
    desc: "Buttery pav served with spiced mashed vegetable curry.",
    price: 99,
    img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGF2JTIwQmhhaml8ZW58MHwwfDB8fHwy",
    ratings: 4.2,
    votes: 3421,
  },
  {
    title: "Dal Makhani",
    desc: "Slow-cooked black lentils in a rich, buttery gravy.",
    price: 179,
    img: "https://images.unsplash.com/photo-1626500155537-93690c24099e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGFsfGVufDB8MHwwfHx8Mg%3D%3D",
    ratings: 4.6,
    votes: 2908,
  },
  {
    title: "Spring Rolls",
    desc: "Crispy fried rolls stuffed with fresh veggies and noodles.",
    price: 149,
    img: "https://images.unsplash.com/photo-1606525437679-037aca74a3e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3ByaW5nJTIwUm9sbHN8ZW58MHwwfDB8fHwy",
    ratings: 4.1,
    votes: 1320,
  },
  {
    title: "Chocolate Brownie",
    desc: "Moist chocolate brownie topped with a scoop of vanilla ice cream.",
    price: 129,
    img: "https://images.unsplash.com/photo-1672867458764-2a04080005fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwQnJvd25pZXxlbnwwfDB8MHx8fDI%3D",
    ratings: 4.8,
    votes: 1875,
  },
  {
    title: "Gulab Jamun",
    desc: "Soft milk-solid dumplings soaked in sugar syrup.",
    price: 89,
    img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3VsYWIlMjBKYW11bnxlbnwwfDB8MHx8fDI%3D",
    ratings: 4.7,
    votes: 2530,
  },
  {
    title: "Chicken Tikka",
    desc: "Tender chicken chunks marinated in spices and grilled to perfection.",
    price: 299,
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hpY2tlbiUyMFRpa2thfGVufDB8MHwwfHx8Mg%3D%3D",
    ratings: 4.6,
    votes: 2980,
  },
  {
    title: "Mango Lassi",
    desc: "Creamy yogurt blended with ripe mangoes and a hint of cardamom.",
    price: 99,
    img: "https://images.unsplash.com/photo-1527406619566-0159590b8540?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFzc2l8ZW58MHwwfDB8fHwy",
    ratings: 4.4,
    votes: 1960,
  },
];
function App() {

  return (
    <>
      

        <div className="flex gap-4 flex-wrap justify-center my-12">
                {
              items.map((item)=> <Card title={item.title} desc={item.desc} price={item.price} img={item.img} ratings={item.ratings} votes={item.votes} /> )
            }
        </div>
        
    </>
  )
}

export default App;
