const Card = ({ children, title, imageUrl }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        {imageUrl && (
          <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        )}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-700 mt-4">{children}</p>
        </div>
      </div>
    );
  };
  
  export default Card;