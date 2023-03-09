import { v4 as uuidv4 } from 'uuid';

export const getClimbingAreas = () => {
    return [
        {
            title:'Red Rock',
            coords:
                {latitude:'36.10',longitude:'-115.49'},
            rockType:'sandstone',
            id: uuidv4()
        },
        {
            title:'Stoney Point',
            coords:
                {latitude:'34.28088471105757',longitude:'-118.60424751803053'},
            rockType:'sandstone',
            id: uuidv4()
        }
    ]
}

// export const climbingAreas = {
//     coords:'34.27376872683971, -118.60238934402216',
//     rockType:'sandstone'
// }

// console.log(getClimbingAreas())


 


