import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Ticked.css";

const imgURL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "2fa8f297328a4293f06805fe0c1b915d";




const Ticked = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [movieDetails, setMovieDetails] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState("IOI Putrajaya");
  const [selectedDate, setSelectedDate] = useState("22 Oct Mon");
  const [selectedTime, setSelectedTime] = useState("15:40");

  useEffect(() => {
    if (!id) return;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movieDetails) {
    return <div className="loading-message">Загрузка деталей фильма...</div>;
  }

  const { title, poster_path, overview, runtime, genres } = movieDetails;

  const movieGenres =
    genres && genres.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "Недоступно";

  const dates = [];
  const today = new Date();
  const options = { day: "2-digit", month: "short", weekday: "short" };
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toLocaleDateString("ru-RU", options));
  }

  const times = ["15:40", "18:00", "21:30", "23:00"];
  const theaters = ["IOI Putrajaya", "Bukit Bintang", "KB Mall"];



  return (
    <div className="detail-page-wrapper">
      <header className="detail-header">
        <button className="header-logout-btn" onClick={() => navigate(-1)}>
          Назад
        </button>
      </header>

      <div className="detail-page-content">
        <div className="left-panel">
          <h2 className="section-title">Кинотеатр</h2>
          <div className="button-group">
            {theaters.map((theater) => (
              <button
                key={theater}
                className={`button-item ${
                  selectedTheater === theater ? "active" : ""
                }`}
                onClick={() => setSelectedTheater(theater)}
              >
                <span className="location-icon">📍</span>
                {theater}
              </button>
            ))}
          </div>

          <h2 className="section-title">Дата</h2>
          <div className="button-group">
            {dates.map((date) => (
              <button
                key={date}
                className={`button-item date-item ${
                  selectedDate === date ? "active" : ""
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date.split(" ").slice(0, 2).join(" ")}
                <br />
                {date.split(" ")[2]}
              </button>
            ))}
          </div>

          <h2 className="section-title">Время</h2>
          <div className="button-group">
            {times.map((time) => (
              <button
                key={time}
                className={`button-item ${
                  selectedTime === time ? "active" : ""
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="right-panel">
          <div className="movie-summary-card">
            <img
              src={imgURL + poster_path}
              alt={title}
              className="summary-poster"
            />
            <div className="summary-info">
              <h3>{title}</h3>
              <p className="summary-description">
                {overview?.substring(0, 100)}...
              </p>
              <p className="summary-detail-row">
                <span className="label">Продолжительность:</span>
                <span className="value">{runtime}m</span>
              </p>
              <p className="summary-detail-row">
                <span className="label">Тип:</span>
                <span className="value">{movieGenres}</span>
              </p>
            </div>
          </div>

          <div className="booking-summary-box">
            <h4>{selectedTheater}</h4>
            <p>{selectedDate.split(" ").slice(0, 2).join(" ")} 2023</p>
            <p>{selectedTime}</p>
            <p className="disclaimer">*Выбор мест будет доступен после этого</p>
            <button
              className="proceed-button"
              onClick={() =>
                navigate(`/seats/${id}`, {
                  state: {
                    title,
                    poster_path,
                    theater: selectedTheater,
                    date: selectedDate,
                    time: selectedTime,
                  },
                })
              }
            >
              Продолжить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticked;
