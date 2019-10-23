import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from './fragmentTypes.json'
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
})

export default ({req, app}) => {
  return {
    httpEndpoint: 'http://127.0.0.1:8080/query',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
