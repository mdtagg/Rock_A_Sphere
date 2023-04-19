import axios from "axios";

// type RockServiceType = {
//     b_age:number
//     b_int_age:number 
//     b_int_id:number 
//     b_int_name:string 
//     best_int_name:string
//     color:string
//     comments:string
//     descrip:string
//     lith:string
//     liths:string[]
//     macro_units
// }

class RockDataService {
    async getRockData(lat:string,long:string):Promise<Array<string>> {
        const response = await axios.get('https://macrostrat.org/api/v2/geologic_units/map?', 
        {
            params: {
                lat:lat,
                lng:long
            }
        })
        const { data } = response.data.success
        // console.log({data})

        return data
    }

    async getRockTypes() {
        const response = await axios.get('https://macrostrat.org/api/defs/lithologies?all')
        return response.data
    }
}

export default new RockDataService()