export type CreateProfile = {
  description: string;
  birthDay?: Date;
  userId: number;
};

export type UpdateProfile = {
  description?: string;
  birthDay?: string;
};
