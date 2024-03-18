const cat_endpoint_random_fact = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    const res = await fetch(cat_endpoint_random_fact);
    const data = await res.json();
    const { fact } = data;
    return fact;
};
