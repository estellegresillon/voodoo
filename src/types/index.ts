export type Placement = {
  country: string;
  game: string;
  platform: string;
  revenue: number;
};

export type Theme = {
  theme: {
    colors: {
      gray: string;
      lightGray: string;
      primary: string;
      secondary: string;
    };
    font: {
      main: string;
    };
    shadows: {
      normal: string;
      small: string;
    };
  };
};
