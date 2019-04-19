//@flow

export const authenticateUser = (userName: string) => ({
  type: 'AUTHENTICATE_USER',
  userName,
});
