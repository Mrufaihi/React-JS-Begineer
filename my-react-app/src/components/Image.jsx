function Image() {
  // hide img when clicked
  const imageClick = (e) => (e.target.style.display = 'none');
  const imageSrc = './src/assets/react.svg';

  return (
    <>
      <img onClick={(e) => imageClick(e)} src={imageSrc} alt="" />
    </>
  );
}
export default Image;
