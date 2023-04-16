import home from '@/views/home/route';
import spoken from '@/views/spoken/route';
import video from '@/views/video/route';
import login from '@/views/login/route';
import register from '@/views/register/route';
import user from '@/views/user/route';

const result = [...home, ...spoken, ...video, ...login, ...user, ...register];

export default result;
