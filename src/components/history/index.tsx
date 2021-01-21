import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

type AxiosInterceptors = (axiosInterceptors: any) => void;

export default ({
  axiosInterceptors,
}: {
  axiosInterceptors: AxiosInterceptors;
}) => {
  const history = useHistory<any>();

  useEffect(() => {
    axiosInterceptors(history);
  }, [history, axiosInterceptors]);

  return null;
};
