export default async function handler(req, res) {
    const city = req.query.city || "Bucharest";
    const apiKey = process.env.OPENWEATHER_API_KEY;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod !== 200) {
        return res.status(400).json({ error: "Orașul nu a fost găsit." });
      }
  
      res.status(200).json(data);
    } catch (error) {
      console.error("Eroare fetch weather:", error);
      res.status(500).json({ error: "Nu am putut obține datele meteo" });
    }
  }