import PageInfo from "./pageInfo";

export default interface ListResponse<T> {
    pageInfo: PageInfo;
    nodes: T[];
}
