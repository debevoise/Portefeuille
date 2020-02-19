export function fetchStockInfo(ticker) {
	const token = "/batch?types=quote&token=pk_b6f890a95fb24dbfb1a85f362fe5687f";
	const baseUrl = "https://cloud.iexapis.com/stable/stock/";
    let symbol = ticker.toLowerCase();

    return $.ajax({
      	url: `${baseUrl}${symbol}${token}`
    });
}

export function fetchMarketInfo(tickerArray) {
	let symbols = tickerArray.map(ticker => ticker.toLowerCase()).join(',');

	const end = "&types=quote&token=pk_b6f890a95fb24dbfb1a85f362fe5687f";
	const baseUrl = "https://cloud.iexapis.com/stable/stock/market/batch?symbols=";

	let url = `${baseUrl}${symbols}${end}`;
	
	return $.ajax({ url })
}