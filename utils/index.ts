export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'f1bbb17469msh3b47878d3192f79p11a14fjsne20a2bae658e',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers }
  );

  const result = await response.json()

  return result;
}