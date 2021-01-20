import Vuex from "vuex"
Vuex.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentIndex: 0,
        cards: [
            {
                title: "Logotyp",
                description: "hej hej hej ",
                img: "../assets/img/webbyra-vit.jpg"
            },
            {
                title: "Logotyp",
                description: "hej hej hej ",
                img: "../assets/img/webbyra-vit.jpg"
            },
            {
                title: "Logotyp",
                description: "hej hej hej ",
                img: "../assets/img/webbyra-vit.jpg"
            },
            {
                title: "Logotyp",
                description: "hej hej hej ",
                img: "../assets/img/webbyra-vit.jpg"
            }
        ]
    }, 
    getters: {
        currentIndex: state => {
            returnstate.currentIndex;
        }, 
        card: state => {
            return state.cards;
        }
    },
    mutation: {
        netsIndex: state => {
            if (state.currentIndex < state.cards.legth -1)
            state.currentIndex++;
        },
        prevIndex: state => {
            if(state.currentIndex > 0)
            state.currentIndex--;
        }
    }
})