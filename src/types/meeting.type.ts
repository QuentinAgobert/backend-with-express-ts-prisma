export type CreateMeeting = {
  title: string;
  duration: number;
  date: Date;
};

export type UpdateMeeting = {
  title?: string;
  duration?: number;
  date?: Date;
};
