export default function Contact() {
  return (
    <div className="bg-gray-900 text-white py-16 px-8 lg:px-32 text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>

      <a
        href="mailto:youremail@example.com"
        className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Say Hello
      </a>
    </div>
  );
}
