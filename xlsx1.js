const XLSX = require("xlsx");
const PriceModel = require("./model/PriceModel");
const workbook = XLSX.readFile("test3.xlsx");
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const excelData = XLSX.utils.sheet_to_json(worksheet);
const firstRow = excelData[286];
console.log(firstRow)
console.log((excelData[67])['Đơn Giá (VNĐ)'] === "-")
async function my() {
    try {
        function processRowData(rowData, columnName) {
            if (rowData && rowData[columnName]) {
                if (typeof rowData[columnName] === "string" && rowData[columnName] !== "-") {
                    const numericValue = parseFloat(rowData[columnName].replace(/[,.]/g, ''));
                   
                    if (!isNaN(numericValue)) {
                        rowData[columnName] = numericValue;
                    } else {
                        
                        rowData[columnName] = rowData[columnName];
                    }
                } else if (rowData[columnName] === "-") {
                    rowData[columnName] = null;
                }
            } else {
                rowData[columnName] = null;
            }
            
        }
        function processDemoString(rowData,demoString, urlColumn) {
            const demoLines = demoString.split('\n');
            return demoLines.map(line => {
                const name = line.trim();
                const url = rowData[urlColumn];
                return { name, url };
            });
        }
        for (let i = 0; i < 162; i++) {
            const rowData = excelData[i];
            const columnsToProcess = ['Đơn Giá (VNĐ)', 'Unnamed: 8'];
            columnsToProcess.forEach(columnName => {
                processRowData(rowData, columnName);
            });
            const demos = processDemoString(rowData,rowData['Unnamed: 5'], 'Unnamed: 12');
            if (!rowData['Unnamed: 10']) {
                rowData['Unnamed: 10'] = null
            }
            const newPrice = new PriceModel({
                NO: rowData['Unnamed: 0'],
                Website: rowData['Unnamed: 1'],
                Ads_Position: rowData['Unnamed: 2'],
                Dimensions: rowData['Unnamed: 3'],
                PlatForm: rowData['Unnamed: 4'],
                Demo: demos,
                BuyingMethod: rowData['Unnamed: 6'],
                HomePage: rowData['Đơn Giá (VNĐ)'],
                Cross_siteRoadBlock: rowData['Unnamed: 8'],
                AverageCTR: rowData['Unnamed: 9'],
                EstTraffic: rowData['Unnamed: 10'],

            });
            await newPrice.save();
            console.log("helo")
        }
        for (let i = 162; i < 257; i++) {
            const rowData = excelData[i];

            const demos = processDemoString(rowData,rowData['Unnamed: 5'], 'Unnamed: 12');
            let columnsToProcess;
            if(rowData['Unnamed: 8']==="-"){
                columnsToProcess = ['Đơn Giá (VNĐ)'];
            }
            else{
                columnsToProcess = ['Đơn Giá (VNĐ)', 'Unnamed: 8'];
            }
          
            columnsToProcess.forEach(columnName => {
                processRowData(rowData, columnName);
            });
            if (!rowData['Unnamed: 10']) {
                rowData['Unnamed: 10'] = null
            }
            if (!rowData['Unnamed: 8']) {
                rowData['Unnamed: 8'] = null
            }
           
            const newPrice = new PriceModel({
                NO: rowData['Unnamed: 0'],
                Website: rowData['Unnamed: 1'],
                Ads_Position: rowData['Unnamed: 2'],
                Dimensions: rowData['Unnamed: 3'],
                PlatForm: rowData['Unnamed: 4'],
                Demo: demos,
                BuyingMethod: rowData['Unnamed: 6'],
                Dongia: rowData['Đơn Giá (VNĐ)'],
                AverageCTR: rowData['Unnamed: 8'],
                EstImpression: rowData['Unnamed: 9'],
                Note: rowData['Unnamed: 10'],

            });
            await newPrice.save()
        }

        for (let i = 257; i < 285; i++) {
            const rowData = excelData[i];
            if (rowData && rowData['Đơn Giá (VNĐ)']) {
                const columnsToProcess = ['Đơn Giá (VNĐ)', 'Unnamed: 8', 'Unnamed: 9'];
                columnsToProcess.forEach(columnName => {
                    processRowData(rowData, columnName);
                });
                const demos = processDemoString(rowData,rowData['Unnamed: 5'], 'Unnamed: 12');
                if (!rowData['Unnamed: 10']) {
                    rowData['Unnamed: 10'] = null
                }
                const newPrice = new PriceModel({
                    NO: rowData['Unnamed: 0'],
                    Website: rowData['Unnamed: 1'],
                    Ads_Position: rowData['Unnamed: 2'],
                    Dimensions: rowData['Unnamed: 3'],
                    PlatForm: rowData['Unnamed: 4'],
                    Demo: demos,
                    BuyingMethod: rowData['Unnamed: 6'],
                    HomePage: rowData['Đơn Giá (VNĐ)'],
                    Cross_siteRoadBlock: rowData['Unnamed: 8'],
                    Subject: rowData['Unnamed: 9'],
                    EstTraffic: rowData['Unnamed: 10'],

                });
                await newPrice.save();
            }
           
        }
        for (let i = 285; i < 300; i++) {
            const rowData = excelData[i];
            const columnsToProcess = ['Đơn Giá (VNĐ)','Unnamed: 8'];
            columnsToProcess.forEach(columnName => {
                processRowData(rowData, columnName);
            });
            const demos = [];
            if (rowData['Unnamed: 5'] !== "-") {
                const demoString = rowData['Unnamed: 5']
                const demoLines = demoString.split('\n');
                demoLines.forEach(line => {
                    const name = line.trim();
                    const url = rowData['Unnamed: 12']
                    demos.push({ name, url });
                });
            }
            else {
                demos.push({ name: "-", url: null });
            }
            if (!rowData['Unnamed: 10']) {
                rowData['Unnamed: 10'] = null
            }

            const newPrice = new PriceModel({
                NO: rowData['Unnamed: 0'],
                Website: rowData['Unnamed: 1'],
                Ads_Position: rowData['Unnamed: 2'],
                Dimensions: rowData['Unnamed: 3'],
                PlatForm: rowData['Unnamed: 4'],
                Demo: demos,
                BuyingMethod: rowData['Unnamed: 6'],
                HomePage: rowData['Đơn Giá (VNĐ)'],
                Cross_siteRoadBlock: rowData['Unnamed: 8'],
                AverageCTR: rowData['Unnamed: 9'],
                EstTraffic: rowData['Unnamed: 10'],
            });
            await newPrice.save();
            console.log("helo")
        }
        for (let i = 299; i < 333; i++) {
            const rowData = excelData[i];
            if (rowData && rowData['Đơn Giá (VNĐ)']) {
                const columnsToProcess = ['Đơn Giá (VNĐ)', 'Unnamed: 8', 'Unnamed: 6'];
                columnsToProcess.forEach(columnName => {
                    processRowData(rowData, columnName);
                });
                const demos = processDemoString(rowData,rowData['Unnamed: 5'], 'Unnamed: 12');
                if (!rowData['Unnamed: 10']) {
                    rowData['Unnamed: 10'] = null
                }
                if (!rowData['Unnamed: 9']) {
                    rowData['Unnamed: 9'] = null
                }
                const newPrice = new PriceModel({
                    NO: rowData['Unnamed: 0'],
                    Website: rowData['Unnamed: 1'],
                    Ads_Position: rowData['Unnamed: 2'],
                    Dimensions: rowData['Unnamed: 3'],
                    PlatForm: rowData['Unnamed: 4'],
                    Demo: demos,
                    Week: rowData['Unnamed: 6'],
                    Month: rowData['Đơn Giá (VNĐ)'],
                    Quater: rowData['Unnamed: 8'],
                    EstCTR: rowData['Unnamed: 9'],
                    EstTraffic: rowData['Unnamed: 10'],

                });
                await newPrice.save();
            }
           
        }
        for (let i = 333; i < 348; i++) {
            const rowData = excelData[i];
            if (rowData && rowData['Đơn Giá (VNĐ)']) {
                const columnsToProcess = ['Đơn Giá (VNĐ)', 'Unnamed: 8', 'Unnamed: 9'];
                columnsToProcess.forEach(columnName => {
                    processRowData(rowData, columnName);
                });
                const demos = processDemoString(rowData,rowData['Unnamed: 5'], 'Unnamed: 12');
                if (!rowData['Unnamed: 10']) {
                    rowData['Unnamed: 10'] = null
                }
                const newPrice = new PriceModel({
                    NO: rowData['Unnamed: 0'],
                    Website: rowData['Unnamed: 1'],
                    Ads_Position: rowData['Unnamed: 2'],
                    Dimensions: rowData['Unnamed: 3'],
                    PlatForm: rowData['Unnamed: 4'],
                    Demo: demos,
                    BuyingMethod: rowData['Unnamed: 6'],
                    HomePage: rowData['Đơn Giá (VNĐ)'],
                    XuyenDetail: rowData['Unnamed: 8'],
                    Cross_siteRoadBlock: rowData['Unnamed: 9'],
                    EstTraffic: rowData['Unnamed: 10'],

                });
                await newPrice.save();
            }
           
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = my;