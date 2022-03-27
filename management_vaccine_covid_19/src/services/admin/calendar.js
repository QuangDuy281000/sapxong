import axios from "axios";

const API_URL = "http://localhost:8080/congthongtin/";
const getCalendar = (page) =>{
        axios.get(
            API_URL +"admin/calendar/" +page
        )
}

const getDataFilter = (district , ward) =>{
        let url_getdata = API_URL +"admin/data/create";
        if(district!=null)
        url_getdata = url_getdata +"?district=" +district;
        if (district!=null && ward!=null)
        url_getdata = url_getdata +"&ward=" +ward;
        axios.get(url_getdata);
}