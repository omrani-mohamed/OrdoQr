import { signIn } from '@/auth'

interface AuthError extends Error {
  type?: string;
}

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (e) {
    const error = e as AuthError;
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
