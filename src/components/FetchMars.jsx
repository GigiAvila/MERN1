import React, { useEffect, useState } from 'react';
import { NASA_API_KEY, NASA_URL } from './NASA_API_KEY';
import Figure from './Figure';

const Fetch = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [myDate, setMyDate] = useState(today);

  const [roverData, setRoverData] = useState({});
  const [showNoPhotoMessage, setShowNoPhotoMessage] = useState(false);

  const handleInput = (e) => {
    const selectedDate = e.target.value;
    setMyDate(selectedDate);
    setShowNoPhotoMessage(false);
  };

  useEffect(() => {
    const getRoverDataFiltered = async () => {
      const selectedDate = new Date(myDate);  // para comparar en formato Date y no String ISO.
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        setShowNoPhotoMessage(true);
        setRoverData({});
        return;
      }

      const apiMarsData = await fetch(`${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_API_KEY}&earth_date=${myDate}`);


      const MarsData = await apiMarsData.json();

      const data = {
        title: MarsData.photos[0].rover.name,
        image: MarsData.photos[0].img_src,
        date: MarsData.photos[0].earth_date,
      };

      setRoverData(data);
    };

    getRoverDataFiltered();
  }, [myDate]);

  return (
    <>
      <div>
        <input type="date" value={myDate} onChange={handleInput} />
      </div>
      {showNoPhotoMessage ? (
        <p>Por ahora no conocemos el futuro del planeta 👽 <br /> ¡Prueba con una fecha anterior al día de hoy!</p>
      ) : (
        <Figure {...roverData} />
      )}
    </>
  );
};

export default Fetch;
