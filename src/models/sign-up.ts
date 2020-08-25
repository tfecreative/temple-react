export type SignUpRequest = {
  email: string;
  username: string;
  password1: string;
  password2: string;
};

export type SignUpResponse = {
  username: string;
};
