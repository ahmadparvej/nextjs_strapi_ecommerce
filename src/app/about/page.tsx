export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg mb-4">
            Welcome to our e-commerce store! We are dedicated to providing you with the best shopping experience possible. Our team works tirelessly to bring you a wide selection of high-quality products at competitive prices.
          </p>
          <p className="text-lg mb-4">
            Our mission is to offer you a seamless and enjoyable shopping experience, with a focus on customer satisfaction. We believe in putting our customers first, and we are committed to meeting your needs and exceeding your expectations.
          </p>
          <p className="text-lg mb-4">
            Whether you are looking for the latest fashion trends, high-tech gadgets, or everyday essentials, we have something for everyone. Thank you for choosing us as your trusted shopping destination.
          </p>
          <p className="text-lg">
            If you have any questions or need assistance, please do not hesitate to contact our friendly customer support team. We are here to help!
          </p>
        </div>
      </div>
    </div>
  );
}
