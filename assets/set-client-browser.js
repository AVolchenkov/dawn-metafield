const endpoint = 'https://devstorevolchenkov.myshopify.com/admin/api/2022-04/graphql.json';
const headers = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Shopify-Access-Token': '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'
});
const userBrowser = navigator.userAgent.toString();






function setOrderMetafield() {
  /**
  * The graphql query
  **/
  const query = `
  mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        value
      }
      userErrors {
        field
        message
      }
    }
  }
  `
  fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: query,
      variables: {
        metafields: {
          "key": "client_browser",
          "namespace": "my_fields",
          "type": "single_line_text_field",
          "ownerId": "gid://shopify/Order/4750733115634?key=624ec65ecf7cfa4f143ca28599cabf29",
          "value": userBrowser
        }
      }
    })
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
