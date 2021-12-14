import Http from '@/utils/http';
import { Result } from '@/utils/http/types';

export function Login(params: OBJ) {
  return Http.request<Result<OBJ>>({
    method: 'get',
    url: '/mock/user/login',
    params,
  });
}
