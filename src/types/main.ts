export interface Project {
  id: string;
  description: string;
  name: string;
  order: number;
  projectLink: string;
  steps: {
    dateTime: {
      seconds: number;
    };
    description: string;
    title: string;
  }[];
  videoURL: string;
}
