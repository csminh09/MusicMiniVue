import { defineStore } from "pinia";

export const useThemeStore = defineStore("taskStore",{
state: () =>({
    theme: {
            defaultTheme: 'light',
            dark: {
                    searchTool: '#d6d6d6',
                    background: '#0c0d0d',
                    backgroundBtnPlay: '#2C2C2C',
                    vector: 'https://i.imgur.com/wifjFkz.png',
                    //auth
                    backgroundAuth: '#1C1B1B',
                    authColorSlogan: '#F2F2F2',
                    authColorIntro: '#A0A0A0',
                    authColorSignIn: '#D7D7D7',

                    //started:
                    backgroundColorStarted: 'black',

                    //register
                    backgroundRegister: '#1C1B1B',
                    resColorSlogan: '#DBDBDB',
                    resColorTitle: '#F2F2F2',
                    resColorSupport: '#E1E1E1',
                    resImgApple: 'https://i.imgur.com/3fR8qf2.png',
                    resColorBorder: 'rgba(255, 255, 255, 0.14)',

                    //signin
                    backgroundSignIn: '#1C1B1B',
                    signColorSlogan: '#DBDBDB',
                    signColorTitle: '#F2F2F2',
                    signColorSupport: '#E1E1E1',
                    signImgApple: 'https://i.imgur.com/3fR8qf2.png',
                    signColorBorder: 'rgba(255, 255, 255, 0.14)',

                    //home
                    backgroundHome: '#1C1B1B',
                    backgroundHomeFooter: '#343434',
                    color1: '#616161',
                    color1Active: '#DBDBDB',


                    //song-playlist
                    colorSong: '#E1E1E1',
                    colorPlayList1: '#D6D6D6',
                    colorPlayList2: '#959595',
                    colorPlayList3: '#2C2C2C',
                    colorPlayListTitle: '#DBDBDB',
                    colorTool: 'white',

                    //artist-page
                    colorNameArtist: '#E3E3E3',
                    colorAlbum: '#D3D3D3',
                    colorSlogan: '#A7A7A7',

                    //profile
                    colorProfile: '#E6E6E6',
                    colorGmail: '#D8D4D4',
                    colorFollow: '#FFFFFF',
                    colorPlayList: '#D6D6D6',
                    backgroundHeader: 'rgba(255, 255, 255, 0.04);'

                },
            light:{
                    searchTool: '#000000',
                    background: '#F2F2F2',
                    backgroundBtnPlay: 'rgba(0, 0, 0, 0.04)', 
                    vector: 'https://i.imgur.com/ntIAMNv.png',
                    //auth
                    backgroundAuth: '#F2F2F2',
                    authColorSlogan: '#383838',
                    authColorIntro: '#797979',
                    authColorSignIn: '#313131',

                    //started:
                    backgroundColorStarted: 'white',

                    //register
                    backgroundRegister: '#F2F2F2',
                    resColorSlogan: '#383838',
                    resColorTitle: '#383838',
                    resColorSupport: '#383838',
                    resImgApple: 'https://i.imgur.com/6MJaQmz.png',
                    resColorBorder: 'rgba(0, 0, 0, 0.14)',

                    //signin
                    backgroundSignIn: '#F2F2F2',
                    signColorSlogan: '#383838',
                    signColorTitle: '#383838',
                    signColorSupport: '#383838',
                    signImgApple: 'https://i.imgur.com/6MJaQmz.png',
                    signColorBorder: 'rgba(0, 0, 0, 0.14)',

                    //home
                    backgroundHome: '#F2F2F2',
                    backgroundHomeFooter: '#FFFFF',
                    color1: '#BEBEBE',
                    color1Active: '#000000',

                    //song-playlist
                    colorSong: '#000000',
                    colorPlayList1: '#000000',
                    colorPlayList2: '#555555',
                    colorPlayList3: '#E6E6E6',
                    colorPlayListTitle: '#131313',
                    colorTool: 'A68C8C',

                    ////artist-page
                    colorNameArtist: '#222222',
                    colorAlbum: '#393939',
                    colorSlogan: '#838383',

                    //profile
                    colorProfile: '#383838',
                    colorGmail: '#222222',
                    colorFollow: '#222222',
                    colorPlayList: '#222222',
                    backgroundHeader: '#FFFFFF'
                }
            }
}),
getters: {
  getdefaultTheme: (state) => state.theme.defaultTheme,

  getThemeDark: (state) => state.theme.dark,

  getThemeLight: (state) => state.theme.light,
},
actions: {
  setTheme(name){
    return this.theme.defaultTheme = name;
  },
  chooseTheme(){
    if(localStorage.getItem("theme") === 'dark'){
      return this.theme.dark;
    }
    return this.theme.light;
  }
}
});