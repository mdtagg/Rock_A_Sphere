import axios from "axios";

class RockDataService {
    async getRockData(lat,long) {
        const response = await axios.get('https://macrostrat.org/api/v2/geologic_units/map?', 
        {
            params: {
                lat:lat,
                lng:long
            }
        })
        return response.data
    }

    async getRockTypes() {
        const response = await axios.get('https://macrostrat.org/api/defs/lithologies?all')
        return response.data
    }
}

export default new RockDataService()