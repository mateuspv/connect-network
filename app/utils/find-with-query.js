export default function(store, type, query) {
  var adapter = store.adapterFor(type);
  var serializer = store.serializerFor(type);
  var typeClass = store.modelFor(type);
  var url = adapter.buildURL(type);
  var ajaxPromise = adapter.ajax(url, 'GET', { data: query });

  return ajaxPromise.then(function(rawPayload) {
    var extractedPayload = serializer.extract(store, typeClass, rawPayload, null, 'find');
    store.push(typeClass, extractedPayload);
    return rawPayload.search;
  });
}
