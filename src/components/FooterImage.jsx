/* eslint-disable react/prop-types */
function FooterImage({ imageUrl }) {
  return (
    <div className="mb-6 lg:mb-0">
      <img src={imageUrl} className="w-full h-full rounded-md shadow-lg" />
    </div>
  );
}

export default FooterImage;
