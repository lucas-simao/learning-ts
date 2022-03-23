import React, { useEffect, VFC } from 'react';
import { Link } from 'react-router-dom';
import SuccessIcon from '../../../assets/icons/success.svg';
import WarningIcon from '../../../assets/icons/warning.svg';
import ErrorIcon from '../../../assets/icons/error.svg';
import { useSnackBarData } from '../../../features/snackBar/selectors';
import { useAppDispatch } from '../../../store/hooks';
import { closeAlert } from '../../../features/snackBar/slice';

import './index.scss';

const SnackBar: VFC = () => {
  const { style, open, text, goToRoute, goToRouteLabel, autoHideDuration } =
    useSnackBarData();
  const dispatch = useAppDispatch();
  const snackBarBackGround = () => {
    switch (style) {
      case 'positive':
        return { color: '#4E9A51', icon: SuccessIcon };
      case 'negative':
        return { color: '#D84646', icon: ErrorIcon };
      case 'warning':
        return { color: '#F68A1B', icon: WarningIcon };
      case 'info':
        return { color: '#F68A1B', icon: ErrorIcon };
      default:
        return { color: '#F68A1B', icon: ErrorIcon };
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        dispatch(closeAlert());
      }, autoHideDuration);
    }
  }, [open]);

  return open ? (
    <div
      className="snackBar"
      style={{ backgroundColor: snackBarBackGround().color }}
    >
      <div className="snackBar__content">
        <img src={snackBarBackGround().icon} alt="" />
        <p className="snackBar__content__text">{text}</p>
        {goToRoute ? (
          <Link
            onClick={() => dispatch(closeAlert())}
            to={goToRoute}
            className="snackBar__content__link"
          >
            {goToRouteLabel ? goToRouteLabel : 'Clique aqui'}
          </Link>
        ) : (
          <button
            onClick={() => dispatch(closeAlert())}
            className="snackBar__content__button"
          >
            Fechar
          </button>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SnackBar;
