import React, { MouseEventHandler } from 'react';
import styles from './component.module.scss';
import { SoapButton } from '../SoapButton';

type ModalProps = {
  winner: any;
  onButtonClickHandler: () => Promise<void>;
  onCloseHandler: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Modal = ({
  winner,
  onButtonClickHandler,
  onCloseHandler,
}: ModalProps) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Modal__Content}>
        <h2>{winner ? 'There was a Winner!' : 'Draw!'}</h2>
        <p className={styles.Modal__Content__Winner}>
          {winner ? (
            <span>
              <strong>🏆{winner.login}🏆</strong> won the first round! <br />
              Prize: a follow!
              <SoapButton
                text="Follow figther"
                onClick={onButtonClickHandler}
              />
            </span>
          ) : (
            'The round ended in a draw!'
          )}
        </p>
        <button
          className={styles.Modal__Content__CloseBtn}
          onClick={onCloseHandler}
        >
          X
        </button>
      </div>
    </div>
  );
};
