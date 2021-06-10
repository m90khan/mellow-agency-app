import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [viewport, setViewport] = useState({
    latitude: 52.52,
    longitude: 13.405,
    width: '800px',
    height: '200px',
    zoom: 12,
  });
  const [lat, setLat] = useState<number>(viewport.latitude);
  const [lng, setLng] = useState<number>(viewport.longitude);
  const api: { key: string; base: string } = {
    key: '31e9daffb09f67e82887164afd35aa31',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  const [weather, setWeather] = useState<any>({});
  useEffect(() => {
    const weatherFeed = async () => {
      try {
        const fetchData = await fetch(
          `${api.base}weather?q=${'berlin'}&appid=${api.key}`
        );
        const res = await fetchData.json();
        setLat(res.coord.lat);
        setLng(res.coord.lon);
        setWeather(res);
      } catch (error) {
        console.log(error);
      }
    };
    weatherFeed();
  }, [weather, lng, lat]);
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date}, ${month} ${year}`;
  };

  return (
    <>
      <form>
        <Row>
          <div className='form-field'>
            <h4>Your Name</h4>
            <input type='text' placeholder='Enter name' name='name' />
          </div>
          <div className='form-field'>
            <h4>Your Email</h4>
            <input type='email' placeholder='Enter email' name='email' />
          </div>
        </Row>
        <Row>
          <div className='form-field form-field-text'>
            <h4>Message</h4>
            <textarea placeholder='Enter Message' name='message' />
          </div>
          <Button type='submit'>Send Message</Button>
        </Row>
      </form>
      <Location>
        <div className='location-text'>
          <h4 className='weather'>
            {weather.name}, {weather.sys && weather.sys.country}
          </h4>
          <h2>{weather.main && Math.round(weather.main.temp) / 10}°c</h2>
          <h2>{weather.weather && weather.weather[0].main}</h2>
          <h2>{dateBuilder(new Date())}</h2>
        </div>
        <div className='map'>
          <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          >
            <Marker key={api.key} latitude={lat} longitude={lng}>
              <Image src='/images/pin.png' width={80} height={50} />
            </Marker>
          </ReactMapGl>
        </div>
      </Location>
    </>
  );
};
const Location = styled(motion.div)`
  padding: 2rem;
  color: red;
  display: flex;

  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  .map {
    position: relative;
    top: -5rem;
  }
`;
const Button = styled(motion.button)`
  border: 2px solid var(--yellow);
  display: inline-block;
  color: var(--black);
`;

const Row = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  .form-field {
    flex: 0 0 50%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    p {
      color: #fd3333 !important;
    }
  }
  .form-field-text {
    flex: 0 0 100%;
  }
  h4 {
    font-size: 2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem 2rem;
    margin: 8px 0;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #0e131c;
    border: none;
    color: #fff;
    font-weight: normal;
    font-size: 2rem;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--yellow);
    letter-spacing: -1px;
    font-size: 1.5rem;
  }
`;

export default Contact;
