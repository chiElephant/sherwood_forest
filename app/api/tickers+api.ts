export async function GET(request: Request) {
  // const response = await fetch(
  //   `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2025-01-01&interval=1d`
  // );

  // const res = await response.json();
  return Response.json(data);
}

const data = [
  {
    timestamp: '2025-01-01T00:00:00Z',
    price: 93863.32,
    volume_24h: 32368370025,
    market_cap: 1858881389122,
  },
  {
    timestamp: '2025-01-02T00:00:00Z',
    price: 96218.95,
    volume_24h: 33415964026,
    market_cap: 1905579811295,
  },
  {
    timestamp: '2025-01-03T00:00:00Z',
    price: 97224.91,
    volume_24h: 37565773385,
    market_cap: 1925549725741,
  },
  {
    timestamp: '2025-01-04T00:00:00Z',
    price: 98023.74,
    volume_24h: 30748726029,
    market_cap: 1941415437844,
  },
  {
    timestamp: '2025-01-05T00:00:00Z',
    price: 98074.64,
    volume_24h: 20060688763,
    market_cap: 1942469486366,
  },
  {
    timestamp: '2025-01-06T00:00:00Z',
    price: 100164.69,
    volume_24h: 33640071356,
    market_cap: 1983912289072,
  },
  {
    timestamp: '2025-01-07T00:00:00Z',
    price: 99929.31,
    volume_24h: 49086461120,
    market_cap: 1979291477645,
  },
  {
    timestamp: '2025-01-08T00:00:00Z',
    price: 95504.12,
    volume_24h: 59428646227,
    market_cap: 1891678858359,
  },
  {
    timestamp: '2025-01-09T00:00:00Z',
    price: 93482.06,
    volume_24h: 57746625030,
    market_cap: 1851666455205,
  },
  {
    timestamp: '2025-01-10T00:00:00Z',
    price: 94252.96,
    volume_24h: 57057655856,
    market_cap: 1866981693394,
  },
  {
    timestamp: '2025-01-11T00:00:00Z',
    price: 94423.34,
    volume_24h: 39866490059,
    market_cap: 1870399132088,
  },
  {
    timestamp: '2025-01-12T00:00:00Z',
    price: 94580.3,
    volume_24h: 18049689248,
    market_cap: 1873552084260,
  },
  {
    timestamp: '2025-01-13T00:00:00Z',
    price: 93056.02,
    volume_24h: 40447899046,
    market_cap: 1843395214490,
  },
  {
    timestamp: '2025-01-14T00:00:00Z',
    price: 95894.75,
    volume_24h: 60861417995,
    market_cap: 1899676877529,
  },
  {
    timestamp: '2025-01-15T00:00:00Z',
    price: 98078.99,
    volume_24h: 49311243788,
    market_cap: 1942992775618,
  },
  {
    timestamp: '2025-01-16T00:00:00Z',
    price: 99540.89,
    volume_24h: 51872513599,
    market_cap: 1971995550194,
  },
  {
    timestamp: '2025-01-17T00:00:00Z',
    price: 102821.41,
    volume_24h: 58510195963,
    market_cap: 2037029729564,
  },
  {
    timestamp: '2025-01-18T00:00:00Z',
    price: 103806.03,
    volume_24h: 59930513432,
    market_cap: 2056582890742,
  },
  {
    timestamp: '2025-01-19T00:00:00Z',
    price: 104659.03,
    volume_24h: 50999243605,
    market_cap: 2073529523202,
  },
  {
    timestamp: '2025-01-20T00:00:00Z',
    price: 104634.88,
    volume_24h: 102364490380,
    market_cap: 2073097848827,
  },
  {
    timestamp: '2025-01-21T00:00:00Z',
    price: 103887.23,
    volume_24h: 99197254310,
    market_cap: 2058331820710,
  },
  {
    timestamp: '2025-01-22T00:00:00Z',
    price: 104932.75,
    volume_24h: 64238625963,
    market_cap: 2079092116992,
  },
  {
    timestamp: '2025-01-23T00:00:00Z',
    price: 103275.51,
    volume_24h: 64196027353,
    market_cap: 2046305112061,
  },
  {
    timestamp: '2025-01-24T00:00:00Z',
    price: 105083.74,
    volume_24h: 81930260808,
    market_cap: 2082177890159,
  },
  {
    timestamp: '2025-01-25T00:00:00Z',
    price: 104734.59,
    volume_24h: 38101845938,
    market_cap: 2075301830879,
  },
  {
    timestamp: '2025-01-26T00:00:00Z',
    price: 104865.43,
    volume_24h: 20039660003,
    market_cap: 2077939939770,
  },
  {
    timestamp: '2025-01-27T00:00:00Z',
    price: 100450.15,
    volume_24h: 56433762892,
    market_cap: 1990496245402,
  },
  {
    timestamp: '2025-01-28T00:00:00Z',
    price: 102406.27,
    volume_24h: 60341634524,
    market_cap: 2029305369802,
  },
  {
    timestamp: '2025-01-29T00:00:00Z',
    price: 102529.04,
    volume_24h: 40403819270,
    market_cap: 2031786534446,
  },
  {
    timestamp: '2025-01-30T00:00:00Z',
    price: 105122.04,
    volume_24h: 47883762715,
    market_cap: 2083219725596,
  },
  {
    timestamp: '2025-01-31T00:00:00Z',
    price: 104042.79,
    volume_24h: 37464472040,
    market_cap: 2061877997739,
  },
  {
    timestamp: '2025-02-01T00:00:00Z',
    price: 102017.64,
    volume_24h: 36960852669,
    market_cap: 2021791520389,
  },
  {
    timestamp: '2025-02-02T00:00:00Z',
    price: 99161.59,
    volume_24h: 38440661936,
    market_cap: 1965246983611,
  },
  {
    timestamp: '2025-02-03T00:00:00Z',
    price: 96922.02,
    volume_24h: 94143506631,
    market_cap: 1920910579415,
  },
  {
    timestamp: '2025-02-04T00:00:00Z',
    price: 99381.97,
    volume_24h: 74456362533,
    market_cap: 1969709874388,
  },
  {
    timestamp: '2025-02-05T00:00:00Z',
    price: 97794.95,
    volume_24h: 58046267525,
    market_cap: 1938294678610,
  },
  {
    timestamp: '2025-02-06T00:00:00Z',
    price: 97540.56,
    volume_24h: 43594180482,
    market_cap: 1933297764793,
  },
  {
    timestamp: '2025-02-07T00:00:00Z',
    price: 97360.59,
    volume_24h: 47353734821,
    market_cap: 1929778811714,
  },
  {
    timestamp: '2025-02-08T00:00:00Z',
    price: 96361.14,
    volume_24h: 42380871911,
    market_cap: 1910020746637,
  },
  {
    timestamp: '2025-02-09T00:00:00Z',
    price: 96621.4,
    volume_24h: 24741709929,
    market_cap: 1915223765895,
  },
  {
    timestamp: '2025-02-10T00:00:00Z',
    price: 97260.2,
    volume_24h: 36513453476,
    market_cap: 1927928677823,
  },
  {
    timestamp: '2025-02-11T00:00:00Z',
    price: 97225.9,
    volume_24h: 33261488841,
    market_cap: 1927289323653,
  },
  {
    timestamp: '2025-02-12T00:00:00Z',
    price: 96300.77,
    volume_24h: 39754793658,
    market_cap: 1908989203448,
  },
  {
    timestamp: '2025-02-13T00:00:00Z',
    price: 96442.1,
    volume_24h: 45328721877,
    market_cap: 1911831342676,
  },
];
