// Explain this function in simple terms:
//imports
import PropTypes from 'prop-types';

function List(props) {
  //Props
  const itemList = props.items;
  const category = props.category;
  const icons = props.emoji;

  //   itemList.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical Asending
  //   itemList.sort((a, b) => b.name.localeCompare(a.name)); //Alphabetical Decending
  //   itemList.sort((a, b) => a.calories - b.calories); // Calory Decending
  //   Sorted array
  itemList.sort((a, b) => b.calories - a.calories); // Calory Decending

  //   Filtered array
  const highCaloryitem = itemList.filter((item) => item.calories > 40); //filter for calories>40

  //   Mapped array
  const finalList = highCaloryitem.map((item) => (
    <li className="list__item" key={item.id}>
      {icons[0].icon}
      {item.name} : {item.calories}
    </li>
  ));

  return (
    <>
      <ol className="list">
        <h1>{category}</h1>

        {finalList}
      </ol>
    </>
  );
}

// Default values(Like object). so code doesnt break when removed
List.defaultProps = {
  category: 'Category',
  items: [],
  emoji: [{ icon: '😊' }],
};

// set type of props(best practice)
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      //shape for objects{} inside array[]
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

export default List;
