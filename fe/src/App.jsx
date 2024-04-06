import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [datas, setDatas] = useState([])
  const [datas1, setDatas1] = useState([])
  const [datas2, setDatas2] = useState([])
  const [datas3, setDatas3] = useState([])
  const [datas4, setDatas4] = useState([])
  const [datas5, setDatas5] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('http://localhost:5001/data');
        console.log(resp)
        resp.data.data1.map((item, index) => {
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
          delete item._id;
          if (!item.EstTraffic) {
            item.EstTraffic = null;
          }
        })
        resp.data.data2.map((item, index) => {
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
          delete item._id;
        })
        resp.data.data3.map((item, index) => {
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
          delete item._id;
        })
        resp.data.data4.map((item, index) => {
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
          delete item._id;
        })
        resp.data.data5.map((item, index) => {
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
          delete item._id;
        })
        resp.data.data6.map((item, index) => {
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
          delete item._id;
        })
        setDatas(resp.data.data1)
        setDatas1(resp.data.data2)
        setDatas2(resp.data.data3)
        setDatas3(resp.data.data4)
        setDatas4(resp.data.data5)
        setDatas5(resp.data.data6)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ padding: '10px' }}>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>

        <thead>
          <tr>
            {datas.length > 0 && Object.keys(datas[0]).map((key, index) => {

              return (
                <td key={key} style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '20px' }}>{key}</td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            const currentNO = data.NO;
            const previousNO = index > 0 ? datas[index - 1].NO : null;
            const isFirstNO = previousNO !== currentNO;
            if (data.Cross_siteRoadBlock === null) {
              data.Cross_siteRoadBlock = "-"
            }
            if (typeof (data.HomePage) === "number") {
              data.HomePage = data.HomePage.toLocaleString();
            }
            if (typeof (data.Cross_siteRoadBlock) === "number") {
              data.Cross_siteRoadBlock = data.Cross_siteRoadBlock.toLocaleString();
            }
            if (data.HomePage === null) {
              data.HomePage = "-"
            }
            if (isFirstNO) {
              return (
                <>
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '10px' }}>
                      <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }} key={data._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                    <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {data.Demo.map((demo, idx) => (
                        <div key={idx}>
                          <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                        </div>
                      ))}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.AverageCTR}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr style={{ textAlign: 'center' }} key={data._id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                  <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    {data.Demo.map((demo, idx) => (
                      <div key={idx}>
                        <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                      </div>
                    ))}
                  </td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.AverageCTR}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                </tr>
              );
            }
          })}

        </tbody>
      </table>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>

        <thead>
          <tr>
            {datas1.length > 0 && Object.keys(datas1[0]).map((key, index) => {
              console.log(Object.keys(datas1[0]))
              return (
                <td key={key} style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '20px' }}>{key}</td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas1.map((data, index) => {
            const currentNO1 = data.NO;
            const previousNO1 = index > 0 ? datas1[index - 1].NO : null;
            const isFirstNO = previousNO1 !== currentNO1;
            if (data.Dongia === null) {
              data.Dongia = "-"
            }
            if (typeof (data.Dongia) === "number") {
              data.Dongia = data.Dongia.toLocaleString();
            }

            if (isFirstNO) {
              return (
                <>
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '10px' }}>
                      <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }} key={data._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                    <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {data.Demo.map((demo, idx) => (
                        <div key={idx}>
                          <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                        </div>
                      ))}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Dongia}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.AverageCTR}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstImpression}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Note}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr style={{ textAlign: 'center' }} key={data._id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                  <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    {data.Demo.map((demo, idx) => (
                      <div key={idx}>
                        <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                      </div>
                    ))}
                  </td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Dongia}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.AverageCTR}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstImpression}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Note}</td>
                </tr>
              );
            }
          })}

        </tbody>
      </table>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>

        <thead>
          <tr>
            {datas2.length > 0 && Object.keys(datas2[0]).map((key, index) => {
              console.log(Object.keys(datas2[0]))
              return (
                <td key={key} style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '20px' }}>{key}</td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas2.map((data, index) => {
            const currentNO1 = data.NO;
            console.log(currentNO1)
            const previousNO1 = index > 0 ? datas2[index - 1].NO : null;
            const isFirstNO = previousNO1 !== currentNO1;
            if (data.HomePage === null) {
              data.HomePage = "-"
            }
            if (typeof (data.HomePage) === "number") {
              data.HomePage = data.HomePage.toLocaleString();
            }
            if (data.Cross_siteRoadBlock === null) {
              data.Cross_siteRoadBlock = "-"
            }
            if (typeof (data.Cross_siteRoadBlock) === "number") {
              data.Cross_siteRoadBlock = data.Cross_siteRoadBlock.toLocaleString();
            }
            if (data.Subject === null) {
              data.Subject = "-"
            }
            if (typeof (data.Subject) === "number") {
              data.Subject = data.Subject.toLocaleString();
            }

            if (isFirstNO) {
              return (
                <>
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '10px' }}>
                      <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }} key={data._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                    <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {data.Demo.map((demo, idx) => (
                        <div key={idx}>
                          <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                        </div>
                      ))}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Subject}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr style={{ textAlign: 'center' }} key={data._id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                  <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    {data.Demo.map((demo, idx) => (
                      <div key={idx}>
                        <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                      </div>
                    ))}
                  </td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Subject}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                </tr>
              );
            }
          })}

        </tbody>
      </table>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>

        <thead>
          <tr>
            {datas3.length > 0 && Object.keys(datas3[0]).map((key, index) => {
              console.log(Object.keys(datas3[0]))
              return (
                <td key={key} style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '20px' }}>{key}</td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas3.map((data, index) => {
            const currentNO1 = data.NO;
            const previousNO1 = index > 0 ? datas3[index - 1].NO : null;
            const isFirstNO = previousNO1 !== currentNO1;
            if (data.HomePage === null) {
              data.HomePage = "-"
            }
            if (typeof (data.HomePage) === "number") {
              data.HomePage = data.HomePage.toLocaleString();
            }
            if (data.Cross_siteRoadBlock === null) {
              data.Cross_siteRoadBlock = "-"
            }
            if (typeof (data.Cross_siteRoadBlock) === "number") {
              data.Cross_siteRoadBlock = data.Cross_siteRoadBlock.toLocaleString();
            }

            if (isFirstNO) {
              return (
                <>
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '10px' }}>
                      <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }} key={data._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                    <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {data.Demo.map((demo, idx) => (
                        <div key={idx}>
                          <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                        </div>
                      ))}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.AverageCTR}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr style={{ textAlign: 'center' }} key={data._id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                  <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    {data.Demo.map((demo, idx) => (
                      <div key={idx}>
                        <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                      </div>
                    ))}
                  </td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.AverageCTR}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                </tr>
              );
            }
          })}

        </tbody>
      </table>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>

        <thead>
          <tr>
            {datas4.length > 0 && Object.keys(datas4[0]).map((key, index) => {
              console.log(Object.keys(datas4[0]))
              return (
                <td key={key} style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '20px' }}>{key}</td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas4.map((data, index) => {
            const currentNO1 = data.NO;
            const previousNO1 = index > 0 ? datas4[index - 1].NO : null;
            const isFirstNO = previousNO1 !== currentNO1;
            if (data.Week === null) {
              data.Week = "-"
            }
            if (typeof (data.Week) === "number") {
              data.Week = data.Week.toLocaleString();
            }
            if (data.Month === null) {
              data.Dongia = "-"
            }
            if (typeof (data.Month) === "number") {
              data.Month = data.Month.toLocaleString();
            }
            if (data.Quater === null) {
              data.Quater = "-"
            }
            if (typeof (data.Quater) === "number") {
              data.Quater = data.Quater.toLocaleString();
            }

            if (isFirstNO) {
              return (
                <>
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '10px' }}>
                      <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }} key={data._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                    <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {data.Demo.map((demo, idx) => (
                        <div key={idx}>
                          <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                        </div>
                      ))}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Week}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Month}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Quater}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstCTR}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr style={{ textAlign: 'center' }} key={data._id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                  <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    {data.Demo.map((demo, idx) => (
                      <div key={idx}>
                        <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                      </div>
                    ))}
                  </td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Week}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Month}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Quater}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstCTR}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                </tr>
              );
            }
          })}

        </tbody>
      </table>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>

        <thead>
          <tr>
            {datas5.length > 0 && Object.keys(datas5[0]).map((key, index) => {
              console.log(Object.keys(datas5[0]))
              return (
                <td key={key} style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '20px' }}>{key}</td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas5.map((data, index) => {
            const currentNO1 = data.NO;
            const previousNO1 = index > 0 ? datas5[index - 1].NO : null;
            const isFirstNO = previousNO1 !== currentNO1;
            if (data.HomePage === null) {
              data.Week = "-"
            }
            if (typeof (data.HomePage) === "number") {
              data.HomePage = data.HomePage.toLocaleString();
            }
            if (data.XuyenDetail === null) {
              data.XuyenDetail = "-"
            }
            if (typeof (data.XuyenDetail) === "number") {
              data.XuyenDetail = data.XuyenDetail.toLocaleString();
            }
            if (data.Cross_siteRoadBlock === null) {
              data.Cross_siteRoadBlock = "-"
            }
            if (typeof (data.Cross_siteRoadBlock) === "number") {
              data.Cross_siteRoadBlock = data.Cross_siteRoadBlock.toLocaleString();
            }

            if (isFirstNO) {
              return (
                <>
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', border: '1px solid black', backgroundColor: 'yellow', padding: '10px' }}>
                      <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }} key={data._id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                    <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>
                      {data.Demo.map((demo, idx) => (
                        <div key={idx}>
                          <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                        </div>
                      ))}
                    </td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.XuyenDetail}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr style={{ textAlign: 'center' }} key={data._id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.NO}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>  <a href={`https://${data.Website}`} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{data.Website}</a></td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.Ads_Position}</td>
                  <td style={{ border: '1px solid black', padding: '8px', whiteSpace: 'pre-line' }}>{data.Dimensions}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.PlatForm}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>
                    {data.Demo.map((demo, idx) => (
                      <div key={idx}>
                        <a href={demo.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>{demo.name}</a>
                      </div>
                    ))}
                  </td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{data.BuyingMethod}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.HomePage}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.XuyenDetail}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.Cross_siteRoadBlock}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{data.EstTraffic}</td>
                </tr>
              );
            }
          })}

        </tbody>
      </table>
    </div >

  )
}

export default App
