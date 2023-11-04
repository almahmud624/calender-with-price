export const getPriceByDate = (month) => {
  const priceOfMonths = {
    1: {
      1: "8740",
      2: "8032",
      3: "7090",
      4: "6982",
      5: "8740",
      6: "6982",
      7: "6982",
      8: "6982",
      9: "5955",
      10: "6250",
      11: "6250",
      12: "5955",
      13: "6250",
      14: "5882",
      15: "6250",
      16: "6250",
      17: "6250",
      18: "6250",
      19: "5882",
      20: "5882",
      21: "5882",
      22: "6250",
      23: "6250",
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: "8740",
      29: "5882",
      30: "8740",
      31: "6982",
    },
    2: {
      1: "6250",
      2: "6455",
      3: "6885",
      4: "6291",
      5: "6248",
      6: "6291",
      7: "6982",
      8: "6250",
      9: "5955",
      10: "6250",
      11: "6250",
      12: "5955",
      13: "6250",
      14: "5882",
      15: "6250",
      16: "6250",
      17: "6250",
      18: "6885",
      19: "5882",
      20: "6885",
      21: "5882",
      22: "6250",
      23: "6885",
      24: "6250",
      25: "6982",
      26: "6982",
      27: "6982",
      28: "6885",
    },
    3: {
      1: "8740",
      2: "8032",
      3: "7090",
      4: "6982",
      5: "8740",
      6: "6982",
      7: "6982",
      8: "6982",
      9: "5955",
      10: "6250",
      11: "6250",
      12: "5955",
      13: "6250",
      14: "5882",
      15: "6250",
      16: "6250",
      17: "6250",
      18: "6250",
      19: "5882",
      20: "5882",
      21: "5882",
      22: "6250",
      23: "6250",
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: "8740",
      29: "5882",
      30: "8740",
      31: "8740",
    },
    4: {
      1: "8740",
      2: "8032",
      3: "7090",
      4: "6982",
      5: "8740",
      6: "6982",
      7: "6982",
      8: "6982",
      9: "5955",
      10: "6250",
      11: "6250",
      12: "5955",
      13: "6250",
      14: "5882",
      15: "6250",
      16: "6250",
      17: "6250",
      18: "6250",
      19: null,
      20: "5882",
      21: "5882",
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: null,
      27: "5882",
      28: null,
      29: null,
      30: "8740",
    },
    5: {
      1: "8740",
      2: "8032",
      3: null,
      4: "6982",
      5: "8740",
      6: "6982",
      7: "6982",
      8: null,
      9: null,
      10: null,
      11: "6250",
      12: "5955",
      13: null,
      14: null,
      15: "6250",
      16: null,
      17: null,
      18: "6250",
      19: null,
      20: "5882",
      21: null,
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: null,
      29: null,
      30: "8740",
      31: "8740",
    },
    6: {
      1: null,
      2: "8032",
      3: null,
      4: null,
      5: null,
      6: null,
      7: "6982",
      8: null,
      9: null,
      10: "6982",
      11: "6250",
      12: "5955",
      13: null,
      14: "6982",
      15: null,
      16: "6982",
      17: null,
      18: "6250",
      19: null,
      20: "5882",
      21: null,
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: null,
      29: null,
      30: "8740",
    },
    7: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "6982",
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: "6982",
      15: null,
      16: "6982",
      17: null,
      18: "6250",
      19: null,
      20: "5882",
      21: null,
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: null,
      29: null,
      30: "8740",
      31: "6982",
    },
    8: {
      1: "6982",
      2: null,
      3: null,
      4: null,
      5: "6982",
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: "6982",
      15: null,
      16: "6982",
      17: null,
      18: "6250",
      19: null,
      20: "5882",
      21: null,
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: null,
      29: null,
      30: null,
      31: "8740",
    },
    9: {
      1: null,
      2: null,
      3: "6982",
      4: null,
      5: "6982",
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: "6982",
      12: null,
      13: null,
      14: "6982",
      15: null,
      16: "6982",
      17: null,
      18: "6250",
      19: null,
      20: "5882",
      21: null,
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: null,
      29: null,
      30: null,
    },
    10: {
      1: null,
      2: null,
      3: "6982",
      4: null,
      5: "6982",
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: "6982",
      12: null,
      13: null,
      14: "6982",
      15: null,
      16: "6982",
      17: null,
      18: "6250",
      19: null,
      20: "5882",
      21: null,
      22: null,
      23: null,
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: null,
      29: null,
      30: null,
      31: null,
    },
    11: {
      1: "6250",
      2: "6455",
      3: "6885",
      4: "6291",
      5: "6248",
      6: "6291",
      7: "6982",
      8: "6250",
      9: "5955",
      10: "6250",
      11: "6250",
      12: "5955",
      13: "6250",
      14: "5882",
      15: "6250",
      16: "6250",
      17: "6250",
      18: "6885",
      19: "5882",
      20: "6885",
      21: "5882",
      22: "6250",
      23: "6885",
      24: "6250",
      25: "6982",
      26: "6982",
      27: "6982",
      28: "6885",
      29: "6250",
      30: "6250",
    },
    12: {
      1: "8740",
      2: "8032",
      3: "7090",
      4: "6982",
      5: "8740",
      6: "6982",
      7: "6982",
      8: "6982",
      9: "5955",
      10: "6250",
      11: "6250",
      12: "5955",
      13: "6250",
      14: "5882",
      15: "6250",
      16: "6250",
      17: "6250",
      18: "6250",
      19: "5882",
      20: "5882",
      21: "5882",
      22: "6250",
      23: "6250",
      24: "6250",
      25: "5882",
      26: "8740",
      27: "5882",
      28: "8740",
      29: "5882",
      30: "8740",
      31: "5882",
    },
  };
  return priceOfMonths[month];
};
