function arrayAnalyzer(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let analysis = {};

  // Get the average
  analysis.average = (array.reduce((prev, current) => {
    return prev + current;
  }, 0)) / array.length;

  // Get the min
  analysis.min = sortedArray[0];

  // Get the max
  analysis.max = sortedArray[sortedArray.length - 1];

  // Get the length
  analysis.length = array.length;

  return analysis;
}

export { arrayAnalyzer }