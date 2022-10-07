import axios from "axios";

export const getyyyymmdd = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (1 + now.getMonth())).slice(-2);
  var day = ("0" + now.getDate()).slice(-2);
  return year + month + day;
};

export const getBoxofficedata = async () => {
  const respons = await (
    await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${
        process.env.REACT_APP_KOBIS_KEY
      }&targetDt=${getyyyymmdd() - 1}&repNationCd=K`
    )
  ).json();

  return respons;
};

export const searchMovie = async (params) => {
  const respons = await axios({
    method: "GET",
    url: `https://silo9506-proxy.herokuapp.com/http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2`,
    params: {
      ...params,
      ServiceKey: process.env.REACT_APP_KMDB_KEY,
      listCount: 10,
      detail: "Y",
    },
  });
  return respons.data.Data[0].Result;
};

// export const BoxofficeResult = async (params) => {
//   const respons = await axios({
//     method: "GET",
//     url: `https://silo9506-proxy.herokuapp.com/http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2`,
//     params: {
//       ...params,
//       ServiceKey: process.env.REACT_APP_KMDB_KEY,
//       listCount: 10,
//       detail: "Y",
//     },
//   });
//   return respons.data.Data[0].Result;
// };
