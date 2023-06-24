import React, { useEffect, useState } from 'react';
import { NASA_API_KEY, NASA_URL } from './NASA_API_KEY';
import Figure from './Figure';

const Fetch = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [myDate, setMyDate] = useState(today);

  const [apodData, setApodData] = useState({});
  const [showNoPhotoMessage, setShowNoPhotoMessage] = useState(false);

  const handleInput = (e) => {
    const selectedDate = e.target.value;
    setMyDate(selectedDate);
    setShowNoPhotoMessage(false);
  };

  useEffect(() => {
    const getApodDataFiltered = async () => {
      const selectedDate = new Date(myDate);  // para comparar en formato Date y no String ISO.
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        setShowNoPhotoMessage(true);
        setApodData({});
        return;
      }

      const apiData = await fetch(`${NASA_URL}planetary/apod?date=${myDate}&api_key=${NASA_API_KEY}`).then((res) =>
        res.json()
      );

      const data = {
        title: apiData.title,
        image: apiData.url,
        date: apiData.date,
        explanation: apiData.explanation,
        copyright: apiData.copyright,
      };

      setApodData(data);
    };

    getApodDataFiltered();
  }, [myDate]);

  return (
    <>
      <div>
        <input type="date" value={myDate} onChange={handleInput} />
      </div>
      {showNoPhotoMessage ? (
        <p>Por ahora el telescopio no nos permite ver hacia el futuro 🪐 <br /> ¡Prueba con una fecha anterior al día de hoy!</p>
      ) : (
        apodData && <Figure {...apodData} />
      )}
    </>
  );
};

export default Fetch;
