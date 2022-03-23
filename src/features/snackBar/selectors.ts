import {useAppSelector} from '../../store/hooks';

export const useSnackBarData = () => useAppSelector(({snackBar}) => snackBar);
