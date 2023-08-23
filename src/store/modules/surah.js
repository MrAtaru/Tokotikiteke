import axios from "axios";

const surahs = {
  namespaced: true,
  state: {
    surahData: [],
    surahsData: [],
  },

  getters: {
    getSurah: (state) => state.surahData,

    getSurahById: (state) => (surahId) => {
      console.log("Fetching single product by ID:", surahId);
      console.log("SurahData:", state.surahData);
      const surah = state.surahData.find((p) => p.number == surahId);
      console.log("Surah:", surah);
      return surah;
    },
    // getSurahById: (state) => state.surahsData,
  },
  actions: {
    async fetchSurah({ commit }) {
      try {
        const dataSurah = await axios.get("https://al-quran-jade.vercel.app/surahs");
        // commit("SET_SURAH", dataSurah.data);
        commit("SET_SURAH", dataSurah.data["data"]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    
    async fetchSingleSurah({ commit }, surahId) {
      try {
        const dataSurah = await axios.get(`https://al-quran-jade.vercel.app/surahs/` + surahId);
        commit("SET_SINGLE_SURAH", dataSurah.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_SURAH(state, surah) {
      state.surahData = surah;
    },
    // SET_ALFATIHAH(state, surah) {
    //   state.alfatihahData = surah;
    // },
    SET_SINGLE_SURAH(state, surah) {
      state.singleSurah = surah;
    },
  },
};

export default surahs;
