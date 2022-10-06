export const getyyyymmdd = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (1 + now.getMonth())).slice(-2);
  var day = ("0" + now.getDate()).slice(-2);
  return year + month + day;
};

export const getBoxoffice = async () => {
  const respons = await (
    await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${
        process.env.REACT_APP_KOBIS_KEY
      }&targetDt=${getyyyymmdd() - 1}`
    )
  ).json();

  return respons;
};

export const Test = async () => {
  const respons = await (
    await fetch(
      `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${process.env.REACT_APP_KMDB_KEY}&detail=N&query="해리포터와비밀의방"`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    )
  ).json();
  return respons;
};
