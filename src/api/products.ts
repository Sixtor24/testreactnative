import axios from 'axios';

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  price: number;
  color: string; // Nuevo campo para el color del producto
}

// Definición de los colores para cada categoría
const categoryColors: Record<string, string> = {
  beauty: '#fff7ee',
  electronics: '#f5e0ff',
  clothing: '#faf4dc',
  food: '#ffd2d5',
  default: '#eaf9ff',
};

// Función para obtener el color basado en la categoría
const getColorForCategory = (category: string, index: number): string => {
  const categories = Object.keys(categoryColors);
  const numCategories = categories.length;
  const cycleIndex = index % numCategories;

  // Prioriza los primeros 5 colores y luego se cicla
  if (index < numCategories) {
    return categoryColors[categories[cycleIndex]];
  } else {
    return categoryColors[categories[cycleIndex % 5]];
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products.map((product: any, index: number) => ({
      id: product.id,
      title: product.title,
      imageUrl: product.thumbnail,
      category: product.category,
      price: product.price,
      color: getColorForCategory(product.category, index), // Asignación de color basado en la categoría
    }));
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};
