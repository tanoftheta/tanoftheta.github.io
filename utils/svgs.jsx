import css from './icons/css.png'
import react from './icons/react.png'
import javascript from './icons/javascript.png'
import google from './icons/google.png'
import github from './icons/github.png'
import firebase from './icons/firebase.png'
import aws from './icons/aws.png'
import node from './icons/node.png'
import sequelize from './icons/sequelize.png'

export const getSvg = (tech) => {
    switch (tech) {
        case 'JavaScript':
            return javascript;
        case 'React':
            return react; 
        case 'CSS': 
            return css; 
        case 'Google Cloud APIs':
            return google; 
        case 'Github':
            return github; 
        case 'Firebase': 
            return firebase; 
        case 'Amazon Web Services':
            return aws; 
        case 'Node':
            return node; 
        case 'Sequelize ORM': 
            return sequelize; 
        default:
            return ''; 
    }
};
