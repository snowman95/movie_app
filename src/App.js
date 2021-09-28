function Food({name, price}){
  return <div>
    <h1>I like {name}</h1>
    <h1>It is {price} \</h1>
  </div>
}

const foodIlike = [
  {key: 1, name: "kimbab", price: 1000},
  {key: 2, name: "noodle", price: 5000},
  {key: 3, name: "chicken", price: 15000},
]

function App() {
  return (
    <div>
      {foodIlike.map(dish => <Food key={dish.id} name={dish.name} price={dish.price} />
      )}
    </div>
  );
}
export default App;
