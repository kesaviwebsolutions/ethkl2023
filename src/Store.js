import { createStore, action } from 'easy-peasy';

const MainStore = createStore({
    user: undefined,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    userExist: undefined,
    setUserExist: action((state, payload)=>{
        state.userExist = payload;
    }),

    progress: 0,
    setProgress: action((state, payload) => {
        state.progress = payload;
    }),
 
    progressShow: false,
    setProgressShow: action((state, payload) => {
        state.progressShow = payload;
    }),
 

  });
  
  export default MainStore;
