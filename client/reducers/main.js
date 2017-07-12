export default function main(state = [], action = {}) {
    switch(action.type) {

        case 'CLOSE':
            return {
                close: true
            }

        default: return state;
    }
};