import { User } from "@/model/user-model";

export async function createUser(user: any) {
  try {
    const userData = await User.create(user);

    console.log('User created successfully:', userData);
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}
