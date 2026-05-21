import { Article, MealTemplate } from "./types";

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "The Importance of Precision in Canine Nutrition",
    author: "Dr. Sarah Jenkins, DVM",
    date: "Oct 24, 2025",
    category: "Nutrition",
    imageUrl: "https://images.unsplash.com/photo-1600352774373-7b992e5189de?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
    content: "Modern veterinary science shows that even small variations in nutrient proportions can significantly impact a dog's long-term health. Customizing meals allows for addressing specific metabolic needs..."
  },
  {
    id: "2",
    title: "Administering Meds: Making it Stress-Free",
    author: "Dr. Michael Chen",
    date: "Nov 12, 2025",
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
    content: "Many pet parents struggle with 'pilling' their dogs. Integrating medication directly into high-quality, palatable food is often the most effective and least stressful method for both pet and owner..."
  },
  {
    id: "3",
    title: "Ethical Sourcing for Pet Food",
    author: "Vet Team Alpha",
    date: "Dec 05, 2025",
    category: "Ethics",
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
    content: "Choosing the right protein source isn't just about nutrition; it's about the environment. We explore how sustainable farming practices lead to better quality ingredients for your furry friend..."
  }
];

export const MEAL_TEMPLATES: MealTemplate[] = [
  {
    id: "t1",
    name: "Vitality Beef & Kale",
    description: "High-protein grass-fed beef mixed with organic kale and sweet potatoes.",
    proteinBase: "Beef",
    calories: 450,
    imageUrl: "https://marleyspoon.com/media/recipes/68832/main_photos/large/balsamic_honey_glazed_steak-e973caa3051feb99d6bda9830a54985e.jpeg",
    price: 12.50
  },
  {
    id: "t2",
    name: "Gentle Salmon & Rice",
    description: "Easily digestible wild-caught salmon with brown rice and peas.",
    proteinBase: "Salmon",
    calories: 380,
    imageUrl: "https://spoiledhounds.com/wp-content/uploads/2024/09/Salmon-Dog-Food-Recipe-Photo.jpg",
    price: 14.20
  },
  {
    id: "t3",
    name: "Lean Turkey Feast",
    description: "Low-fat turkey breast with carrots, spinach, and quinoa.",
    proteinBase: "Turkey",
    calories: 320,
    imageUrl: "https://images.getrecipekit.com/20241113162307-mira-20recipe-20photos-20-35.png?aspect_ratio=4:3&quality=90&",
    price: 11.80
  }
];

export const PROTEIN_BASES = ['Chicken', 'Fish', 'Paneer', 'Eggs', 'Mutton', 'Buff'];
export const VEGGIES = ['Carrots', 'Pumpkin', 'Green Beans', 'Sweet Potato', 'Beetroot', 'Broccoli', 'Spinach', 'Bottle Gourd', 'Cucumber', 'Zucchini', 'Peas', 'Cabbage'];
export const MEDICINES = ['Joint Support (Glucosamine)', 'Digestive Enzyme', 'Skin & Coat Oil', 'Prescribed Antibiotic', 'Heartworm Preventive'];
