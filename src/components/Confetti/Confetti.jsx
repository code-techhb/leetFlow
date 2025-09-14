import { useEffect, useState } from "react";
import styles from "./Confetti.module.css";

const Confetti = ({ trigger, onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      // Generate confetti particles
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 1,
          animationDuration: 3 + Math.random() * 2,
          backgroundColor: getRandomColor(),
          shape: Math.random() > 0.5 ? "circle" : "square",
        });
      }
      setParticles(newParticles);

      // Clean up after animation
      const timer = setTimeout(() => {
        setParticles([]);
        if (onComplete) onComplete();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [trigger, onComplete]);

  const getRandomColor = () => {
    const colors = [
      "#330967ff",
      "#6bccddff",
      "#6ce9afff",
      "#edc45eff",
      "#8849edff",
      "#59c7ddff",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (particles.length === 0) return null;

  return (
    <div className={styles.confettiContainer}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`${styles.confettiPiece} ${
            particle.shape === "circle" ? styles.circle : styles.square
          }`}
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.backgroundColor,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
