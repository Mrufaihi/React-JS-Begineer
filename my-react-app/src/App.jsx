// Explain this function in simple terms:
// imports
import List from './components/List';

function App() {
  //Props

  const arrayFruit = [
    //when we delete this arr our code will break
    // array of objects(fruits)
    { name: 'apple', id: 1, calories: 120 },
    { name: 'orange', id: 2, calories: 50 },
    { name: 'watermelon', id: 3, calories: 40 },
    { name: 'coconut', id: 4, calories: 15 },
    { name: 'peach', id: 5, calories: 55 },
  ];

  const arrayVeges = [
    // array of objects(Veges)
    { name: 'carrot', id: 1, calories: 120 },
    { name: 'tomato', id: 2, calories: 50 },
    { name: 'cucumber', id: 3, calories: 40 },
    { name: 'melon', id: 4, calories: 15 },
    { name: 'onion', id: 5, calories: 55 },
  ];

  const emojies = [
    // emoji array of object
    { icon: '👍', id: 1 },
    { icon: '😢', id: 2 },
    { icon: '✨', id: 3 },
    { icon: '😎', id: 4 },
  ];

  //items is called a 'key'
  return (
    <>
      {/** if true && truthy then return*/}
      {arrayFruit.length > 0 && <List items={arrayFruit} emoji={emojies} />}
      {/** if true return : otherwise null */}
      {arrayVeges.length > 0 ? (
        <List items={arrayVeges} category={'catgory'} emoji={emojies} />
      ) : null}
    </>
  );
}
// propType;

export default App;
