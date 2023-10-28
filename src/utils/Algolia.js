import algoliasearch from "algoliasearch";

 const Algolia = () => {
  const client = algoliasearch(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_APPLICATION_KEY);
  return client.initIndex("inriver_index");
};

export default Algolia;