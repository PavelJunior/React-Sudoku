import React from 'react';
import './style.css';

interface ModalProps {
  open: Boolean;
  children: any;
}

export const Modal: React.FC<ModalProps> = ({ open, children }) => {
  const modalStyles = open ? 'modal' : 'modal modal-hidden';
  const overlayStyles = open ? 'overlay' : '';

  return (
    <>
      <div className={overlayStyles}>
        <div className={modalStyles}>{children}</div>
      </div>
    </>
  );
};
