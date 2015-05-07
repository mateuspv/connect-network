/**
 * CurrentNetwork
 * @param {String} url
 */
const SUPORTED_NETWORKS = ['facebook', 'twitter'];
const UNSUPPORTED_NETWORK_NAME = 'unsupported';

class CurrentNetwork {

  constructor (url) {
    this._text = url;
  }

  network() {
    var allOccurrences = SUPORTED_NETWORKS.filter((network) => this._existInTheText(network));
    return this._extractOneOccurrence(allOccurrences);
  }

  _existInTheText(network) {
    var index = this._text.indexOf(network);
    return index > -1 ? network : false;
  }

  _extractOneOccurrence(ocurrences) {
    return ocurrences.length ? ocurrences[0] : UNSUPPORTED_NETWORK_NAME;
  }
}

export default CurrentNetwork;
