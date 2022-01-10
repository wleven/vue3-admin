import Http from '@/utils/http';
import { Result } from '@/utils/http/types';

export function Login(params: Record<string, any>) {
  return Http.request<Result<Record<string, any>>>({
    method: 'get',
    url: '/mock/user/login',
    params,
  });
}
