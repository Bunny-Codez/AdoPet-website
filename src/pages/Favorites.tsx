import React from "react";
import { motion } from "framer-motion";
import PetGrid from "../components/PetGrid";
import Footer from "../components/Footer";
import { useFavorites } from "../context/FavoritesContext";
import { Pet } from "../components/PetCard";
import { Heart } from "lucide-react";

// Mock data - in a real app, you would fetch these based on favorite IDs
const mockPets: Pet[] = [
  {
    id: "1",
    name: "Max",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Kolkata, West Bengal",
    category: "Dogs",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8va4EPnhLds4Undx2o46oGmiTyEM0K7veg&s",
    ],
  },
  {
    id: "2",
    name: "Bella",
    breed: "Siamese",
    age: "1 year",
    location: "Gurgaon, Haryana",
    category: "Cats",
    images: [
      "https://thumb.photo-ac.com/ea/eaa5f218a7a5d67611d0e2dd9e867033_t.jpeg",
    ],
  },
  {
    id: "3",
    name: "Charlie",
    breed: "Parakeet",
    age: "6 months",
    location: "Dwarka, Delhi ",
    category: "Birds",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03yrSQUcXsHBMjF7aFUvbv7Af-SA-9A37gaf1orapZxl2s1wq2Ng1AX7cuD12sEYEFLc&usqp=CAU",
    ],
  },
  {
    id: "4",
    name: "Lucy",
    breed: "Goldfish",
    age: "1 year",
    location: "New Delhi, Delhi",
    category: "Fish",
    images: ["https://i.ytimg.com/vi/au2oMth6tCo/maxresdefault.jpg"],
  },
  {
    id: "5",
    name: "Oliver",
    breed: "Dwarf Rabbit",
    age: "2 years",
    location: "Mumbai, Maharashtra",
    category: "Rabbits",
    images: [
      "https://thumbs.dreamstime.com/b/indian-white-rabbit-red-eyes-long-ears-indian-white-rabbit-red-eyes-long-ears-214355292.jpg",
    ],
  },
  {
    id: "6",
    name: "Coco",
    breed: "Guinea Pig",
    age: "1 year",
    location: "Bengaluru, Karnataka",
    category: "Other",
    images: [
      "https://www.chessingtongardencentre.co.uk/wp/wp-content/uploads/2022/09/daisy.png",
    ],
  },
  {
    id: "7",
    name: "Buddy",
    breed: "Labrador Retriever",
    age: "3 years",
    location: "Hyderabad, Telangana",
    category: "Dogs",
    images: [
      "https://www.dogsindia.com/images/lab_prasanna_coimbatore_litter2_dam1a_BP_1-2-19.jpg",
    ],
  },
  {
    id: "8",
    name: "Smokey",
    breed: "Persian",
    age: "4 years",
    location: "Chennai, Tamil Nadu",
    category: "Cats",
    images: ["https://www.feralcatcolony.com/images/fancy7.jpg"],
  },
  {
    id: "9",
    name: "Kiwi",
    breed: "Cockatiel",
    age: "1 year",
    location: "Pune, Maharashtra",
    category: "Birds",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCS0cW7nnbAVV-JrSpXLCCngnvd8O3dIpHrg&s",
    ],
  },
  {
    id: "10",
    name: "Nemo",
    breed: "Clownfish",
    age: "6 months",
    location: "Ahmedabad, Gujarat",
    category: "Fish",
    images: [
      "https://www.algone.com/wp-content/uploads/2014/04/two-clownfish-in-aquarium.jpg",
    ],
  },
  {
    id: "11",
    name: "Thumper",
    breed: "Dutch Rabbit",
    age: "1.5 years",
    location: "Jaipur, Rajasthan",
    category: "Rabbits",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_sww9CXmgB5nYqw8vhbEw4p9Ew7tqsUrbw&s",
    ],
  },
  {
    id: "12",
    name: "Patches",
    breed: "Hamster",
    age: "8 months",
    location: "Lucknow, Uttar Pradesh",
    category: "Other",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_781950-MLB47504469046_092021-O.webp",
    ],
  },
  {
    id: "13",
    name: "Rocky",
    breed: "Boxer",
    age: "2.5 years",
    location: "Indore, Madhya Pradesh",
    category: "Dogs",
    images: [
      "https://cdn.pixabay.com/photo/2017/08/18/14/03/boxer-2655103_640.jpg",
    ],
  },
  {
    id: "14",
    name: "Cleo",
    breed: "Maine Coon",
    age: "3 years",
    location: "Nagpur, Maharashtra",
    category: "Cats",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzPnpd6vDmLapJioOu0K3n8hgfLF6QOjxTg&s",
    ],
  },
  {
    id: "15",
    name: "Rio",
    breed: "Macaw",
    age: "5 years",
    location: "Bhopal, Madhya Pradesh",
    category: "Birds",
    images: [
      "https://images.squarespace-cdn.com/content/v1/63128ee3d1590b407d775565/8b88905c-ae5e-4928-915e-f0fca4b3a43b/IMG_3156.jpg",
    ],
  },
  {
    id: "16",
    name: "Bubbles",
    breed: "Betta Fish",
    age: "9 months",
    location: "Surat, Gujarat",
    category: "Fish",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Zqu-9gtixBBb_vfwT1fY1jhvdseOftdPyKYSYMrqN7Ghmgjls1gDoNJwEEeP9ObtjEc&usqp=CAU",
    ],
  },
  {
    id: "17",
    name: "Snowball",
    breed: "Angora Rabbit",
    age: "2 years",
    location: "Coimbatore, Tamil Nadu",
    category: "Rabbits",
    images: [
      "https://alpacameadows.com/wp-content/uploads/2019/07/white-angora-rabbit-eating-vegetables-mrs-fitz-rotated.jpg",
    ],
  },
  {
    id: "18",
    name: "Nibbles",
    breed: "Chinchilla",
    age: "1.5 years",
    location: "Chandigarh, Haryana",
    category: "Other",
    images: [
      "https://preview.redd.it/chinchillas-and-a-dog-in-the-same-household-v0-0ib16g3at9bc1.jpeg?width=1080&crop=smart&auto=webp&s=b04a2939a4e0b4b85196afd78aaad01b7f4c895e",
    ],
  },
];

const Favorites = () => {
  const { favorites } = useFavorites();

  // Filter our mock data to only include pets that are in the favorites
  const favoritePets = mockPets.filter((pet) => favorites.includes(pet.id));

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <motion.div
        className="container mx-auto px-4 md:px-6 pb-16 md:pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your Favorite Pets
          </h1>
          <p className="text-gray-600">
            Here are the pets you've saved to revisit later.
          </p>
        </div>

        {favoritePets.length > 0 ? (
          <PetGrid pets={favoritePets} />
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl md:text-2xl font-medium mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-600 mb-6">
              When you find pets you're interested in, save them here to revisit
              later.
            </p>
            <a
              href="/"
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 font-medium transition-colors inline-block"
            >
              Browse Pets
            </a>
          </div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
};

export default Favorites;
