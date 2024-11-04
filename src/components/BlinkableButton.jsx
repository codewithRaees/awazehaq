import styled, { keyframes } from "styled-components";

// Define the blink animation
const blinkAnimation = keyframes`
  0%, 100% {
    background-color: #3498db; /* Original color */
  }
  50% {
    background-color: #f39c12; /* Blinking color */
  }
`;

// Create a styled button with the blinking effect
const BlinkingButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  cursor: pointer;
  animation: ${blinkAnimation} 1s infinite;
  transition: background-color 0.3s;

  &:hover {
    animation: none; /* Stop blinking on hover */
    background-color: #2980b9; /* Hover color */
  }
`;

function BlinkableButton() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <BlinkingButton>
        Hover to Stop Blinking
      </BlinkingButton>
    </div>
  );
}

export default BlinkableButton;
