import { v4 as uuidv4 } from 'uuid';

export const getClimbingAreas = () => {
    return [
        {
            title:'Stoney Point',
            coords:
                {latitude:'34.27125553935417',longitude:'-118.60405296927681'},
            id: uuidv4()
        },
        {
            title:'Echo Cliffs',
            coords:
                {latitude:'34.12507002182895',longitude:'-118.92625188911605'},
                id:uuidv4()
        },
        {
            title:'Malibu Creek',
            coords:
            {latitude:'34.09604562465432',longitude:'-118.73008531949412'},
            id:uuidv4()
        },
        {
            title:'Red Rock (Oak Creek Canyon)',
            coords:
                {latitude:'36.102907561044844',longitude:'-115.48824730717135'},
            id: uuidv4()
        },
        
        {
            title:'Kraft Boulders',
            coords:
                {latitude:'36.16549228954012',longitude:'-115.41598533328391'},
                id: uuidv4()
        },
        {
            title:'Black Velvet Canyon',
            coords:{latitude:'36.035708655490055',longitude:'-115.46781106160708'},
            id:uuidv4()
        }

    ]
}




 


