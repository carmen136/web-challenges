import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 1338,
      name: '🍓 Strawberry',
      color: 'red',
    },
    {
      id: 1339,
      name: '🥭 Mango',
      color: 'yellow',
    },
    {
      id: 1340,
      name: '🍉 Watermelon',
      color: 'red',
    },
    {
      id: 1341,
      name: '🥝 Kiwi',
      color: 'green',
    }
  ];

  return (
    fruits.map((fruit) => {
      return (
      <div key={fruit.id} className={"app"}>
      <Card color={fruit.color} name={fruit.name} />
    </div>)
    })
  );
}
