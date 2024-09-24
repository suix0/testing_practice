function capitalize(string) {
  return string.at(0).toUpperCase().concat(string.substr(1));
}

export { capitalize }