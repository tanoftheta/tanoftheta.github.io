import css from './icons/css.png'
import react from './icons/react.png'
import javascript from './icons/javascript.png'
import google from './icons/google.png'
import github from './icons/github.png'
import firebase from './icons/firebase.png'
import aws from './icons/aws.png'
import node from './icons/node.png'
import sequelize from './icons/Sequelize.png'
import python from './icons/python.png'
import pandas from './icons/pandas.png'
import numpy from './icons/numpy.png'
import jupyter from './icons/jupyter.png'
import dart from './icons/dart.png'
import flutter from './icons/flutter.png'
import gitlab from './icons/gitlab.png'
import postgres from './icons/postgres.png'
import unity from './icons/unity.png'

export const getSvg = (tech) => {
    switch (tech) {
        case 'JavaScript':
            return javascript;
        case 'Python': 
            return python; 
        case 'React':
            return react; 
        case 'CSS': 
            return css; 
            case 'Google Cloud APIs':
                case 'Google Cloud Platform':
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
        case 'Jupyter Notebook': 
            return jupyter;
        case 'Pandas': 
            return pandas; 
        case 'NumPy': 
            return numpy;
        case 'Dart':
            return dart; 
        case 'Flutter':
            return flutter; 
        case 'Unity': 
            return unity; 
        case 'PostgreSQL':
            return postgres; 
        case 'Gitlab':
            return gitlab; 
        default:
            return ''; 
    }
};
