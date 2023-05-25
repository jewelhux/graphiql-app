import React from 'react';

interface IPopupProps {
  message: string;
  onClose: () => void;
}

const Popup = ({ message, onClose }: IPopupProps) => {
  return (
    <div className="popup">
      <div className="content">
        <p className="message">{message}</p>
        <button className="closeButton" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Popup;
