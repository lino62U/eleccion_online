import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const Time = ({ time = 10 }) => {
  const router = useRouter();
  const [exp, setExp] = useState(time);

  // Actualizar el tiempo restante cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setExp((prevTime) => prevTime - 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Redirigir al usuario a la página de inicio cuando el tiempo expire
  useEffect(() => {
    if (exp === 0) {
      logout();
      router.push("/");
    }
  }, [exp, router]);

  // Cerrar sesión del usuario
  const logout = async () => {
    try {
      await axios.post("api/auth/logout");
      router.push("/");
    } catch (err) {
      console.log(err);
      router.push("/");
    }
  };

  // Formatear el tiempo en formato HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      {formatTime(exp)}
    </div>
  );
};

export default Time;
