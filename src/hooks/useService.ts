import { useState } from 'react';
import { QueryParams } from 'interfaces/types';

export const useService = <D>(service: any, q?: QueryParams) => {
  const [data, setData] = useState<D>();

  const [error, setError] = useState<Error | string | null>(null);

  const [isLoading, setLoading] = useState<boolean>(false);

  const onRequestService = async (data?: any) => {
    setLoading(true);

    setError(null);

    setTimeout(async () => {
      await service(data)
        .then((response) => {
          setData(response);

          setError(null);

          q && q.onSuccess(response);
        })
        .catch(() => {
          setError('Something went wrong');

          setData(null);

          q && q.onError('Something went wrong');
        });

      setLoading(false);
    }, 1000);
  };

  const refetch = () => {
    onRequestService();
    setLoading(false);
  };

  return { onRequestService, data, isLoading, error, refetch };
};
