// Default ember format is posts.
const SEGMENT = '.';

class cssCurrentPage {
  constructor(path) {
    this._path = path;
    this._prefix = 'page';
    this._separator = '-';
  }

  prefix(prefix) {
    this._prefix = prefix;
  }

  separator(separator) {
    this._separator = separator;
  }

  path() {
    return this._path ? this._applySeparator() : this._prefix;
  }

  _getPaths() {
    var defaultPaths = this._path.split(SEGMENT);
    defaultPaths.unshift(this._prefix);
    return defaultPaths;
  }

  _addSeparator(path, nextPath) {
    return path + this._separator + nextPath;
  }

  _applySeparator() {
    return this._getPaths().reduce(this._addSeparator.bind(this));
  }
}

export default cssCurrentPage;
