import axios from "axios";

export type RockServiceType = {
    b_age:number
    b_int_age:number 
    b_int_id:number 
    b_int_name:string 
    best_int_name:string
    color:string
    comments:string
    descrip:string
    lith:string
    liths:string[]
    macro_units:[]
    map_id:number 
    name:string 
    source_id:number 
    strat_name:string 
    strat_names:string[]
    t_age:number 
    t_int_id:number
    t_int_name:number
}

class RockDataService {
    async getRockData(lat:string,long:string):Promise<Array<RockServiceType>> {
        const response = await axios('https://macrostrat.org/api/v2/geologic_units/map?', 
        {
            params: {
                lat:lat,
                lng:long
            }
        })
        const { data } = response.data.success
        return data
    }

    async getRockTypes() {
        const response = await axios.get('https://macrostrat.org/api/defs/lithologies?all')
        return response.data
    }
}

export default new RockDataService()