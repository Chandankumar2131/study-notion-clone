import React from 'react';


const courses = [
   {
    title: "MERN Stack",
    description: "Master MongoDB, Express, React, and Node.js to build full-stack web applications.",
    image: "https://cdn.worldvectorlogo.com/logos/mern.svg",
    price: "₹999",
  },
  {
    title: "Java Development",
    description: "Learn core Java and build scalable backend applications and Android apps.",
    image: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
    price: "₹799",
  },
  {
    title: "PHP & MySQL",
    description: "Create dynamic websites using PHP and manage databases with MySQL.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    price: "₹599",
  },
  {
    title: "AWS Cloud",
    description: "Get hands-on with AWS services and learn how to deploy cloud applications.",
    image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    price: "₹899",
  },
  {
    title: "Cyber Security",
    description: "Understand ethical hacking, penetration testing, and protecting systems.",
    image: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
    price: "₹749",
  },
  {
    title: "Python Programming",
    description: "Start from the basics of Python and grow to data science, automation, and web development.",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    price: "₹599",
  },
  {
    title: "React Native",
    description: "Build powerful mobile apps for Android and iOS using React Native framework.",
    image: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    price: "₹699",
  },
  {
    title: "UI/UX Design",
    description: "Learn the art of designing user-centric, intuitive, and visually appealing interfaces.",
    image: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
    price: "₹499",
  },
  {
    title: "DevOps Essentials",
    description: "Understand CI/CD, Docker, Kubernetes, and streamline development workflows.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    price: "₹899",
  },
  {
    title: "Machine Learning",
    description: "Explore supervised and unsupervised learning using Python and real-world datasets.",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149640.png",
    price: "₹1099",
  },
  {
    title: "Blockchain Basics",
    description: "Dive into blockchain, smart contracts, and cryptocurrency fundamentals.",
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    price: "₹999",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Crack coding interviews with strong DSA knowledge in Java, C++, or Python.",
    image: "https://cdn-icons-png.flaticon.com/512/2306/2306175.png",
    price: "₹1099",
  },
];

export default function Courses() {
  return (
    <div className="bg-gray-900 text-white px-6 py-12 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Explore Our Popular Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:scale-105 transform transition-all duration-300 flex flex-col items-center"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-20 h-20 object-contain mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-center mb-2">{course.title}</h3>
            <p className="text-gray-400 text-center">{course.description}</p>
            <p className="text-green-400 text-center mt-3 text-lg font-semibold">
              Price: {course.price}
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition duration-200"
            
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
