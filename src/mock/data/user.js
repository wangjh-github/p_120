import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    identifycode:'1234',
    avatar: 'src/assets/user.png',
    name: '系统管理员',
    type: 'admin'
  },
  {
    id: 2,
    username: 'admin01',
    password: '123456',
    identifycode:'1234',
    avatar: 'src/assets/user.png',
    name: '广告主01',
    type: 'advert'
  }
];
/* export { LoginUsers }; */
const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
