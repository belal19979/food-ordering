const fetchAndCustomizeMeals = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const meals = [];

  for (const key in data) {
    meals.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    });
  }
  return meals;
};

export default fetchAndCustomizeMeals;
