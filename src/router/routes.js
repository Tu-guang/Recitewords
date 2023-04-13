import home from '@/views/home/route'
import about from '@/views/about/route'
import category from '@/views/category/route'
import login from '@/views/login/route'

const result = [...home, ...about, ...category, ...login]

export default result
