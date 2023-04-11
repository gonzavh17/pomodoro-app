import React from "react";
import "../Assets/Css/Information.css";

function Information() {
  return (
    <div className="information">
      <div className="pomodoro-information">
        <p className="information-title">¿Qué es la tecnica Pomodoro?</p>
        <p className="information-description">
          La técnica pomodoro es un método dedicado a la optimización del
          tiempo, para traer nuestra completa atención a una tarea. Fue creado a
          fines de la década de 1980 por Francesco Cirillo. Se basa en un
          temporizador para dividir el tiempo en intervalos fijos llamados
          pomodoros de 25 minutos de actividad, seguidos de 7 minutos de
          descanso (short break), con pausas largas cada cuatro intervalos de
          pomodoros 15 minutos (Long break).
        </p>
      </div>

      <div className="pomodoro-information">
        <p className="information-title">¿Qué objetivo tiene esta web?</p>
        <p className="information-description">
          El objetivo de esta web, es la utilizacion de un pomodoro Timer, con
          un estilo minimalista, para disminuir las distracciones. Solo cuenta
          con el temporizador pomodoro, y una breve explicacion de su
          funcionamiento por si es la primera vez que lo utiliza.
        </p>
      </div>

      <div className="pomodoro-information">
        <p className="information-title">Beneficios</p>
        <p className="information-description">
          El método se basa en la idea de que las pausas regulares pueden
          mejorar la agilidad mental, y nos motiva a ofrecer una respuesta
          eficiente frente al tiempo, en lugar del estado de ansiedad que suele
          provocar el no tener un tiempo predispuesto para alguna actividad.
          Además, al prevenir la multitarea, ayuda a alcanzar un estado de foco
          más elevado, que se hace sostenible gracias a las pausas regulares.
        </p>
      </div>
      <div className="pomodoro-information pomodoro-information-responsive">
        <p className="information-title">¿Como utilizar la web?</p>
        <p className="information-description">
          <ol>
            <li className="pomodoro-list">
              Decidir la tarea o actividad a realizar.
            </li>
            <li className="pomodoro-list">Colcar el pomodoro en Work Time</li>
            <li className="pomodoro-list">Poner el temporizador.</li>
            <li className="pomodoro-list">
              Trabajar en la tarea hasta que el contador suene.
            </li>
            <li className="pomodoro-list">Tomar la pausa del short break.</li>
            <li className="pomodoro-list">
              Cada cuatro pomodoros, se implementa el long break, una pausa de
              15 minutos.
            </li>
            <li className="pomodoro-list">Repetir los pasos.</li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default Information;
