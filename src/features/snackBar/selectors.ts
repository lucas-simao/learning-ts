import { useAppSelector } from '../../store/hooks';

export const useSnackBarData = () => useAppSelector((state) => state.snackBar);
