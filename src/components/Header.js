export default function Header({ image }) {
  return (
    <>
      <header className="flex items-center ml-10 mb-10 mt-10">
      {image && (
          <img
            src={image}
            alt="Uploaded Logo"
            id="logo"
            className="w-16 h-16 mr-auto" // Add ml-auto to push the logo to the right
          />
        )}
        <h2 className="font-bold uppercase tracking-wide text-4xl mr-10">
          Invoice
        </h2>
      </header>
    </>
  );
}
