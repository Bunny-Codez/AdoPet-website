import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import PetGrid from "../components/PetGrid";
import Testimonials from "../components/Testimonials";
import PetInfoSection from "../components/PetInfo/PetInfoSection";
import { useAuth } from "../context/AuthContext";

// Mock data for featured pets
const featuredPets = [
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
];

// More pets data for the grid
const morePets = [
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Index = () => {
  const [searchParams] = useSearchParams();
  const [pets, setPets] = useState(featuredPets);
  const [filteredPets, setFilteredPets] = useState(pets);
  const { user } = useAuth();

  useEffect(() => {
    // Load more pets
    const allPets = [...featuredPets, ...morePets];
    setPets(allPets);
    setFilteredPets(allPets);

    // Apply filters from URL if present
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category || search) {
      filterPets(allPets, category, search);
    }
  }, [searchParams]);

  const filterPets = (
    petList: any[],
    category: string | null,
    searchQuery: string | null
  ) => {
    let filtered = [...petList];

    if (category) {
      filtered = filtered.filter(
        (pet) => pet.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (pet) =>
          pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pet.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPets(filtered);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Pets Looking for a Home
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Browse our available pets and find your perfect companion. Each
              one is waiting for a loving home.
            </motion.p>
          </div>

          <PetGrid pets={filteredPets} />

          {filteredPets.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No pets found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pet Information Section */}
      <PetInfoSection />

      {/* Testimonials Section */}
      <Testimonials />
    </motion.div>
  );
};

export default Index;
