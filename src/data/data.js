async function getData(type) {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_CATEGORY + type + process.env.REACT_APP_API_KEY,
      {
        method: "GET",
        protocol: "http2",
      }
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllData() {
  const types = ["business", "sports", "technology"];
  let allData = [];

  for (let i = 0; i < 3; i++) {
    const data = await getData(types[i]);
    allData.push(data);
  }

  return allData;
}
