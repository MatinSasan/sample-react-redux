import React from 'react';
import styles from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';

const Modal = React.memo(
  props => {
    return (
      <React.Fragment>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
          }}>
          {props.children}
        </div>
      </React.Fragment>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.show === nextProps.show ||
      nextProps.children === prevProps.children
    );
  }
);

export default Modal;
