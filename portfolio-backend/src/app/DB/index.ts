import { User } from '../modules/auth/user.schema';

const superUser = {
  email: 'kamanashisbiswas69@gmail.com',
  password: 'Admin@123',
  needsPasswordChange: false,
  status: 'in-progress',
  role: 'superAdmin',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  // when database connected, then we check super admin exist or not, if not exist then we create super admin automatically base on provided data

  const isSuperAdminExist = await User.findOne({ role: 'superAdmin' });
  if (!isSuperAdminExist) {
    await User.create(superUser);
  }
};
export default seedSuperAdmin;
