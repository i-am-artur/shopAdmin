export const routeAuth = {
  login: {
    path: '/auth',
    protected: false
  },
  passwordRestore: {
    path: '/auth/passwordRestore',
    protected: false
  },
  passwordReset: {
    path: '/auth/passwordReset',
    protected: false
  }
};