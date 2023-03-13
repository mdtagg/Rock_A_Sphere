import { v4 as uuidv4 } from 'uuid';

export const getClimbingAreas = () => {
    return [
        {
            title:'Red Rock',
            coords:
                {latitude:'36.09350599633892',longitude:'-115.48548059665926'},
            rockType:'sandstone',
            id: uuidv4()
        },
        {
            title:'Stoney Point',
            coords:
                {latitude:'34.27125553935417',longitude:'-118.60405296927681'},
            rockType:'sandstone',
            id: uuidv4()
        }
    ]
}




 


