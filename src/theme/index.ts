interface ITheme{
    colors: {
      white: string;
      black: string;

      gray100: string;
      gray200: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;

      blue500: string;
      blue200: string; 

      red500: string;
      red200: string;
      red100: string;
    },
    fonts: {
      Regular: string;
      Medium: string;
      Bold: string;
    }
}

export const theme: ITheme = {
  colors: {
    white: '#FFF',
    black: '#000',

    gray100: '#E1E1E6',
    gray200: '#A9A9B2',
    gray400: '#7C7C8A',
    gray500: '#505059',
    gray600: '#323238',
    gray700: '#29292E',
    gray800: '#202024',
    gray900: '#121214',

    blue500: '#3492EB',
    blue200: '#51A8FB',

    red500: '#E50A31',
    red200: '#F82248',
    red100: '#D32F2F'
  },
  fonts: {
    Regular: '300',
    Medium: '400',
    Bold: '700'
  }
};
