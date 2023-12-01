function getAddressArray(address) {
  const addressArray = address.split(', ');
  const trimmedArray = addressArray.map((element) => element.trim());

  return trimmedArray;
}

export default getAddressArray;
