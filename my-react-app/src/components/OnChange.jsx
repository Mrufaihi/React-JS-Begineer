//imports
import { useState } from 'react';

function OnChange() {
  //Stateful Vars
  const [name, setName] = useState('');
  function handleNameChange(event) {
    setName(event.target.value); //Event in input, Target its new value on change, Update name.
  }

  const [quantity, setQuantity] = useState(1);
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  const [comment, setComment] = useState('1');
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  const [payment, setPayment] = useState('');
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  const [shipping, setShipping] = useState('Delivery');
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      {/* FORM */}
      <input type="text" onChange={handleNameChange} placeholder="Name" />
      <p>Name: {name}</p>
      {/* FORM */}
      <input
        type="number"
        onChange={handleQuantityChange}
        placeholder={quantity}
      />
      <p>Quantity: {quantity}</p>
      {/* FORM  */}
      <textarea
        name=""
        id=""
        onChange={handleCommentChange}
        placeholder="Leave Delivery Instructions"
      ></textarea>
      <p>Comment: {comment}</p>
      {/* FORM */}
      <select onChange={handlePaymentChange}>
        <option value="">Select Payement Method</option>
        <option value="Visa">Visa Card</option>
        <option value="Credit">Credit Card</option>
        <option value="Gift">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>
      {/* FORM */}
      <input
        name="ship"
        type="radio"
        value="Delivery"
        onChange={handleShippingChange}
        checked={'Delivery' === shipping} //static :checked="True"❌ stateful: if shipping === Value of this radio then ✅
      />
      <label>Delivery</label>

      <br />

      <input
        name="ship"
        value="Pickup"
        type="radio"
        onChange={handleShippingChange}
        checked={'Pickup' === shipping} //static :checked="True"❌ stateful: if shipping === Value of this radio then ✅
      />
      <label>Pick up</label>

      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default OnChange;
