import { useEffect } from "react";
import { BannerWrapper } from "./elements";

/* eslint-disable */
/* eslint no-use-before-define: 0 */

const Banner = () => {
  // Start the animation
  useEffect(() => {
    // const characters =
    //   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // const charactersArray = characters.split("");
    // // Matrix configuration
    // const fontSize = 16;
    // const speed = 3;
    // // Create the canvas and context
    // const canvas = document.getElementById("matrix");
    // const context = canvas?.getContext("2d");
    // // Set the canvas dimensions
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // // Calculate the number of columns and rows
    // const columns = Math.floor(canvas.width / fontSize);
    // const rows = Math.floor(canvas.height / fontSize);
    // // Initialize the columns
    // const matrix = [];
    // for (let i = 0; i < columns; i++) {
    //   matrix[i] = 1;
    // }
    // // Matrix animation
    // function drawMatrix() {
    //   context.fillStyle = "rgba(0, 0, 0, 0.05)";
    //   context.fillRect(0, 0, canvas.width, canvas.height);
    //   context.fillStyle = "#00FF00";
    //   context.font = fontSize + "px monospace";
    //   for (let i = 0; i < matrix.length; i++) {
    //     const text =
    //       charactersArray[Math.floor(Math.random() * charactersArray.length)];
    //     context.fillText(text, i * fontSize, matrix[i] * fontSize);
    //     if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
    //       matrix[i] = 0;
    //     }
    //     matrix[i]++;
    //   }
    // }
    // // Render loop
    // const animateMatrix = () => {
    //   drawMatrix();
    //   requestAnimationFrame(animateMatrix);
    // };
    // animateMatrix();
  }, []);

  return (
    <BannerWrapper>
      {/* <div className="matrix-container">
        <canvas id="matrix"></canvas>
      </div> */}
    </BannerWrapper>
  );
};

export default Banner;
